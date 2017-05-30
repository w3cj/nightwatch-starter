module.exports = {
  'Index test' : function (browser) {
    browser
      .url('http://localhost:8080/src/index.html')
      .waitForElementVisible('body', 1000)
      .assert.containsText('h1', 'Hello Nightwatch')
      .end();
  }
};
