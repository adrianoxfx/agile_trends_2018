var until = protractor.ExpectedConditions


var Helper = function() {}

// Wait to see if element is on DOM
Helper.prototype.elementIsPresenceDom = function(element) {
  browser.wait(until.presenceOf(element), 25000, 'Element ' + element.getText() + ' taking too long to appear in the DOM')
  browser.executeScript("arguments[0].scrollIntoView();", element.getWebElement())
}

module.exports = Helper
