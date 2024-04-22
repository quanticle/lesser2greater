browser.webNavigation.onBeforeNavigate.addListener(async function (e) {
  let originalUrl = e.url;
  let replaceRePairs = [
    [/(.*)(less(?:er)?wrong)(.*)/, '$1greaterwrong$3'],
    [/forum.effectivealtruism\.org(.*)/, 'ea.greaterwrong.com$1'],
    [/alignmentforum\.org\/posts\/(.*)/, 'greaterwrong.com/posts/$1'],
    [/alignmentforum\.org\/s\/(.*)/, 'greaterwrong.com/s/$1'],
    [/alignmentforum\.org\/?/, 'greaterwrong.com/index?view=alignment-forum'],
    [/arbital\.com(.*)/, 'arbital.greaterwrong.com$1'],
    [/progressforum\.org(.*)/, 'pf.greaterwrong.com$1']
  ];
  let newUrl = originalUrl;
  replaceRePairs.forEach((pair) => {
    if (newUrl === originalUrl) {
      let [matchExpression, replaceString] = pair;
      newUrl = originalUrl.replace(matchExpression, replaceString);
    }
  });
  if (newUrl !== originalUrl) {
    browser.tabs.update(e.tabId, { url: newUrl });
  }
}, {
  url: [{ hostContains: '.lesserwrong.com' },
        { hostContains: 'lesswrong.com' },
        { hostContains: 'forum.effectivealtruism.org' },
        { hostContains: 'alignmentforum.org' },
        { hostContains: 'arbital.com' },
        { hostContains: 'progressforum.org' }]
});
