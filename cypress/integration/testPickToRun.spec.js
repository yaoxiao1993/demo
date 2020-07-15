describe('动态挑选测试用例', () => {
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

    it('测试动态挑选用例', ()=>{
        cy.log('动态挑选用例');
    });

    it('使用标签动态挑选测试用例')
});