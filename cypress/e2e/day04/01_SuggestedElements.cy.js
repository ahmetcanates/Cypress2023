/// <reference types="cypress" />

describe('Suggested Elements',() => {

    it('test case', () => {
        cy.visit('http://automationpractice.pl/index.php')

        cy.get('#search_query_top').type('dress')

        cy.wait(2000)

        cy.get("div.ac_results").contains('Blouses').click()    

        cy.get('h1').contains('Blouse').should('be.visible')

    })


})