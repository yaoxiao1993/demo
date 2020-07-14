import {testLoginUser} from "./testLogin.data";

describe('验证自动生成测试用例', () => {
    for(const user of testLoginUser){
        it(user.title, function () {
            cy.log('username:'+user.username+', password:'+user.password+','+user.title);
        })
    }
});