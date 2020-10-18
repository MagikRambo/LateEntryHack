/**
 * @Author Hyrum Saunders and Jordan Jimenez
 */

document.write('<script src="SelectedListsModel.js" ></script>')


chrome.tabs.onUpdated.addListener(UrlListener);

//code for when tab is selected.
function UrlListener(tabId, changeInfo, tab)
{
    console.log(changeInfo.url)
    // Shorten the URL for readability
    var newURL = shortenURL(changeInfo.url)
    if(isWhiteListedURL(changeInfo.url))
    {
        window.open("BlockedSite.html");
        window.alert("You should not be here.")

    }
        
    else if(isBlackListedURL(changeInfo.url))
        window.alert("You should not be here.")
}
