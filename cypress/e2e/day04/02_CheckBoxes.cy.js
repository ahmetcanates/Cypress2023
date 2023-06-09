/// <reference types="cypress" />

describe('CheckBoxes',() => {

    it('Single CheckBox', () => {

        cy.visit('http://automationpractice.pl/index.php')

        //cy.get('li a.sf-with-ul').first().click()

        //locate'i direkt de alabilirdik fakat bu sekilde alirsak elimize 4 sonuc cikiyor.Biz ilkini 
        //istedigimiz icin 'birinciyi sec' anlamindaki first methodunu kullaniyoruz.

        //Eger 2. olana veya 3. olana tiklamak istersek de
        cy.get('li a.sf-with-ul').eq(0).click()
        // yukaridaki kodda eq methodu icine yazdigimiz sayi, hangi indexi istedigimizdir. Biz ilk sonucu 
        //istedigimiz icin 0 yazdik. 4. secenegi isteseydik 3 yazacaktik. first()=eq(0)

        cy.get('#layered_category_4').should('not.be.checked')
        //should('not.be.checked') -> Tikli olmadigini test etti

        //TIKLAMA
        cy.get('#layered_category_4').check().should('be.checked')

        //TIKLAMAYI KALDIR
        cy.get('#layered_category_4').uncheck().should('not.be.checked')
    })

    it.only('All CheckBoxes 1', () => {

        cy.visit('http://automationpractice.pl/index.php')
        cy.get('li a.sf-with-ul').eq(0).click()

        //TUM CHECKBOXLARA TIKLA
        cy.get("input[type='checkbox']").check()
        cy.wait(3000)
        cy.get("input[type='checkbox']").uncheck()
        
    })


})