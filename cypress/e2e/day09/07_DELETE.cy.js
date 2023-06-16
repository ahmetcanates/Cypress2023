/// <reference types="cypress" />

describe('DELETE',() => {

    it('TEST', () => {

        cy.request({
            url: 'https://dummy.restapiexample.com/api/v1/delete/2',
            method: 'DELETE'})
            .then((response) => {
                expect(response.body.status).eq("success")
                expect(response.body.message).eq("Successfully! Record has been deleted")
            })

    })

 


})