/// <reference types="cypress" />

describe('Read File And Assert',() => {

    it.only('Assert', () => {

        cy.readFile('./cypress/fixtures/users.json').then((userdata) => {
            expect(userdata[3].name).equal('Patricia Lebsack')
            expect(userdata[3].username).equal('Karianne')
            expect(userdata[3].address.street).equal('Hoeger Mall')
            expect(userdata[3].company.name).equal('Robel-Corkery')
        })

    })

    it('', () => {

        
    })


})