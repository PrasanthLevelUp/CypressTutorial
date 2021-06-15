/// <reference types="Cypress" />
describe('locators finding usage',()=>{
    it('using id',()=>{
        cy.visit('https://www.redbus.com/')
        cy.get('#src').type('Chennai')
    })
    it('using class',()=>{
        cy.visit('https://www.redbus.com/')
        cy.get('input.db[id=src]').type('coimbatore')
    })
    it('Using substring',()=>{
        cy.visit('https://www.redbus.com/')
        cy.get("input#src[data-message='Please enter a source city']").type('chennai')
    })
})