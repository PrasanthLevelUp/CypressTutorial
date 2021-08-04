/// <reference types="Cypress" />
describe('Search Pages',()=>{
    it('Amazon',()=>{
        cy.visit('https://www.amazon.in/')
        cy.get('#twotabsearchtextbox').type('Laptop')
        cy.get('#nav-search-submit-button').click()
        cy.get('div.s-main-slot.s-result-list div.s-result-item span.a-text-normal').eq(0).click()

        cy.get('.a-pagination li').each(($el, index, $list) => {
            if(index==$list.length-2){
             cy.log($el.text())
            }
        })
    })
})