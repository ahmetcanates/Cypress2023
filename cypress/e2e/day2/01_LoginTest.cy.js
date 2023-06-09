/// <reference types="cypress" />

describe('Koala Resort Hotel',() => {

    it('Login Test', () => {

        cy.visit('https://qa-environment.koalaresorthotels.com')
        // seleniumdaki get()

        //1.YOL
        //cy.get('#navLogon > .nav-link').click()

        //2.YOL
        cy.contains('Log in').click()
        //cy.contains('Log in').click() : DOM'da Log in textini bul. Metni text olarak arar.
        cy.url().should('include','Account/Logon')

        //Username : Manager
        cy.get('#UserName').type('Manager')

        //Password : Manager1!
        //1.YOL
        // cy.get('#Password').type('Manager1!')
        // cy.get('#btnSubmit').click()

        //2.YOL
        cy.get('#Password').type('Manager1!{enter}')
    })


})