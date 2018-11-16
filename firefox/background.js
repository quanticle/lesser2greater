browser.webNavigation.onBeforeNavigate.addListener(function(e) {
    console.log("Attempted to navigate to a lesswrong URL");
    let originalUrl = e.url;
    console.log("Original URL: " + originalUrl);
    let replaceRe = /(.*)(less(?:er)?wrong)(.*)/;
    newUrl = originalUrl.replace(replaceRe, '$1greaterwrong$3');
    console.log("Redirecting to " + newUrl);
    browser.tabs.update(e.tabId, {url: newUrl});

}, {url: [{hostEquals: 'lesserwrong.com'},
          {hostEquals: 'lesswrong.com'},
          {hostEquals: 'www.lesserwrong.com'},
          {hostEquals: 'www.lesswrong.com'}]});
