/// <reference types="cypress" />

describe('POST 02',() => {

    it('TEST', () => {
        const bodyRequest = {"name":"Cypress","salary":"500","age":"21"}

        cy.request({
            url: 'https://dummy.restapiexample.com/api/v1/create',
            method: 'POST',
            body: bodyRequest})
            .then((response) => {
                expect(response.status).eq(200)
                expect(response.body.status).eq('success')
                expect(response.body.message).eq('Successfully! Record has been added.')
            })
    })

 


})