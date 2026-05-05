import fs from 'fs';
import path from 'path';
import chalk from 'chalk';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PASTA_GESTAO = path.join(__dirname, '..', '.antigravity', 'gestao');

export class GestorEquipe {
  constructor() {
    // Diretório onde o código do Amago está instalado (onde fica o dashboard)
    this.diretorioKit = path.join(__dirname, '..');
    
    // Diretório do projeto que está sendo monitorado no momento
    this.diretorioProjeto = process.cwd();

    // Infraestrutura de Gestão no PROJETO
    this.diretorioBase = path.join(this.diretorioProjeto, '.antigravity', 'gestao');
    this.caminhoRegistro = path.join(this.diretorioBase, 'registro_tarefas.json');
    this.caminhoCaixaEntrada = path.join(this.diretorioBase, 'comunicacao', 'caixas_entrada');
    this.caminhoGlobal = path.join(this.diretorioBase, 'comunicacao', 'global.msg');
    this.caminhoTravas = path.join(this.diretorioBase, 'travas');
    
    this.inicializar();
  }

  inicializar() {
    if (!fs.existsSync(this.caminhoCaixaEntrada)) {
      fs.mkdirSync(this.caminhoCaixaEntrada, { recursive: true });
    }
    if (!fs.existsSync(this.caminhoTravas)) {
      fs.mkdirSync(this.caminhoTravas, { recursive: true });
    }
    const logDir = path.join(this.diretorioBase, 'logs');
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }

    if (!fs.existsSync(this.caminhoRegistro)) {
      const dados = {
        projeto: "Novo Projeto Amago",
        data_inicio: new Date().toISOString().split('T')[0],
        estado_global: "INICIALIZADO",
        tarefas: [],
        agentes: {
          PM: { estado: "OCIOSO", tarefa: "" },
          FRONTEND: { estado: "OCIOSO", tarefa: "" },
          BACKEND: { estado: "OCIOSO", tarefa: "" },
          SECURITY: { estado: "OCIOSO", tarefa: "" },
          QA: { estado: "OCIOSO", tarefa: "" }
        },
        logs: []
      };
      this.salvarRegistro(dados);
    }

    if (!fs.existsSync(this.caminhoGlobal)) {
      fs.writeFileSync(this.caminhoGlobal, "# COMUNICADOS GLOBAIS\n", 'utf8');
    }

    this.registrarLog("SISTEMA", "Infraestrutura Amago ativada.");
    this.atualizarDashboard();
    console.log(`[OK] Infraestrutura Amago ativada em: ${this.diretorioBase}`);
  }

  registrarLog(agente, mensagem, nivel = "INFO", dadosExternos = null) {
    const dados = dadosExternos || this.carregarRegistro();
    const agora = new Date();
    const logEntry = {
      timestamp: agora.toLocaleTimeString(),
      agente: agente.toUpperCase(),
      mensagem,
      nivel
    };
    dados.logs.unshift(logEntry);
    if (dados.logs.length > 50) dados.logs.pop();
    
    // Atualiza estado do agente se aplicável
    if (dados.agentes[agente.toUpperCase()]) {
      dados.agentes[agente.toUpperCase()].ultima_msg = mensagem;
    }

    // Persistência em arquivo físico
    const dataIso = agora.toISOString().split('T')[0];
    const logFile = path.join(this.diretorioBase, 'logs', `${dataIso}.log`);
    const logLinha = `[${logEntry.timestamp}] [${nivel}] [${agente.toUpperCase()}] ${mensagem}\n`;
    fs.appendFileSync(logFile, logLinha, 'utf8');

    if (!dadosExternos) {
      this.salvarRegistro(dados);
      this.atualizarDashboard();
    }
  }

  criarTarefa(titulo, responsavel, preReqs = "") {
    const dados = this.carregarRegistro();
    const listaPre = preReqs ? preReqs.split(',').map(p => p.trim()) : [];

    const novaTarefa = {
      id: `T${String(dados.tarefas.length + 1).padStart(2, '0')}`,
      descricao: titulo,
      responsavel: responsavel.toUpperCase(),
      estado: "PENDENTE",
      pre_requisitos: listaPre,
      criada_em: new Date().toISOString()
    };

    dados.tarefas.push(novaTarefa);
    
    if (dados.agentes[responsavel.toUpperCase()]) {
      dados.agentes[responsavel.toUpperCase()].estado = "PENSANDO";
      dados.agentes[responsavel.toUpperCase()].tarefa = titulo;
    }

    this.registrarLog("GESTOR", `Tarefa ${novaTarefa.id} atribuída a ${responsavel}.`, "INFO", dados);
    
    // Mensagem automática do agente (setTimeout ainda usa o arquivo físico e dados recarregados)
    setTimeout(() => {
      this.registrarLog(responsavel, `Recebido. Iniciando análise da tarefa ${novaTarefa.id}: "${titulo}"...`);
    }, 500);

    this.salvarRegistro(dados);
    this.atualizarDashboard();
    console.log(`[OK] Tarefa ${novaTarefa.id} atribuída a ${responsavel}.`);
  }

  enviarMensagem(remetente, destinatario, conteudo) {
    const msg = {
      timestamp: new Date().toISOString(),
      de: remetente.toUpperCase(),
      msg: conteudo
    };

    let caminho;
    if (destinatario.toLowerCase() === 'global') {
      caminho = this.caminhoGlobal;
    } else {
      caminho = path.join(this.caminhoCaixaEntrada, `${destinatario.toLowerCase()}.msg`);
    }

    fs.appendFileSync(caminho, JSON.stringify(msg, null, 0) + "\n", 'utf8');
    this.registrarLog(remetente, `Mensagem para ${destinatario}: ${conteudo.substring(0, 30)}...`);
    console.log(`[OK] Mensagem enviada para ${destinatario}.`);
  }

  atualizarEstado(idTarefa, novoEstado) {
    const dados = this.carregarRegistro();
    const tarefa = dados.tarefas.find(t => t.id === idTarefa);
    if (tarefa) {
      const estadoAnterior = tarefa.estado;
      tarefa.estado = novoEstado.toUpperCase();
      const resp = tarefa.responsavel;
      
      // Fluxo de QA para Desenvolvedores (Somente se não estiver já em REVISÃO)
      if (novoEstado.toUpperCase() === "PRONTO" && (resp === "FRONTEND" || resp === "BACKEND") && estadoAnterior !== "REVISAO") {
        tarefa.estado = "REVISAO";
        if (dados.agentes[resp]) {
          dados.agentes[resp].estado = "OCIOSO";
          dados.agentes[resp].tarefa = "";
        }
        this.registrarLog(resp, `Tarefa ${idTarefa} finalizada. Enviando para REVISÃO do QA.`, "INFO", dados);
        this.registrarLog("QA", `Nova tarefa ${idTarefa} aguardando auditoria.`, "WARN", dados);
        
        if (dados.agentes["QA"]) {
          dados.agentes["QA"].estado = "PENSANDO";
          dados.agentes["QA"].tarefa = `Revisar ${idTarefa}`;
        }
      } else if (novoEstado.toUpperCase() === "PRONTO") {
        if (dados.agentes[resp]) {
          dados.agentes[resp].estado = "OCIOSO";
          dados.agentes[resp].tarefa = "";
        }
        // Limpa estado do QA se ele estava revisando esta tarefa
        if (dados.agentes["QA"] && dados.agentes["QA"].tarefa === `Revisar ${idTarefa}`) {
          dados.agentes["QA"].estado = "OCIOSO";
          dados.agentes["QA"].tarefa = "";
          this.registrarLog("QA", `Auditoria da tarefa ${idTarefa} finalizada com sucesso.`, "INFO", dados);
        }
        this.registrarLog(resp, `Tarefa ${idTarefa} CONCLUÍDA e validada.`, "LEARN", dados);
        this.aprenderComTarefa(tarefa);
      } else if (novoEstado.toUpperCase() === "FAZENDO") {
        if (dados.agentes[resp]) {
          dados.agentes[resp].estado = "EXECUTANDO";
        }
        this.registrarLog(resp, `Iniciando execução da tarefa ${idTarefa}.`, "INFO", dados);
      }

      this.salvarRegistro(dados);
      this.atualizarDashboard();
      console.log(`[OK] Tarefa ${idTarefa} movida para ${tarefa.estado}.`);
    } else {
      console.log(`[ERRO] Tarefa ${idTarefa} não encontrada.`);
    }
  }

  aprenderComTarefa(tarefa) {
    const skillsDir = path.join(this.diretorioKit, 'skills');
    if (!fs.existsSync(skillsDir)) fs.mkdirSync(skillsDir, { recursive: true });
    
    const aprendizado = `## Aprendizado TAREFA ${tarefa.id}\n- **Descrição**: ${tarefa.descricao}\n- **Data**: ${new Date().toLocaleDateString()}\n- **Insight**: O processo foi concluído com sucesso. Implementação validada.\n\n`;
    
    const caminhoSkill = path.join(skillsDir, `aprendizados_${tarefa.responsavel.toLowerCase()}.md`);
    fs.appendFileSync(caminhoSkill, aprendizado, 'utf8');
    this.registrarLog("SISTEMA", `Novo conhecimento consolidado em skills/aprendizados_${tarefa.responsavel.toLowerCase()}.md`, "LEARN");
  }

  atualizarDashboard() {
    const dados = this.carregarRegistro();
    
    // Cálculo de Progresso
    const total = dados.tarefas.length;
    const concluidas = dados.tarefas.filter(t => t.estado === "PRONTO").length;
    dados.progresso = total > 0 ? Math.round((concluidas / total) * 100) : 0;
    
    const dataJsPath = path.join(this.diretorioKit, 'gestor_data.js');
    const content = `window.AMAGO_DATA = ${JSON.stringify(dados, null, 2)};`;
    fs.writeFileSync(dataJsPath, content, 'utf8');
  }

  async modoInterativo() {
    const readline = await import('readline');
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    const question = (query) => new Promise((resolve) => rl.question(query, resolve));

    console.log(chalk.cyan.bold("\n--- AMAGO GESTOR INTERATIVO ---\n"));
    
    const nome = await question("Qual o nome desta missão? ");
    const stack = await question("Qual a stack principal (ex: Next.js, Vite, Python)? ");
    const objetivo = await question("O que vamos construir hoje? ");

    const dados = this.carregarRegistro();
    dados.projeto = nome;
    dados.stack = stack;
    this.salvarRegistro(dados);

    this.registrarLog("GESTOR", `Missão "${nome}" iniciada para stack ${stack}.`);

    // Criar workflow básico no projeto atual
    const workflowPath = path.join(this.diretorioProjeto, 'workflows', `missao-${nome.toLowerCase().replace(/\s+/g, '-')}.md`);
    const workflowContent = `---\ndescription: Missão ${nome}\n---\n\n# Objetivo: ${objetivo}\n\n- [ ] Discovery inicial\n- [ ] Setup da base em ${stack}\n- [ ] Desenvolvimento de componentes core\n`;
    
    const workflowsDir = path.dirname(workflowPath);
    if (!fs.existsSync(workflowsDir)) fs.mkdirSync(workflowsDir, { recursive: true });
    fs.writeFileSync(workflowPath, workflowContent, 'utf8');

    console.log(chalk.green(`\n[OK] Missão configurada! Workflow criado em: ${workflowPath}`));
    console.log(chalk.yellow("Abra o dashboard para acompanhar."));
    
    const { exec } = await import('child_process');
    const dashPath = path.join(this.diretorioKit, 'gestor_agentes.html');
    exec(`start "" "${dashPath}"`);

    rl.close();
    this.atualizarDashboard();
  }

  limparTudo() {
    if (fs.existsSync(this.diretorioBase)) {
      fs.rmSync(this.diretorioBase, { recursive: true, force: true });
    }
    this.inicializar();
    console.log("[AVISO] Ambiente de gestão resetado com sucesso.");
  }

  carregarRegistro() {
    return JSON.parse(fs.readFileSync(this.caminhoRegistro, 'utf8'));
  }

  salvarRegistro(dados) {
    fs.writeFileSync(this.caminhoRegistro, JSON.stringify(dados, null, 2), 'utf8');
  }
}
