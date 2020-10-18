/**
 * @author Jordan Jimenez
 * @author Jacob Pehringer
 */

document.write('<script src="ListsModel.js" ></script>');

function initializeSelectedLists()
{
    localStorage.setItem("savedSelectedWhiteListsLocal", JSON.stringify([]));
    localStorage.setItem("savedSelectedBlackListsLocal", JSON.stringify([]));
}


function addSelectedWhiteList(listName)
{
    var savedSelectedWhiteLists = JSON.parse(localStorage.getItem("savedSelectedWhiteListsLocal"));
    if( !(savedSelectedWhiteLists.hasOwnProperty(listName)) && containsWhiteList(listName) )
    {
        savedSelectedWhiteLists.push(listName);
    }
    //else throw something
    localStorage.setItem("savedSelectedWhiteListsLocal", JSON.stringify(savedSelectedWhiteLists));
        
}

function removeSelectedWhiteList()
{
    var savedSelectedWhiteLists = JSON.parse(localStorage.getItem("savedSelectedWhiteListsLocal"));
    if(savedSelectedWhiteLists.hasOwnProperty(listName) && containsWhiteList(listName))
    {
        savedSelectedWhiteLists.pop(listName);
    }
    localStorage.setItem("savedSelectedWhiteListsLocal", JSON.stringify(savedSelectedWhiteLists));
}

function isWhiteListedURL(URLName)
{
    var savedSelectedWhiteLists = JSON.parse(localStorage.getItem("savedSelectedWhiteListsLocal"));
    for (var currentList = 0; currentList < savedSelectedWhiteLists.length; currentList++)
    {
        var currentListURLs = getWhiteListURLs(savedSelectedWhiteLists[currentList]);
        for(var currentURL = 0; currentURL < currentListURLs.length; currentURL++)
            if(currentListURLs[currentURL] == URLName)
                return true;
    }
    return false;
}







function printSelectedWhiteLists()
{
    var savedSelectedWhiteLists = JSON.parse(localStorage.getItem("savedSelectedWhiteListsLocal"));
    console.log(savedSelectedWhiteLists);
}