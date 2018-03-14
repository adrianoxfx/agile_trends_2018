'use strict'

let chai = require('chai')
let chaiAsPromised = require('chai-as-promised')
chai.use(chaiAsPromised)
chai.should()
let expect = chai.expect

const Home = require('../page_objects/home_chat_bot_po.js')


module.exports = function () {
  const home = new Home()

  this.Given(/^que estou na home do chat bot$/, {timeout: 60 * 1000}, function (callback) {
    home.visit()
    .then(callback)
  })

  this.When(/^eu seleciono "([^"]*)" na lista$/, {timeout: 60 * 1000}, function (bot, callback) {
    switch (bot) {
    case 'Echo Bot':
      browser.actions().mouseMove(home.echoBot).click().perform()
      // home.echoBot.click()
      .then(callback)
    case 'Reverse Bot':
      browser.actions().mouseMove(home.reverseBot).click().perform()
      // home.reverseBot.click()
      .then(callback)
    case 'Waiting Bot':
      browser.actions().mouseMove(home.waitingBot).click().perform()
      // home.waitingBot.click()
      .then(callback)
    case 'Lady Capulet':
      browser.actions().mouseMove(home.ladyBot).click().perform()
      // home.ladyBot.click()
      .then(callback)
    }
  })

  this.Then(/^vejo a lista de bots$/, function (callback) {
    home.conversationWrap.getText().then(function (text) {
      expect(text).to.contain('Echo Bot')
      expect(text).to.contain('Reverse Bot')
      expect(text).to.contain('Waiting Bot')
      expect(text).to.contain('Lady Capulet')
    })
    .then(callback)
  })

  this.Then(/^Eu vejo a janela de conversa$/, {timeout: 60 * 1000}, function (callback) {
    home.chatWindow.isDisplayed().then(function (isDisplayed) {
      expect(isDisplayed).to.equal(true)
    })
    .then(callback)
  })

}
