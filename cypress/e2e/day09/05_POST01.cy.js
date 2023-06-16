/// <reference types="cypress" />

describe('',() => {

    const requestURL = 'https://jsonplaceholder.cypress.io/comments'

    it('Test', () => {

        cy.request('POST', requestURL, {
            userId:501,
            title:'Cypress is easy.',
            body:'Javascript is easier.'
        }).then((response) => {
            expect(response.status).eq(201)
            expect(response.body.userId).eq(501)
            expect(response.body.title).eq('Cypress is easy.')
            expect(response.body.body).eq('Javascript is easier.')
        })
    })

 


})