describe('Check navbar links are working', () => {


  it('Check if navigation to all the pages is working and contact form accepts input', async () => {

    await cy.visit('http://localhost:3000/');
    cy.wait(2000)
    await cy.visit('http://localhost:3000/services');
    cy.wait(2000)
    await cy.visit('http://localhost:3000/portfolio');
    cy.wait(2000)
    await cy.visit('http://localhost:3000/faq');
    cy.wait(2000)
    await cy.visit('http://localhost:3000/contact');
    cy.wait(2000)

      const name = "Pankaj";
      const number = "4586996";
      const email = "test@test.com";
      const eventDate = "2020-02-04";
      const totalPeopleJustMakeup = "1";
      const totalPeopleWithHair = "1";
      const timeToFinish = "1pm";
      const howDidYouHear = "Google";
      const addedQuestionsOrInfo = "What are the costs";
  
      cy.get('input[name=name]')
        .type(name)
        .should('have.value', name)
      cy.wait(3000)
      cy.get('input[name=mobile]')
        .type(number)
        .should('have.value', number)  
      cy.wait(3000) 
      cy.get('input[name=email]')
        .type(email)
        .should('have.value', email)
      cy.wait(3000)
      cy.get('input[name=eventDate]')
        .type(eventDate)
        .should('have.value', eventDate)
      cy.wait(3000)
      cy.get('input[name=totalPeopleJustMakeup]')
        .type(totalPeopleJustMakeup)
        .should('have.value', totalPeopleJustMakeup)   
      cy.wait(3000)
      cy.get('input[name=totalPeopleWithHair]')
        .type(totalPeopleWithHair)
        .should('have.value', totalPeopleWithHair)
      cy.wait(3000)
      cy.get('input[name=timeToFinish]')
        .type(timeToFinish)
        .should('have.value', timeToFinish)
      cy.wait(3000)
      cy.get('input[name=howDidYouHear]')
        .type(howDidYouHear)
        .should('have.value', howDidYouHear)
      cy.wait(3000)
      cy.get('textarea[name=addedQuestionsOrInfo]')
        .type(addedQuestionsOrInfo)
        .should('have.value', addedQuestionsOrInfo)
      cy.wait(3000)
      cy.get('button').contains('Clear').click();
      cy.wait(2000)
  })
})


