/// <reference types="cypress" />

describe('Custom Command 2',() => {

    it.only('Amazon Search', () => {
        cy.amazonSearch('iphone')
        cy.get('.a-color-state').should('include.text','iphone')

        cy.get('#twotabsearchtextbox').should('have.value','iphone')
        //html kodlarindaki arama butonundaki value="iphone" degerini assert ettik
        
        cy.screenshot()

    })


})