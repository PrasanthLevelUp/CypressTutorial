/// <reference types="Cypress" />

describe('Verify hooks methods',()=>{

before(()=>{
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.get('input#txtUsername').type('Admin')
cy.get('input#txtPassword').type('admin123')
cy.get('input#btnLogin').click()
})

beforeEach('Check Before mehtod',()=>{
    cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/index.php/dashboard')
})

it('leave',()=>{
    cy.get('a#menu_leave_viewLeaveModule').click()
    //cy.get('input#calFromDate').invoke('val').then((text) => {
   //     expect('21-08-04').to.equal(text);
   // });
   cy.get('input#calFromDate').type('2021-08-04')
   cy.get(':nth-child(1) > .ui-datepicker-trigger').click()
   cy.get('input#calToDate').type('2021-08-04')
})




})