/// <reference types="cypress" />

describe('My First Test',() => {
    // describe: tanimlamak demek. Testi tanimliyorum
    // describe ve it mocha kutuphanesinden geliyor


    it('URL TEST', () => {

        cy.visit('https://www.google.com/')
        // visit(url): URL'e git 

        cy.url().should('include','google')
        // should assert islemi icin kullanilir
        // include icermek demek
        // should('include','google') : URL google icerir mi?

    })

    it('Title Test', () => {
        cy.visit('https://www.google.com/')
        cy.title().should('include','Google')
        // title(): Sayfanin title'ini alir.

        cy.title().should('eq','Google')
        
    })


})