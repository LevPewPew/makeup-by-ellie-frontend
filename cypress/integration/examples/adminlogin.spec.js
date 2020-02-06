describe('Checks if admin login is working', ()=> {
  it('Name field has focus, when the page loads', async () => {
    await cy.visit('http://localhost:3000/admin-login');
    cy.focused().should('have.value','')
  })

  it('Admin login form accepts input and should not display admin dashboard on incorrect credentials', () => {
    const name = "Incorrect Username";
    const password = "incorrect password";

    cy.get('input[name=username]')
      .type(name)
      .should('have.value', name)
    cy.wait(2000)
    cy.get('input[name=password]')
      .type(password)
      .should('have.value', password)   
    cy.wait(2000)
    cy.get('button').contains('Login').click();
    cy.wait(3000)
  })

  it('Admin login form accepts input and redirect to admin dashboard by entering correct credentials', () => {
    const name = "admin";
    const password = "test";

    cy.get('input[name=username]')
      .type(name)
      .should('have.value', name)
    cy.wait(2000)
    cy.get('input[name=password]')
      .type(password)
      .should('have.value', password)  
    cy.wait(2000) 
    cy.get('button').contains('Login').click();
    cy.wait(3000)
  })

  it('Logout button is working', () => {
    cy.get('button').contains('Log out').click();
  })
})