/// <reference types="cypress" />

describe('Custom Command1',() => {

    it('Positive Login', () => {

        cy.visit('http://automationpractice.pl/index.php')
        cy.get('.login').click()

        cy.get('#email').type('omerzed5454@gmail.com')
        cy.get('#passwd').type('deneme123')
        cy.get('#SubmitLogin > span').click()

        cy.get('.account > span').should('have.text','Deneme deneme')

    })

    it('Positive Login with Custom', () => {

        cy.ap_login('omerzed5454@gmail.com', 'deneme123')
        //ap_login -> commands.js dosyasinda olusturdugumuz fonksiyon
        cy.get('.account > span').should('have.text','Deneme deneme')
    })

    it.only('Negative Login', () => {

        cy.ap_login('omerzed5454@gmail.com', 'deneme12')
        //ap_login -> commands.js dosyasinda olusturdugumuz fonksiyon
        cy.get('#center_column > :nth-child(2)').should('be.visible')//1.assert

        cy.url().should('include','controller=authentication')//2.assert
        
    })

})