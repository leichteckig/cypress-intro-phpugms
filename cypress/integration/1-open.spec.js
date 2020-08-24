// describe = like a frame to structure your test fine, important for hooks
describe('Open and find phpugms logo', () => {

    // Syntax mocha-like, maybe familiar

    // Hook
    beforeEach(() => {
        cy.visit('/');
    })

    // Actual test, see if the headline is actually 'PHP Usergroup Muenster'
    it('Find phpugms title', () => {
        // Use incorrect string by purpose!
        cy.get('.container-lg').should('be.visible')
        cy.get('#php-usergroup-münster').contains('PHP Usergroup Münster');
    });

    // See if the logo contains the right image
    it('Check phpugms logo', () => {
        cy.get('img')
            .should('have.attr', 'src')
            .and('match', /phpugms-logo.svg/);
    });
});