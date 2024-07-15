describe('Credifit Admin Portal - Página de Login', () => {

    // Caso de Teste 01 - Página de Login - login com sucesso
    it('CT01 - Página de Login - login com sucesso', () => {

        // Acessa a página de login
        cy.visit('https://admin-develop.credifit.com.br/login')

        // Define as credenciais de login válidas
        var email = 'testes+desafioqa@credifit.com.br'
        var password = 'abcd1234'

        // Executa o comando de login com as credenciais definidas
        cy.login(email, password)

    })

    // Caso de Teste 02 - Página de Login - incluir email fora do formato padrão
    it('CT02 - Página de Login - incluir email fora do formato padrão', () => {

        // Acessa a página de login
        cy.visit('https://admin-develop.credifit.com.br/login')

        // Digita um e-mail inválido no campo de e-mail
        cy.get('#login_form_email')
            .type('testes+desafioqacredifit.com.br')

        // Valida que a mensagem de erro de e-mail inválido é exibida
        cy.contains('div', 'E-mail inválido!')
            .should('be.visible')
            
    })

    // Caso de Teste 03 - Página de Login - inserir senha errada
    it('CT03 - Página de Login - inserir senha errada', () => {

        // Acessa a página de login
        cy.visit('https://admin-develop.credifit.com.br/login')

        // Define as credenciais de login com senha incorreta
        var email = 'testes+desafioqa@credifit.com.br'
        var password = '1234wxyz'

        // Executa o comando de login com as credenciais definidas
        cy.login(email, password)

        // Valida que a mensagem de erro de usuário ou senha incorreto é exibida
        cy.contains('span', 'Usuário ou senha incorreto')
            .should('be.visible')

    })

})
