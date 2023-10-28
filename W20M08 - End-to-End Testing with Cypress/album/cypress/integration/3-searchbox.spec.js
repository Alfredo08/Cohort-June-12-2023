
describe('tests for the searchbox input', () => {

    beforeEach(() => {
        cy.visit('http://localhost:8765/');
        cy.get('.search__form')
            .find('input.radius')
            .as('searchBox');
    });

    it('can type into the searchbox input', () => {
        cy.get('@searchBox')
            .type('Queen', {delay:250});
    });

    it('can handle backspaces', () => {
        cy.get('@searchBox')
            .type('Queeeee{backspace}{backspace}{backspace}n', {delay:250});
    });

    it('can handle curly braces', () => {
        cy.get('@searchBox')
            .type('{backspace}', {delay:250, parseSpecialCharSequences:false});
    });
});