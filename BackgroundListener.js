/**
 * @Author Hyrum Saunders and Jordan Jimenez
 */

document.write('<script src="SelectedListsModel.js" ></script>')
document.write('<script src="TimerModel.js" ></script>')


chrome.tabs.onUpdated.addListener(UrlListener);

//code for when tab is selected.
function UrlListener(tabId, changeInfo, tab)
{
    console.log(changeInfo.url)
    
    if(isWhiteListedURL(changeInfo.url))
        chrome.tabs.update(tabId, {url: "BlockedSite.html"});  
    else if(isBlackListedURL(changeInfo.url))
        chrome.tabs.update(tabId, {url: "BlockedSite.html"});
}

//fill in black lists.
var blackListsNames = getBlackListsNames();
for(var currentIndex = 0; currentIndex < blackListsNames.length(); currentIndex++)
    submitFormHandler(blackListsNames[currentIndex], 'dynamic-blacklist');

var whiteListsNames = getWhiteListsNames();
for(var currentIndex = 0; currentIndex < getWhiteListsNames.length(); currentIndex++)
    submitFormHandler(whiteListsNames[currentIndex], 'dynamic-whitelist');