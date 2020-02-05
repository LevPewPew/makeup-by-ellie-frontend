describe('Cypress', () => {

  // beforeEach(()=> {
  //   cy.visit('http://localhost:3000/');
  // })

  it('Name field has focus, when the page loads', async () => {
    await cy.visit('http://localhost:3000/contact');
    cy.focused().should('have.value','')
  })

  it('Contact form accepts input and clear button resets form', () => {
    const name = "Pankaj";
    const number = "4586996";
    const email = "test@test.com";
    const eventDate = "2020-02-04";
    const serviceType = "Bridal";
    const totalPeopleJustMakeup = "1";
    const totalPeopleWithHair = "1";
    const timeToFinish = "1pm";
    const howDidYouHear = "Google";
    const addedQuestionsOrInfo = "What are the costs";

    cy.get('input[name=name]')
      .type(name)
      .should('have.value', name)
    cy.get('input[name=mobile]')
      .type(number)
      .should('have.value', number)   
    cy.get('input[name=email]')
      .type(email)
      .should('have.value', email)
    cy.get('input[name=eventDate]')
      .type(eventDate)
      .should('have.value', eventDate)
    // cy.get('input[name=serviceType]').click()
      // .type(serviceType)
      // .should('have.value', serviceType)
    cy.get('input[name=totalPeopleJustMakeup]')
      .type(totalPeopleJustMakeup)
      .should('have.value', totalPeopleJustMakeup)   
    cy.get('input[name=totalPeopleWithHair]')
      .type(totalPeopleWithHair)
      .should('have.value', totalPeopleWithHair)
    cy.get('input[name=timeToFinish]')
      .type(timeToFinish)
      .should('have.value', timeToFinish)
    cy.get('input[name=howDidYouHear]')
      .type(howDidYouHear)
      .should('have.value', howDidYouHear)
    cy.get('textarea[name=addedQuestionsOrInfo]')
      .type(addedQuestionsOrInfo)
      .should('have.value', addedQuestionsOrInfo)
    cy.get('button').contains('Clear').click();
  })
})


it('tests navigartion', async ()=> {
  await cy.visit('http://localhost:3000/');
  cy.visit('http://localhost:3000/question');
})