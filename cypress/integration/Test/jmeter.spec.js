/// <reference types="Cypress" />
describe('Stati select drop down',()=>{
    it('Select using values',()=>{
        cy.visit('https://www.mycustomgun.com')
        cy.get('.avatar.v-chip.v-chip--clickable.v-chip--pill').click()
        cy.get('#input-131').type('test')
        //cy.get('#input-105').click()
        cy.get('#input-105').type('test')
    })

})