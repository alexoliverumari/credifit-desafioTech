describe('Credifit Admin Portal - End to End', () => {

  // Login com sucesso e alteração de senha
  beforeEach('login com sucesso e alteração de senha', () => {

    // Acessa a página de login
    cy.visit('https://admin-develop.credifit.com.br/')

    // Define as credenciais de login válidas
    var email = 'testes+desafioqa@credifit.com.br'
    var password = 'abcd1234'

    // Executa o comando de login com as credenciais definidas
    cy.login(email, password)

    // Executa o comando de alteração de senha para liberação do acesso a página inicial
    cy.alterarSenha(password)

    cy.get('.ant-avatar')
      .click()

    cy.contains('div', 'Usuario Desafio').should('be.visible')
    cy.contains('div', email).should('have.text', email)

    // Valida se está na página de Solicitações de Empréstimo
    cy.contains('h1', 'Solicitações de Empréstimo')

  })

  // Caso de Teste 01 - Página Inicial - valida campos de filtros
  it('CT01 - valida campos de filtros', () => {

    cy.get('[data-cy="cpf-item-data-cy"]')
      .type('12345678909')
      .should('have.value', '123.456.789-09')

    cy.get('[data-cy="companyName-item-data-cy"]')
      .type('Empresa XYZ')

    cy.contains('button', 'Filtrar')
      .click()

  })

  // Caso de Teste 02 - Página Inicial - valida os nomes das colunas das tabelas
  it('CT02 - valida os nomes das colunas da tabela', () => {
    
    // Para este caso de teste, como não há massa de dados na tabela, 
    // não será possível validar a funcionalidade em sua totalidade.

    const colunasEsperadas = [
      '', 'Empresa', 'Nome', 'CPF',
      'Validação de identidade', 'REMUNERAÇÃO DISPONÍVEL (R$)', 'VALOR FINANCIADO (R$)',
      '%', 'PARCELAS'
    ];

    // Função para normalizar os textos das colunas
    const normalizarTexto = (texto) => texto.replace(/\s*\(\s*/g, ' (').replace(/\s+/g, ' ').trim();

    // Seleciona o cabeçalho da tabela e verifica se contém todas as colunas esperadas
    cy.get('[data-cy="tabble-wrapper-data-cy"] .ant-table-thead th').each(($th, index) => {
      cy.wrap($th).invoke('text').then((text) => {
        const colunaAtual = normalizarTexto(text);
        const colunaEsperada = normalizarTexto(colunasEsperadas[index]);
        expect(colunaAtual).to.equal(colunaEsperada);
      });
    });
  });

  // Caso de Teste 03 - Página Inicial - valida ação de Aceitar Solicitação
  it('CT03 - valida ação de Aceitar Solicitação', () => {

    // Para este caso de teste, como não há massa de dados na tabela, 
    // não será possível validar a funcionalidade em sua totalidade.
    // Nesse exemplo, será validado se a mensagem de alerta será apresentada.

    cy.get('[data-cy="select-field-action-select"]')
      .click()
    
    cy.contains('.ant-select-dropdown-menu-item', 'Aceitar Solicitação')
      .click();

    cy.contains('button', 'Aceitar Solicitação para selecionados')
      .click()
    
    cy.contains('span', 'Selecione ao menos uma solicitação para prosseguir.')

  })
  
  // Caso de Teste 04 - Página Inicial - valida ação de Recusar Solicitação
  it('CT04 - valida ação de Recusar Solicitação', () => {

    // Para este caso de teste, como não há massa de dados na tabela, 
    // não será possível validar a funcionalidade em sua totalidade.
    // Nesse exemplo, será validado se a mensagem de alerta será apresentada.

    cy.get('[data-cy="select-field-action-select"]')
      .click()
    
    cy.contains('.ant-select-dropdown-menu-item', 'Recusar Solicitação')
      .click();

    cy.contains('button', 'Recusar Solicitação para selecionados')
      .click()
    
    cy.contains('span', 'Selecione ao menos uma solicitação para prosseguir.')


  })

  it('logout', () => {
    
    cy.logout()

  })
})
