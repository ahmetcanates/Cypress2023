/// <reference types="cypress" />

describe('Intercept',() => {

    it('Test', () => {
        cy.visit('https://example.cypress.io/commands/waiting')

        //cy.intercept('GET', 'https://jsonplaceholder.cypress.io/comments/1').as('getComment')
        cy.intercept('GET', '**/comments/*').as('getComment')
        //Network'u dinle
        //as -> daha sonra @ isareti ile kullanmak uzere degisken atiyor
        //@getComment

        cy.get('.network-btn').click()

        cy.wait('@getComment').its('response').then((response) => {
            console.log(response)

            assert.equal(response.statusCode, 200, 'Status code control')

        })
    })

    


})