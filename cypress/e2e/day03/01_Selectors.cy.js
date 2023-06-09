/// <reference types="cypress" />

describe('Selectors Examples',() => {

    it.skip('Css Selectors', () => {

        cy.visit('https://www.amazon.com/')

        //1)By Tag name
        cy.get('input')


        //2)By id
        cy.get('#twotabsearchtextbox')
        //css'te id yerine # kullanabiliriz, yukarida oldugu gibi
       


        //3)By Class
        cy.get('.nav-search-field')
         //css'te class yerine . kullanabiliriz, yukarida oldugu gibi


        //4)By Attribute Name and Value
        cy.get('input[type="text"]')


        //5)By 2 Attribute
        cy.get("[type='text'][id='twotabsearchtextbox']")

    })

    it('Xpath', () => {

        cy.visit('https://www.google.com')
        
        //6)By Xpath
       
        cy.xpath('//a[@class="gb_v"]').should('include.text','Gmail')

        // /// <reference types="cypress-xpath" />
        //xpath algilanmaz ise 1.satira ustteki kodu yazabilirsiniz

        //require('cypress-xpath)
        //yukaridaki kodu e2e.cy.js dosyasina ekleyecegiz(support file icinde)

       
    })


})