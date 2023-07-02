chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.status === 'complete' && tab.url.match("https://jsonplaceholder.typicode.com/todos/1")) {
    chrome.tabs.executeScript(tabId, { code: `
            alert(JSON.parse(document.body.textContent).title)
        ` });
  }
});
