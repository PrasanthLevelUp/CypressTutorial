/// <reference types="Cypress" />
describe('My website',()=>{
    it('go to website',()=>{
        cy.visit('https://www.redbus.com/')
        cy.contains('FROM')
        })
        it('go to website',()=>{
            cy.visit('https://www.redbus.com/')
            cy.contains('Search Buses').click()
            }) 
        it('go to website',()=>{
            cy.visit('https://www.redbus.com/')
            cy.url().should('equals','https://www.redbus.com/')
            cy.get('#src').
            type('Chennai').
            should('have.value', 'Chennai')
            })       
})