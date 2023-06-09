/// <reference types="cypress" />

describe('Navigation',() => {

    it('Back, Forward, Refresh', () => {
        cy.visit('https://qa-environment.koalaresorthotels.com')

        cy.wait(2000)

        cy.get('#navLogon > .nav-link').click()

        cy.wait(2000)

        //cy.go('back')
        cy.go(-1) // ayni yukaridaki kod gibi bir sayfa geri gider

        cy.wait(2000)

        cy.go('forward')
        //cy.go(1) forward'la ayni islevi gorur, bir ileriki sayfaya gider

        cy.wait(2000)

        cy.reload()//sayfayi yenile

    })

    it.only('Chaing Navigation', () => {

        cy.visit('https://qa-environment.koalaresorthotels.com')

        cy.wait(2000)

        cy.get('#navLogon > .nav-link').click()

        cy.wait(2000)

        cy.go('back').go('forward').go(-1).go(1)

        cy.reload(true)//Sayfayi hafizadan degil, yeniden yukler
        
    })


})