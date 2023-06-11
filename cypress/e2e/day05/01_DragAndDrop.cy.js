/// <reference types="cypress" />

describe('DragAndDrop',() => {

    it('', () => {
        
        //https://www.npmjs.com/package/@4tw/cypress-drag-drop
        //npm install --save-dev @4tw/cypress-drag-drop
        cy.visit('https://the-internet.herokuapp.com/drag_and_drop')

        cy.get('#column-a').//suruklenecek web elementi
        drag('#column-b')//web elementin suruklenecegi yer
    })




})