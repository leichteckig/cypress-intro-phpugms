// describe = like a frame to structure your test fine, important for hooks
    describe('Find our meetup at meetup.comm', () => {
        // Hook
        beforeEach(() => {
            cy.visit('https://www.meetup.com/de-DE/phpugms/');
        })

        // Actual test, see if the headline is actually 'PHP Usergroup Muenster'
        it('Open images tab', () => {
            // Define the request we want to wait for
            cy.server();
            cy.route({
                url: '/blank.jsp?brokenImg=',
                method: 'GET'
            }).as('loadBrokenImage')

            // Navigate to images
            cy.contains('.Bevorstehende Events (5)').scrollIntoView();
            cy.contains('Fotos').click();

            cy.wait('@loadBrokenImage').then((xhr) => {
                expect(xhr).to.have.property('status', 200);

                cy.get('#D_allAlbumsList').should('be.visible');
            })
        });
    });