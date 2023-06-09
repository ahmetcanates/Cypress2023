/// <reference types="cypress" />

describe('Scroll',() => {

    it('Scrollintoview', () => {
        cy.visit('https://qa-environment.koalaresorthotels.com')

        cy.wait(2000)

        cy.get('.col-md-7 > .mb-4').scrollIntoView()
        //locate ettigimiz yerin altina sayfayi kaydirir.

        cy.get(':nth-child(9) > .container > .justify-content-center > .col-md-7 > h2').
        scrollIntoView({duration:3000})
        //duration eklentisi o locate'e o kadar saniyede gitmesini sagliyor.
        //3000 dedigimiz icin 3 saniyede asagiya iniyor.

        //scrollTo(x,y)
        cy.scrollTo(0,0)

    })

    


})