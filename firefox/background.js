let checkUrl = true;
browser.webNavigation.onBeforeNavigate.addListener(async function(e) {
    let originalUrl = e.url;
    let replaceRe = /(.*)(less(?:er)?wrong)(.*)/;
    let newUrl = originalUrl.replace(replaceRe, '$1greaterwrong$3');
    if(checkUrl) {
        try {
            let response = await fetch(newUrl, {method: "HEAD"});

            if(!response.ok){
                console.log("GreaterWrong doesn't support " + newUrl + ". Received status: " + response.status);
            }
            else {
                browser.tabs.update(e.tabId, {url: newUrl});
            }
            
        }
        catch(err) {
            console.log("GreaterWrong doesn't support " + newUrl + ". Received error: " + err.toString());

        }
    }
}, {url: [{hostContains: '.lesserwrong.com'},
          {hostContains: 'lesswrong.com'}]});
