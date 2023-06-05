/// <reference types="cypress" />

context('My Second Test',() => {
    //describe yerine context kullanabiliriz
    beforeEach('Her testten once calisacak', ()=>{
        cy.visit('/')
    })

    it('URL TEST', () => {
        cy.url().should('include','google')
        cy.url().should('eq','https://www.google.com/')
    })

    it('TITLE TEST', () => {
        cy.title().should('include','Google')
        cy.title().should('eq','Google')
    })

    it.skip('SEARCH TEST', () => {
        cy.get('#APjFqb').type('Cypress.io{enter}')
        // get(): locate aliyoruz
        // type(): metin gonderiyoruz
        // {enter}: ENTER tusuna bas
        // eger kendimiz locate alirsak xpath calismiyor cssselector ile almak zorundayiz

    })

    // skip testi yapmadan gecer(atlar)
    it.skip('SEARCH TEST', () => {
        cy.get('#APjFqb',{timeout: 3000}).type('Cypress.io{enter}')
    })

    it('Click', () => {

        // it.only(): sadece bu testi calistirir.
        cy.get('.gb_g').click()
        
    })


})