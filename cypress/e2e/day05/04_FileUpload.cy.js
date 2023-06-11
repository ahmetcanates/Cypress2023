/// <reference types="cypress" />

/*
    https://www.npmjs.com/package/cypress-file-upload
    npm install --save-dev cypress-file-upload
*/
describe('File Upload',() => {

    it('Single File Upload', () => {

        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')

        //Cypress yuklenecek dosyayi otomatik olarak fixtures package'i icinde ariyor bu yuzden tum path'i yazmiyoruz.
        const path1 = 'bir.jpeg'
        cy.get('#filesToUpload').attachFile(path1)

        cy.get('#fileList > li').should('include.text','bir.jpeg')
        cy.get('#fileList > li').should('have.text','bir.jpeg')
    })

    it('Multiple File Upload 1', () => {

        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        
        const path1 = 'bir.jpeg'
        const path2 = 'iki.png'
        const path3 = 'uc.jpeg'

        cy.get('#filesToUpload').attachFile(path1).wait(1000).attachFile(path2).wait(1000).attachFile(path3)
    })

    it('Multiple File Upload 2', () => {

        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        
        const path1 = 'bir.jpeg'
        const path2 = 'iki.png'
        const path3 = 'uc.jpeg'

        cy.get('#filesToUpload').attachFile([path1,path2,path3])

        cy.get('#fileList > :nth-child(1)').should('have.text','bir.jpeg')
        cy.get('#fileList > :nth-child(2)').should('contain.text','iki.png')
        cy.get('#fileList > :nth-child(3)').should('include.text','uc.jpeg')
        
    })

    it.only('OverWrite File Name', () => {

        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        
        const path1 = 'bir.jpeg'
        cy.get('#filesToUpload').attachFile({filePath: path1, fileName: 'image01'})//yukledigimiz dosyanin ismini degistirme
    })

})