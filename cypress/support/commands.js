
Cypress.Commands.add('login', (email, password) => {
    
    cy.get('#login_form_email')
      .type(email)

    cy.get('#login_form_password')
      .type(password)
    
    cy.contains('button', 'Entrar')
      .click()
      
})

Cypress.Commands.add('alterarSenha', (password) => {

    cy.url().should('include', 'alterar-senha')

    cy.get('#password_confirm_form_currentPassword')
      .type(password)
    
    cy.get('#password_confirm_form_password')
      .type(password)

    cy.get('#password_confirm_form_passwordConfirm')
      .type(password)

    cy.contains('button', 'Confirmar Alteração de Senha')
      .click()   

})

Cypress.Commands.add('logout', () =>{

    cy.get('.ant-avatar').click()

    cy.contains('li', 'Logout').click()

    cy.url().should('include', 'login')

})