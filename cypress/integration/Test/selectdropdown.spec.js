/// <reference types="Cypress" />
describe('Stati select drop down',()=>{
    it('Select using values',()=>{
        cy.visit('https://www.seleniumeasy.com/test/basic-select-dropdown-demo.html')
        cy.get('select#select-demo').select('Tuesday').should('have.value','Tuesday')
    })

    it('Bootstrap dropdown selection',()=>{
        cy.visit('http://seleniumpractise.blogspot.com/2016/08/bootstrap-dropdown-example-for-selenium.html')
        cy.get('#menu1').click()
        cy.get('.dropdown-menu li a').each(($e1, index, $list)=>{
            
            if($e1.text() === 'JavaScript'){
                cy.wrap($e1).click()
                return false;
            }
        })
    })
    it('Bootstrap dropdown selection',()=>{
        cy.visit('https://www.redbus.com/')
        cy.get('#src').type('che')
        cy.get('.autoFill li').each(($e1, index, $list)=>{
            
            if($e1.text() === 'Chennai, Tamil Nadu, India'){  
                cy.wrap($e1).click()
                return false;
            }
        })
    })
    
})