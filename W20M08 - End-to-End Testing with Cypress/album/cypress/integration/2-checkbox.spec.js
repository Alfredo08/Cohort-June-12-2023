
describe('tests for the checkbox filters', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8765/');
    });

    it('can uncheck the Explicit checkbox', () => {
        cy.get('.filters__form-group')
            .first()
            .find('input')
            .uncheck()
            .should('not.be.checked');
    });

    it('can check checkbox by clicking on label', () => {
        cy.contains('EP')
            .click();
        
        cy.get('#EP')
            .should('be.checked');
    });
});