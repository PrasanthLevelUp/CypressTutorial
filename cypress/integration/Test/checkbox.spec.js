/// <reference types="Cypress" />
describe('check box selection',()=>{
it('select check box',()=>{
    cy.visit('https://demoqa.com/automation-practice-form')
    cy.get("label[for='gender-radio-1']").click()
    cy.get('label:contains(Sports)').click().should('have.text','Sports')
   cy.get('#hobbies-checkbox-1').should('be.checked')
   cy.get('label:contains(Sports)').click().should('have.text','Sports')
   cy.get('#hobbies-checkbox-1').should('not.be.checked')
    cy.get("input[type='checkbox']").check(['1','2','3'],{force: true})
})
})
