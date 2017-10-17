// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'opens modal when button clicked, closes when success button clicked': function (browser) {
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer)
      .waitForElementVisible('.container', 5000)
      .click('button')
      .assert.elementPresent('.modal')
      .click('.is-success')
      .assert.cssProperty('.modal', 'display', 'none')
      .end()
  },
  'opens modal when button clicked, closes when delete button clicked': function (browser) {
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer)
      .waitForElementVisible('.container', 5000)
      .click('button')
      .assert.elementPresent('.modal')
      .click('.delete')
      .assert.cssProperty('.modal', 'display', 'none')
      .end()
  }
}
