/**
 * @Author Hyrum Saunders
 */

var currentList;

document.write('<script src="ListsModel.js" ></script>');
document.write('<script src="TimerModel.js" ></script>');

chrome.tabs.onUpdated.addListener(UrlListener)

function UrlListener(tabId, changeInfo, tab){
 if (!(changeInfo.UrlListener in getWhiteListURLs(currentList))){
     alert("NOT ALLOWED YOU FUCKING IDIOT!!!");
 }
 else if (changeInfo.UrlListener in getBlackListURLs(currentList)){
     alert("NOT ALLOWED YOU FUCKING IDIOT!!!");
 }
}