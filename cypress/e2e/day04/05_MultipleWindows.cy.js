/// <reference types="cypress" />

describe('Multiple Windows',() => {

    it('Removing Attribute', () => {

        cy.visit('https://the-internet.herokuapp.com/windows')

        cy.get('.example > a').invoke('removeAttr','target').click()

        cy.get('h3').should('have.text', 'New Window')

    })

    it.only('test case 2', () => {

        cy.visit('https://the-internet.herokuapp.com/windows')
        
        cy.get('.example > a').then((element) => {
            const newURL = element.prop('href') //prop, href attribute'unun degerini almamizi sagladi.
            cy.visit(newURL)
        })
    })


})