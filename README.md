Trabalho de Conclusão - Integração Contínua - CI 🚀

Este repositório apresenta a automação e otimização de esteiras de Integração Contínua (CI) aplicadas a um projeto de testes automatizados, desenvolvidas para a conclusão da disciplina de CI da pós-graduação.  

🛠️ Ferramentas Utilizadas:
- Runtime: Node.js (versão fixa 22 LTS) para garantir a padronização do ambiente.  
- Gerenciador de Pacotes: Yarn para gerenciamento rápido de dependências.  
- Framework de Testes: Playwright para execução automatizada multi-browser (Chromium, Firefox, WebKit).
- CI/CD: GitHub Actions para orquestração declarativa das esteiras.  
- Relatórios: Allure Report para dashboards visuais e gráficos dinâmicos de execução.  

🏗️ Estrutura das Pipelines (Workflows)
Foram criados 4 fluxos independentes para cobrir diferentes estratégias de maturidade no CI:  

01 - Execução Manual (01-manual-exec.yaml): Disparado sob demanda pelo painel do GitHub
02 - Execução Agendada (02-scheduled-exec.yaml): Executado automaticamente em períodos definidos via rotinas cron.
03 - Execução Pós-Deploy (03-post-deploy-exec.yaml): Acionado automaticamente logo após uma publicação em ambiente para atuar como fumaça (smoke test).
04 - Execução Integrada (04-integrated-exec.yaml): Disparado a cada push ou Pull Request, servindo como portão de qualidade (Quality Gate) antes da branch principal.

🔄 Fluxo de Execução (Jobs & Steps)
- Inspeção (Linting): Análise estática da qualidade e sintaxe do código.  
- Setup: Inicialização da máquina (ubuntu-latest), download do código e instalação do Node, Yarn e dependências.  
- Browsers: Instalação das dependências oficiais de execução do Playwright.
- Testes Unitários: Execução rápida dos testes de unidade (fail fast).  
- Testes End-to-End (E2E): Execução paralela dos cenários de interface.  
- Deploy do Relatório: Coleta dos dados brutos e publicação automatizada no GitHub Pages.  

📊 Links dos Relatórios (GitHub Pages)
Os painéis visuais do Allure foram isolados em subpastas para que cada workflow mantenha seu próprio histórico disponível na nuvem:

💻 Execução Manual: https://pattyd08.github.io/trabalho-conclusao-ci/manual/
⏰ Execução Agendada: https://pattyd08.github.io/trabalho-conclusao-ci/agendado/
🚀 Pós-Deploy: https://pattyd08.github.io/trabalho-conclusao-ci/deploy/
🔄 Execução Integrada: https://pattyd08.github.io/trabalho-conclusao-ci/integrado/
