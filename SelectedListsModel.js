/**
 * @author Jordan Jimenez
 * @author Jacob Pehringer
 */

document.write('<script src="ListsModel.js" ></script>');

/**
 * Run this functions before using any other SelectedListsModel functions
 * Sets assisted memory in chrome for selected lists.
 */
function initializeSelectedLists()
{
    localStorage.setItem("savedSelectedWhiteListsLocal", JSON.stringify([]));
    localStorage.setItem("savedSelectedBlackListsLocal", JSON.stringify([]));
}

//######################## White List Functions ########################
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
//######################################################################














//######################## black List functions ########################
function addSelectedBlackList(listName)
{
    var savedSelectedBlackLists = JSON.parse(localStorage.getItem("savedSelectedBlackListsLocal"));
    if( !(savedSelectedBlackLists.hasOwnProperty(listName)) && containsBlackList(listName) )
    {
        savedSelectedBlackLists.push(listName);
    }
    //else throw something
    localStorage.setItem("savedSelectedBlackListsLocal", JSON.stringify(savedSelectedBlackLists));
        
}

function removeSelectedBlackList()
{
    var savedSelectedBlackLists = JSON.parse(localStorage.getItem("savedSelectedBlackListsLocal"));
    if(savedSelectedBlackLists.hasOwnProperty(listName) && containsBlackList(listName))
    {
        savedSelectedBlackLists.pop(listName);
    }
    localStorage.setItem("savedSelectedBlackListsLocal", JSON.stringify(savedSelectedBlackLists));
}

function isBlackListedURL(URLName)
{
    var savedSelectedBlackLists = JSON.parse(localStorage.getItem("savedSelectedBlackListsLocal"));
    for (var currentList = 0; currentList < savedSelectedBlackLists.length; currentList++)
    {
        var currentListURLs = getBlackListURLs(savedSelectedBlackLists[currentList]);
        for(var currentURL = 0; currentURL < currentListURLs.length; currentURL++)
            if(currentListURLs[currentURL] == URLName)
                return true;
    }
    return false;
}
//######################################################################