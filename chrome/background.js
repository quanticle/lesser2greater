chrome.webNavigation.onBeforeNavigate.addListener(async function(e) {
    let originalUrl = e.url;
    let replaceRePairs = [
        [/(.*)(less(?:er)?wrong)(.*)/, '$1greaterwrong$3'],
        [/forum.effectivealtruism\.org(.*)/, 'ea.greaterwrong.com$1']
    ];
    let newUrl = originalUrl;
    replaceRePairs.forEach((pair) => {
        if (newUrl === originalUrl) {
            let [matchExpression, replaceString] = pair;
            newUrl = originalUrl.replace(matchExpression, replaceString);
        }
    });
    if(newUrl !== originalUrl){
        try {
            let response = await fetch(newUrl, {method: "HEAD"});
            if(!response.ok){
                console.log("GreaterWrong doesn't support " + newUrl + ". Received status: " + response.status);
            }
            else {
                chrome.tabs.update(e.tabId, {url: newUrl});
            }
        }
        catch(err) {
            console.log("GreaterWrong doesn't support " + newUrl + ". Received error: " + err.toString());
        }
    }
}, {url: [{hostContains: '.lesserwrong.com'},
          {hostContains: 'lesswrong.com'},
          {hostContains: 'forum.effectivealtruism.org'}]});
