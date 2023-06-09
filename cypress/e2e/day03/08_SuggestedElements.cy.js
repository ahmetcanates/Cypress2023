/// <reference types="cypress" />

describe('Suggested Elements',() => {

    it.only('test case 1', () => {
        cy.visit('https://www.google.com')

        //1.YOL
         cy.get('#APjFqb').type('Yahoo')
        // cy.get('#ERWdKc > .wM6W7d > span').contains('mail').click()

        //2.YOL
        cy.get('li span b').contains('mail').click()
    })

    it('test case 2', () => {

        cy.visit('http://automationpractice.pl/index.php')
        
    })


})