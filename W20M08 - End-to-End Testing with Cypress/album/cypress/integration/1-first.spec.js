
describe('Test if cypress is working', () => {
    it('can run', () => {
        assert.equal(true, true);
    });

    it('can visit http://localhost:8765/', () => {
        cy.visit('http://localhost:8765/');
    });
});