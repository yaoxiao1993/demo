describe('测试添加自定义函数', () => {
    it('自定义函数[login]', () => {
        cy.login('123@email.com', 'password123');
    })
});