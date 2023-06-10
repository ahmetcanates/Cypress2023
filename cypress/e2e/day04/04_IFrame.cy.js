/// <reference types="cypress" />

describe('IFrame',() => {

    it.only('IFrame Test', () => {

        cy.visit('https://the-internet.herokuapp.com/iframe')

        /*
        1) Plugin'i indir
        https://www.npmjs.com/package/cypress-iframe
        npm install -D cypress-iframe

        2) Import Plugin
        support/require('cypress-iframe')   e2e.js dosyasina yazacagiz.

        3)Bu islemlerden sonra cy.frameLoaded() ve cy.iframe() komutlarini kullanabilecegiz.
        */

        cy.frameLoaded('iframe')
        //cy.frameLoaded('iframe') -> iframe'in yerini tanimlamak
        //driver.switchTo().frame('iframe') ->iframe

        cy.iframe().find('p').clear()
        //cy.iframe() -> iframe'e git
        //find('p') -> p tagini bul
        //clear() -> metni temizle

        cy.iframe().find('p').type('Cypress was here')

        cy.get('.large-4 > div > a').should('contain.text','Elemental Selenium').click()
    })



})