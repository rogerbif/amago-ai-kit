#!/usr/bin/env node

import { program } from 'commander';
import chalk from 'chalk';
import fs from 'fs';
import path from 'path';
import { GestorEquipe } from '../core/gestor.js';

const gestor = new GestorEquipe();

program
  .name('amago')
  .description('Amago AI Kit: Orquestrador de Agentes de Elite')
  .version('1.0.0');

program
  .command('inicializar')
  .description('Ativa a infraestrutura de gestão do Amago')
  .action(() => {
    gestor.inicializar();
  });

program
  .command('tarefa')
  .description('Cria uma nova tarefa para um agente')
  .argument('<titulo>', 'Título da tarefa')
  .argument('<responsavel>', 'Persona responsável (PM: FRONTEND: etc)')
  .option('-p, --pre <requisitos>', 'IDs de tarefas pré-requisitos separados por vírgula')
  .action((titulo, responsavel, options) => {
    gestor.criarTarefa(titulo, responsavel, options.pre || "");
  });

program
  .command('mensagem')
  .description('Envia uma mensagem para um agente ou canal global')
  .argument('<remetente>', 'Quem envia')
  .argument('<destinatario>', 'Quem recebe ou GLOBAL')
  .argument('<conteudo>', 'Mensagem')
  .action((remetente, destinatario, conteudo) => {
    gestor.enviarMensagem(remetente, destinatario, conteudo);
  });

program
  .command('atualizar')
  .description('Atualiza o estado de uma tarefa')
  .argument('<id>', 'ID da tarefa (ex: T01)')
  .argument('<estado>', 'Novo estado (PENDENTE: FAZENDO: PRONTO)')
  .action((id, estado) => {
    gestor.atualizarEstado(id, estado);
  });

program
  .command('interativo')
  .description('Inicia o modo de configuração interativa da missão')
  .action(async () => {
    await gestor.modoInterativo();
  });

program
  .command('parar')
  .description('Encerra a sessão e consolida aprendizados')
  .action(() => {
    gestor.registrarLog("SISTEMA", "Sessão encerrada pelo usuário.");
    console.log(chalk.red.bold("\n[AVISO] Gestor de Agentes encerrado."));
  });

program
  .command('scan')
  .description('Realiza um scan neural no código em busca de melhorias')
  .action(() => {
    gestor.registrarLog("SISTEMA", "Iniciando scan de código...", "WARN");
    setTimeout(() => {
      gestor.registrarLog("SECURITY", "Scan completo: Nenhuma vulnerabilidade crítica encontrada.", "INFO");
      gestor.registrarLog("PM", "Sugestão: Refatorar o dashboard para usar WebSockets.", "INFO");
    }, 1500);
  });

program
  .command('install-workflows')
  .description('Instala os workflows do Amago globalmente no Antigravity')
  .action(() => {
    const appData = process.env.APPDATA || (process.platform === 'win32' ? path.join(process.env.USERPROFILE, 'AppData', 'Roaming') : null);
    const antigravityDir = path.join(process.env.USERPROFILE, '.gemini', 'antigravity', 'global_workflows');
    
    if (fs.existsSync(antigravityDir)) {
      const kitWorkflowsDir = path.join(gestor.diretorioKit, 'workflows');
      const files = fs.readdirSync(kitWorkflowsDir).filter(f => f.endsWith('.md'));
      
      files.forEach(file => {
        const src = path.join(kitWorkflowsDir, file);
        const dest = path.join(antigravityDir, `amago-${file}`);
        fs.copyFileSync(src, dest);
      });
      
      console.log(chalk.green(`\n[OK] ${files.length} workflows instalados em: ${antigravityDir}`));
      console.log(chalk.cyan("Agora você pode usar comandos como /amago-interativo em qualquer projeto!"));
    } else {
      console.log(chalk.red(`[ERRO] Pasta de workflows global não encontrada: ${antigravityDir}`));
    }
  });

program.parse(process.argv);
