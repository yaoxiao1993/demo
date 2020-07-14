describe('钩子函数', () => {
    before(function(){
        //当前测试套件中，所有测试用例执行之前运行
        cy.log("测试前的数据准备");
    });

    // after(function(){
    //     //当前测试套件中，所有测试用例执行结束之后运行
    //     cy.log("测试后的数据清理");
    // });
    //
    // beforeEach(function(){
    //     //当前测试套件中，每个测试用例执行之前都会运行
    //     cy.log("每个测试运行前的数据准备");
    // });
    //
    // afterEach(function(){
    //     //当前测试套件中，每个测试用例执行之后都会运行
    //     cy.log("每个测试运行后的数据清理");
    // });

    //测试用例
    it('Gets, types and asserts', () => {
        cy.visit('https://example.cypress.io');

        cy.contains('type').click();

        // Should be on a new URL which includes '/commands/actions'
        cy.url().should('include', '/commands/actions');

        // Get an input, type into it and verify that the value has been updated
        cy.get('.action-email')
            .type('fake@email.com')
            .should('have.value', 'fake@email.com')
    });

    it('验证钩子函数', ()=>{
    });


});