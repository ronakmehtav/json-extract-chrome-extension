chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.status === 'complete' && tab.url.startsWith("https")) {
    chrome.tabs.executeScript(tabId, { code: "alert('Hello World');" });
  }
});
