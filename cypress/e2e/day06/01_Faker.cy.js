/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

describe('Using Faker',() => {

    //https://www.npmjs.com/package/@faker-js/faker
    //npm install --save-dev @faker-js/faker
    it.only('Faker Login Test', () => {
        cy.visit('http://automationpractice.pl/index.php')
        cy.get('.login').click()

        //let, var, const javascript degiskenler

        let email = faker.internet.email()
        cy.get('#email_create').type(email)
        cy.get('#SubmitCreate > span').click()

        cy.get('#id_gender1').click()

        let firstname = faker.name.firstName('male')
        cy.get('#customer_firstname').type(firstname)

        let lastname = faker.name.lastName()
        cy.get('#customer_lastname').type(lastname)

        let password = faker.internet.password()
        cy.get('#passwd').type(password)

        cy.get('#days').select(2)
        cy.get('#months').select('February')
        cy.get('#years').select('1999')

        cy.get('#submitAccount > span').click()

        cy.get('.account > span').should('have.text', firstname+ ' ' +lastname)

    })

    it('', () => {

        
    })


})