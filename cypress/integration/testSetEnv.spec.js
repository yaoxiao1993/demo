describe('设置环境变量', () => {
    it('使用cypress.json设置环境变量', ()=>{
        cy.log('环境URL ' + Cypress.env('dev').url);
    });

    it.only('使用cypress.env.json设置环境变量', ()=>{
        cy.log('环境URL： ' + Cypress.env('dev').url);
    })
});