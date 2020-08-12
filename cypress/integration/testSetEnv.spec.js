describe('设置环境变量', () => {
    describe('不同方式设置环境变量', ()=>{
        it('Gets, types and asserts', () => {
            cy.visit('https://example.cypress.io');

            cy.contains('type').click()

            // Should be on a new URL which includes '/commands/actions'
            cy.url().should('include', '/commands/actions')

            // Get an input, type into it and verify that the value has been updated
            cy.get('.action-email')
                .type('fake@email.com')
                .should('have.value', 'fake@email.com')
        });
    });


    it('使用cypress.json设置环境变量', ()=>{
        cy.log('环境URL ' + Cypress.env('dev').url);
    });

    it.only('使用cypress.env.json设置环境变量', ()=>{
        cy.log('环境URL： ' + Cypress.env('dev').url);
    })
});