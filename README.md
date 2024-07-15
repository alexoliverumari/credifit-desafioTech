# **Desafio Técnico - Credifit**

## Introdução

Este documento visa fornecer uma visão geral abrangente do projeto de automação de testes no Sistema Credifit utilizando Cypress, uma ferramenta de ponta para testes end-to-end (E2E). O Cypress é amplamente reconhecido por sua capacidade de simplificar o processo de criação, execução e manutenção de testes, permitindo que equipes de desenvolvimento garantam a qualidade e a funcionalidade de suas aplicações web de forma eficiente.

### **Objetivos do Projeto**

O principal objetivo deste projeto é implementar uma suíte de testes automatizados que assegure a estabilidade e a qualidade contínua da aplicação. Os objetivos específicos incluem:

1. **Automatizar Casos de Teste Cruciais**: Garantir que os principais fluxos de trabalho da aplicação sejam testados automaticamente para detectar regressões e novos defeitos rapidamente.
2. **Reduzir Tempo de Teste Manual**: Diminuir a necessidade de testes manuais repetitivos, liberando os testadores para se concentrarem em casos mais complexos e na exploração de novas funcionalidades.
3. **Melhorar a Confiabilidade da Aplicação**: Aumentar a confiança na aplicação, garantindo que ela funcione conforme o esperado em diferentes cenários e condições.

### **Visão Geral do Cypress**

O Cypress é uma ferramenta de testes end-to-end moderna e poderosa, desenhada especificamente para a web. Ele se destaca por várias razões:

- **Simples de Configurar**: O Cypress requer pouca configuração inicial e pode ser rapidamente integrado a qualquer projeto.
- **Rápido e Eficiente**: Executa testes diretamente no navegador, o que proporciona uma experiência de testes mais rápida e confiável.
- **Depuração Facilmente**: Fornece excelentes ferramentas de depuração, incluindo capturas de tela e gravações de vídeo dos testes em execução.
- **Ampla Compatibilidade**: Suporta uma ampla variedade de navegadores e pode testar aplicações construídas com diferentes frameworks e bibliotecas de JavaScript.

### **Estrutura da Documentação**

Esta documentação está organizada nas seguintes seções principais:

1. **Configuração do Ambiente**: Orientações detalhadas sobre como configurar o ambiente de desenvolvimento e de testes com Cypress.
2. **Estrutura dos Testes**: Descrição da organização dos testes, convenções de nomenclatura e boas práticas.
3. **Escrita e Execução de Testes**: Exemplos e diretrizes para a criação e execução de testes automatizados utilizando Cypress.
4. **Manutenção e Melhores Práticas**: Recomendações para manter a suíte de testes atualizada e eficiente ao longo do tempo.

# Projeto de Automação de Testes com Cypress

Este é um projeto de automação de testes utilizando [Cypress](https://www.cypress.io/), uma ferramenta poderosa e fácil de usar para testes end-to-end.

## Estrutura do Projeto

- `cypress/`
  - `fixtures/`: Arquivos de dados estáticos utilizados nos testes.
  - `integration/`: Onde os testes estão localizados.
  - `plugins/`: Arquivos de configuração e plugins para Cypress.
  - `support/`: Comandos e suporte configurados para o Cypress.
- `cypress.config.js`: Arquivo de configuração do Cypress.
- `package.json`: Dependências e scripts do projeto.

## Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 12 ou superior)
- [npm](https://www.npmjs.com/) (gerenciador de pacotes do Node)

## Instalação

1. Clone o repositório para o seu computador:

    ```sh
    git clone https://github.com/alexoliverumari/credifit-desafioTech.git
    cd credifit-desafioTech

2. Instale as dependências do projeto:
    ```sh
    npm install

3. Instale o Cypress:
    ```sh
    npx cypress install

## Executando os Testes
Para abrir o Cypress e executar os testes em modo interativo:
    ```sh
    npx cypress open

Para executar os testes no modo headless (linha de comando):
    ```sh
    npx cypress run

## Estrutura dos Testes

- **Arquivos de Testes:** Localizados na pasta **`cypress/integration`**, geralmente terminam com **`.cy.js`**.
- **Fixtures:** Arquivos JSON na pasta **`cypress/fixtures`** usados para dados de teste.
- **Comandos Customizados:** Adicionados na pasta **`cypress/support/commands.js`**.

## Contribuindo
Se você quiser contribuir com o projeto:
- Crie uma nova branch para sua feature ou correção de bug:
    ```sh
    git checkout -b nome-da-sua-branch

- Faça suas mudanças e comite-as:
    ```sh
    git add .
    git commit -m "Descrição das mudanças"

- Envie para o repositório remoto:
    ```sh
    git push origin nome-da-sua-branch

- Abra um Pull Request no GitHub.

## Contato
Se você tiver dúvidas ou sugestões, sinta-se à vontade para entrar em contato:
- Alex Lima de Oliveira
- Email: alexoliverumari@gmail.com
- Telefone: +55 85 98152-6691
- GitHub: https://github.com/alexoliverumari