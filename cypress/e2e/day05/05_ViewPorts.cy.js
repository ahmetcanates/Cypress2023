/// <reference types="cypress" />

describe('ViewPorts',() => {

    it('IPhone X', () => {

        cy.visit('https://www.amazon.com')
        cy.viewport('iphone-x')
        cy.screenshot()
    })

    it('MacBook 16', () => {
        cy.visit('https://www.amazon.com')
        cy.viewport('macbook-16')
        cy.screenshot()
    })

    it('Custom Screen', () => {
        cy.visit('https://www.amazon.com')
        cy.viewport(1500, 1000)
        cy.screenshot()
    })


})