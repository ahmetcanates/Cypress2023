/// <reference types="cypress" />

describe('Alerts',() => {

    it('Alert Test', () => {

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get(':nth-child(1) > button').click()
        //Cypress otomatik olarak Alert 'Tamam' butonuna tikliyor

        cy.get('#result').should('have.text', 'You successfully clicked an alert')

    })

    it('Accept Alert Test', () => {

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.get(':nth-child(2) > button').click()
        //2 secenek var. Iptal ve Tamam
        //Cypress otomatik olarak 'Tamam' butonuna tikliyor
        cy.get('#result').should('have.text', 'You clicked: Ok')
    })

    it('Dismiss Alert  ', () => {

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.get(':nth-child(2) > button').click()
        //Cypress otomatik olarak 'Tamam' butonuna tikladi

        //on() -> jQuery bir fonksiyondur.
        //browser'da acilan pencerelerin kontrolu icin kullanilir

        cy.on('window:confirm', () =>{
            return false
            //return true -> default olarak tikla demek
        })

        cy.get('#result').should('have.text','You clicked: Cancel')
        
    })

    it.only('Alert Text', () => {

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        
        cy.window() //pop up pencereleri kontrol ediyoruz
        .then(($windowsElement)=>{
            //$windowsElement -> prompt'a bilgi girer
            cy.stub($windowsElement, 'prompt').returns('Cypress')
            cy.wait(2000) 
            cy.get(':nth-child(3) > button').click()
        })
       
        cy.get('#result').should('have.text', 'You entered: Cypress')
    })


})