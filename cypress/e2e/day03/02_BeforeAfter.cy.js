/// <reference types="cypress" />

describe('Before After',() => {
    before( () => {
        cy.log('Her test dosyasindan once bir kere calisacak')
    })

    after(() => {
        cy.log('Her test dosyasindan sonra bir kere calisacak')
    }) 

    beforeEach(() => {
        cy.log('Her testten once bir kere calisir')
    })

    afterEach(() => {
        cy.log('Her testten sonra bir kere calisir')
    })




    
    it('TEST CASE 1', () => {
        cy.log('Test Case 1')


    })

    it('TEST CASE 2', () => {
        cy.log('Test Case 2')
        
    })


})