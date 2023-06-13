/// <reference types="cypress" />

describe('Write and Read File',() => {

    it('Write File', () => {

        cy.writeFile('./cypress/e2e/day07/02_NotDefteri.txt','CYPRESS NOTES\n')
        cy.writeFile('./cypress/e2e/day07/02_NotDefteri.txt','1) CYPRESS INSTALL\n',{flag:'a+'})
        cy.writeFile('./cypress/e2e/day07/02_NotDefteri.txt','2) PLUGINS',{flag:'a+'})
        // \n => bir alt satira gider.
        //{flag:'a+'} => satiri dosyaya kaydeder.
    })

    it('Read File', () => {

        cy.readFile('./cypress/e2e/day07/02_NotDefteri.txt').should('contain','PLUgINS')
        
    })


})