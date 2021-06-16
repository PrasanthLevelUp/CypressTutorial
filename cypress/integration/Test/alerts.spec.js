/// <reference types="Cypress" />
describe('alerts',()=>{
    it('simple alert',()=>{
        cy.visit('https://www.seleniumeasy.com/test/javascript-alert-box-demo.html')
        cy.get('button.btn.btn-default').eq(1).click()
        cy.get('button.btn.btn-default').eq(0).click()
        cy.on('window:confirm',(str)=>{
            expect(str).to.equals('Press a button!')
        })
    })
    it('simple alert',()=>{
        cy.visit('http://demo.automationtesting.in/Alerts.html')
        cy.get('button.btn.btn-danger').click()    
        cy.on('window:alert',(str)=>{
            expect(str).to.equals('I am an alert box!')
        })
    })
    })
    