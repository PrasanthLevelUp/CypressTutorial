/// <reference types="Cypress" />
describe('windows',()=>{
    //it('child window handling',()=>{
    ////cy.visit('http://demo.automationtesting.in/Windows.html')
       // cy.get("button#tabButton").click()
//cy.get('a[href="http://www.selenium.dev"]').invoke('removeAttr','target').click()
//cy.url().should('include','https://www.selenium.dev/')
      //  cy.go('back')
////cy.go('forward')
     //   cy.url().should('include','sample')
  //  })
    it('Mouse hover method',()=>{
        cy.visit('http://demo.automationtesting.in/Windows.html')
        cy.get('a[href="SwitchTo.html"]').eq(0).next().invoke('show')
        cy.get('a[href="Alerts.html"]').click()
    })
})