/// <reference types="cypress" />

describe('SuperDomain',() => {

    it('', () => {
        cy.visit('https://www.amazon.com/')
        cy.wait(2000)
        
    })

    it('', () => {

        cy.visit('https://www.google.com/')
        cy.wait(2000)
        cy.visit('https://www.amazon.com/')
    })

  


})