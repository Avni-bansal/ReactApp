const assert = require('assert');

describe('Employee', () => {


 it('should have the right title', function() {
    browser.url('http://localhost:3000/');
    const title = browser.getTitle();
    assert.strictEqual(title, 'React App');
  });


it('should submit login form', function () {
    browser.url('http://localhost:3000/');
       var input = $("#username");
    input.setValue('test123');

     var input1 = $("#email");
    input1.setValue('test123@gmail.com');

       var input2 = $("#contact");
    input2.setValue('9910932040');

     browser.execute( () =>
     {
      document.getElementById("loginForm").submit();
     });

     var pageUrl = browser.getUrl();
     assert.equal(pageUrl, 'http://localhost:3000/?username=test123&email=test123%40gmail.com&contact=9910932040');
     browser.pause(6000);

     });

it('should detect if an element is displayed', () => {
    let elem = $("#notDisplayed");
    let isDisplayed = elem.isDisplayed();
    console.log(isDisplayed); // outputs: false

    elem = $("#notVisible");

    isDisplayed = elem.isDisplayed();
    console.log(isDisplayed); // outputs: false

    elem = $("#notInViewport");
    isDisplayed = elem.isDisplayed();
    console.log(isDisplayed); // outputs: true

    elem = $("#zeroOpacity");
    isDisplayed = elem.isDisplayed();
    console.log(isDisplayed); // outputs: true
});


it('should reload my session with current capabilities', () => {
    browser.url('http://localhost:3000/');
    console.log(browser.sessionId)
    browser.reloadSession()
    console.log(browser.sessionId)
});

it('should save a screenshot of the browser view', function () {
    browser.url('http://localhost:3000/');
    browser.saveScreenshot('./some/path/screenshot.png');
});

});