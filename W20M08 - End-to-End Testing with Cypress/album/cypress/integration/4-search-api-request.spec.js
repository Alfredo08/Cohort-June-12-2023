
describe('can display results after searching for an artist', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8765/');
        cy.get('.search__form')
            .find('input.radius')
            .as('searchBox');
    });
    
    it('can fetch from API', () => {
        cy.get('@searchBox')
            .type('Queen', {delay:250});
        
        cy.get('.spinner');

        cy.intercept('GET', '**/search?*')

        cy.get('article.album')
            .contains('Live Around the World (Deluxe)');
    });

    it('can fetch from mock data', () => {
        cy.get('@searchBox')
            .type('Queen', {delay:250});
        
        cy.get('.spinner');

        cy.intercept('GET', '**/search?*', {fixture: 'itunes.json'});

    });
});