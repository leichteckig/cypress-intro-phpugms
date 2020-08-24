// Array with devices to iterate (later)
const devices = [{
    model: 'macbook-15',
    orientation: 'portrait',
}, {
    model: 'ipad-2',
    orientation: 'portrait',
}, {
    model: 'iphone-6+',
    orientation: 'portrait',
}, {
    model: 'iphone-6+',
    orientation: 'landscape',
}];

describe('Open and find phpugms logo', () => {
    // We iterate though the devices
    devices.forEach(device => {

        // Use an own context for better hook usage
        context(`On ${device.model}, ${device.orientation}`, () => {

            // Set viewport before tests
            beforeEach(() => {
                cy.viewport(device.model, device.orientation).then(() => {
                    cy.visit('/');
                });
            })

            // Actual test, see if the headline is actually 'PHP Usergroup Muenster'
            it(`Find phpugms title`, () => {
                // Use incorrect string by purpose!
                cy.get('#php-usergroup-münster').contains('PHP Usergroup Münster');
            });

            // See if the logo contains the right image
            it(`Check phpugms logo`, () => {
                cy.get('img')
                    .should('have.attr', 'src')
                    .and('match', /phpugms-logo.svg/);
            });
        })
    });
});