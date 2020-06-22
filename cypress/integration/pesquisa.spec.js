//<reference types = "cypress"/>

describe("Teste Dashboard", ()=>{
  beforeEach('Before ', ()=>{
    cy.visit('https://www.google.com.br')
  })
  
  it('Pesquisa Google', ()=>{
    var palavraChave='Raposinha{enter}'

    cy.get('.gLFyf').type('Raposinha{enter}')
    cy.get('.N6sL8d').should('contain', 'Raposinha')
  })
  
})