/// <reference types="cypress" />

describe('Koala Resort Hotel',() => {

    it('Login Test', () => {
        cy.visit('https://qa-environment.koalaresorthotels.com')

        //1) contains('Text')
        // cy.contains('Log in').click()


        //2)contains('locator','Text')
        //cy.contains("[class='nav-link']", 'Log in').click()


        //3) contains('Text')
        cy.contains('Log in', {matchCase: false}).click()
        // buyuk kucuk harf dikkate almadan metin olarak log in iceren web elementini ara

        //ASSERT

        //1)have.text
        cy.get('#navLogon > .nav-link').should('have.text','Log in')
        //locate edilen yerdeki metinde 'Log in' yaziyor mu? Var mi?

        //2)cy.url().should()
        cy.url().should('include','Account/Logon')


        //3)be.visible
        cy.get('.row > .mb-4').should('be.visible')


        //4)cy.title()
        cy.title().should('eq','KoalaResortHotels - Log in')

        //5) include.text
        cy.get('#navLogon > .nav-link').should('include.text','Log in')
        //locate edilen yerdeki metin 'Log in' iceriyor mu?

        //Toplam Link Sayisi
        cy.get('li a').should('have.length', 29)

        //find(): Belirli bir html seciminin alt elemanlari bulmak icin
        cy.get('li').find('a[href="/Rooms/320"]').should('have.text', 'Twin 2')
        //cy.find() seklinde kullanilmaz
        //cy.get().find()

        //within()
        cy.get('div.categories').within( () => {
            cy.get('a[href="/Rooms/320"]').click()
        })

        /*
        NOT: Web elementleri ilk olarak get() ile bulacagiz. Eger bulamazsak find() ile deneyecegiz. Onunla da bulamazsak within() ile deneyecegiz
        */

    })


})