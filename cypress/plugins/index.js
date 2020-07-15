/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
//*************************************
//指定新的环境配置文件
const fs = require('fs-extra');
const path = require('path');
function getConfigByFile(file){
    const pathToConfigFile = path.resolve('..', 'demo/cypress/config', `cypress.${file}.json`);
    return fs.readJson(pathToConfigFile);
}
//*************************************

//*************************************
//通过标签挑选测试用例
const selectTestWithGrep = require('cypress-select-tests/grep');
//*************************************

module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
    on('file:preprocessor', selectTestWithGrep(config)); //通过标签挑选测试用例

    const file = config.env.configFile || 'demo'; //指定一个环境配置，如果没有指定，则使用cypress.dev.json
    return getConfigByFile(file);
};
