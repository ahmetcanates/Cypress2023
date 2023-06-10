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

    it('All CheckBoxes 1', () => {

        cy.visit('http://automationpractice.pl/index.php')
        cy.get('li a.sf-with-ul').eq(0).click()

        //TUM CHECKBOXLARA TIKLA
        cy.get("input[type='checkbox']").check()
        cy.wait(3000)

        //TIKLAMALARI KALDIR
        cy.get("input[type='checkbox']").uncheck()
        
    })

    it('All CheckBoxes 2', () => {

        cy.visit('http://automationpractice.pl/index.php')
        cy.get('li a.sf-with-ul').eq(0).click()
        
        //1.kutuya tikla
        cy.get("input[type='checkbox']").eq(0).check().should('be.checked')

        //5.kutuya tikla
        cy.get("input[type='checkbox']").eq(4).check().should('be.checked')

        //12.kutuya tikla
        cy.get("input[type='checkbox']").eq(11).check().should('be.checked')

        //TIKLAMALARI KALDIR
        cy.get("input[type='checkbox']").eq(0).uncheck().should('not.be.checked')
        //uncheck() = tiklamayi kaldirir
        //should('not.be.checked') = tikli olmadigini dogrular
    })

    it.only('All CheckBoxes 2', () => {

        cy.visit('http://automationpractice.pl/index.php')
        cy.get('li a.sf-with-ul').eq(0).click()
        
        cy.get("input[type='checkbox']").click({multiple:true})
        //click -> tek bir web elemente tiklar 
        //click({multiple:true}) -> bu sekilde yazarsak tum web elementlere tiklar

        cy.get("input[type='checkbox']").parent().should('have.class','checked')
        //19 checkboxi tiklanmis mi diye assert etti. locate'imizin bir ustundeki(parenti) tagin,
        //class attribute'unun degeri checked mi diye kontrol ettik.
    })


})