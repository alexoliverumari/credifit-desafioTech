describe('Credifit Admin Portal - Página de Esqueci Minha Senha', () => {

    // Caso de Teste 01 - Página Esqueci Minha Senha - pedido de recuperação de senha com sucesso
    it('CT01 - Página Esqueci Minha Senha - pedido de recuperação de senha com sucesso', () => {

        // Acessa a página de recuperação de senha
        cy.visit('https://admin-develop.credifit.com.br/esqueci-minha-senha')

        // Digita um e-mail válido no campo de e-mail
        cy.get('#email_confirm_form_email')
            .type('testes+desafioqa@credifit.com.br')

        // Clica no botão 'Avançar'
        cy.contains('button', 'Avançar')
            .click()

        // Valida que a mensagem de sucesso do envio do link de recuperação é exibida
        cy.contains('div', 'Um link para recuperação da senha foi enviado para seu e-mail.')
            .should('be.visible')

    })

    // Caso de Teste 02 - Página Esqueci Minha Senha - input de e-mail fora do formato padrão
    it('CT02 - Página Esqueci Minha Senha - input de e-mail fora do formato padrão', () => {

        // Acessa a página de recuperação de senha
        cy.visit('https://admin-develop.credifit.com.br/esqueci-minha-senha')

        // Digita um e-mail inválido no campo de e-mail
        cy.get('#email_confirm_form_email')
            .type('testes+desafioqacredifit.com.br')

        // Valida que a mensagem de erro de e-mail inválido é exibida
        cy.contains('div', 'E-mail inválido!')
            .should('be.visible')

    })

})
