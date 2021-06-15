/// <reference types="Cypress" />
describe('Parent child location',()=>{
   it('find from locator using find method',()=>{
       cy.visit('https://www.redbus.com/')
       cy.get('div.search-wrap').find('div.search-box').should('have.length',4)
       //cy.get('div.search-wrap').find('div.search-box').eq(1).contains('TO').type('chennai')
       cy.get('div.search-wrap').find('div.search-box').each(($e1, index, $list)=>{
           const eachbox = $e1.find('label').text()
           if(eachbox == 'TO'){
            cy.wrap($e1).type('chennai')
           }
       }).then(($lis) =>{
        expect($lis).to.have.length(4) 
       })

   }) 
})