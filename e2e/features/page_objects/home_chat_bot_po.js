'use strict'


class Home {
  constructor () {
    this.conversationWrap = $('.conversation-wrap')
    this.echoBot = element(by.cssContainingText('.media-heading.contact-name', 'Echo Bot'))
    this.reverseBot = element(by.cssContainingText('.media-heading.contact-name', 'Reverse Bot'))
    this.waitingBot = element(by.cssContainingText('.media-heading.contact-name', 'Waiting Bot'))
    this.ladyBot = element(by.cssContainingText('.media-heading.contact-name', 'Lady Capulet'))
    this.chatWindow = $('.panel.panel-default')

  }

  visit () {
    return browser.get('/')
  }
}

module.exports = Home
