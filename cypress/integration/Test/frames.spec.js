/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe'
describe('windows',()=>{
    it('WEBTABLE',()=>{
        cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/')
        cy.frameLoaded('#courses-iframe')
       cy.iframe().find('a[href="https://courses.rahulshettyacademy.com/courses"]').eq(0).click()
    })
    const getIframeBody = () => {
        // get the iframe > document > body
        // and retry until the body element is not empty
        return cy
        .get('iframe#frame1')
        .its('0.contentDocument.body').should('not.be.empty')
        // wraps "body" DOM element to allow
        // chaining more Cypress commands, like ".find(...)"
        // https://on.cypress.io/wrap
        .then(cy.wrap)
      }
    it('WEBTABLE Using',()=>{
        cy.visit('https://demoqa.com/frames')
       // cy.frameLoaded('iframe#frame1')
       getIframeBody().find('#sampleHeading').eq(0).should('include.text','This is a sample page')
    })

   
})