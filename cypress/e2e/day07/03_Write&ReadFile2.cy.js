/// <reference types="cypress" />

describe('Write and Read File 2',() => {

    it.only('Write and Read Json File', () => {

        cy.writeFile('./cypress/e2e/day07/04_UserData.json',{name: 'Eliza', email:'eliza@example.com'})

        cy.readFile('./cypress/e2e/day07/04_UserData.json').then( (user2) => {
            expect(user2.name).to.eq('Eliza')
            expect(user2.email).to.eq('eliza@example.com')

        })
    })

    it('', () => {

        
    })


})