 var assert = require('assert'),
 test = require('selenium-webdriver/testing'),
 webdriver = require('selenium-webdriver');
//  
// test.describe('Google Search', function() {
//   test.it('should work', function() {
//       this.timeout(30000);
//     var driver = new webdriver.Builder().
//     withCapabilities(webdriver.Capabilities.firefox()).
//     build();
// driver.get('http://www.google.com');
//     var searchBox = driver.findElement(webdriver.By.name('q'));
//     searchBox.sendKeys('simple nodejs programmer');
//     searchBox.getAttribute('value').then(function(value) {
//       assert.equal(value, 'simple nodejs programmer');
//     });
//     driver.quit();
//   });
// });

test.describe('sample', function() {
    test.it('should work', function() {
        assert.equal('value', 'value');
    });
});