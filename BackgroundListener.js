/**
 * @Author Hyrum Saunders
 */

var currentList;

document.write('<script src="ListsModel.js" ></script>');

chrome.tabs.onUpdated.addListener(UrlListener)

function UrlListener(tabId, changeInfo, tab){
 if (!(changeInfo.UrlListener in getWhiteListURLs(currentList))){
     alert("This website is not inside your whitelists, if you'd like access, add it to your whitelist");
 }
 else if (changeInfo.UrlListener in getBlackListURLs(currentList)){
     alert("This is a restricted site! Wait the timer to have access or give up!");
 }
}