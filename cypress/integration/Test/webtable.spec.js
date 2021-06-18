/// <reference types="Cypress" />
describe('windows',()=>{
    it('WEBTABLE',()=>{
        cy.visit('https://www.techlistic.com/p/demo-selenium-practice.html')
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })
        cy.get('table.tsc_table_s13 tbody tr').each(($e1, index, $list)=>{
            const eachbox = $e1.find('th').text()
            if(eachbox == 'Burj Khalifa'){
               const val = $e1.find('td').eq(1).text()
               expect(val).to.include('UAE')
            }
        })
       
    })
})