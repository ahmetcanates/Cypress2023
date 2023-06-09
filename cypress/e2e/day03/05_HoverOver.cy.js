/// <reference types="cypress" />

describe('HoverOver',() => {

    it('Test case', () => {

        cy.visit('https://www.amazon.com/')
        cy.get('#icp-nav-flyout').trigger('mouseover') 

        cy.contains('Change country/region.').click()

        cy.get("#icp-dropdown").select('Turkey (Türkiye)',{force:true})

    })

   


})