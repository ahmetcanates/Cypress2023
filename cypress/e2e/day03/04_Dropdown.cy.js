/// <reference types="cypress" />

describe('Dropdown',() => {

    it('Test Case 1', () => {

        cy.visit('https://the-internet.herokuapp.com/dropdown')
        cy.get('#dropdown').select('Option 1').should('have.value', '1')

        cy.get('#dropdown').select('Option 2').should('have.value', '2')

    })

   


})