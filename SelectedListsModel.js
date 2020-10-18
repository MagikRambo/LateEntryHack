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

/**
 * Adds specified listName to savedSelectedWhiteLists if listName is valid
 * (in savedWhiteLists in ListsModel) and not already in savedSelectedWhiteLists.
 * @param: listName: name to added.
 */
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

/**
 * removes specified listName from savedSelectedWhiteLists if listName is valid
 * (in savedWhiteLists in ListsModel) and listName is in savedSelectedWhiteLists.
 * @param: listName: name to remove,
 */
function removeSelectedWhiteList(listName)
{
    var savedSelectedWhiteLists = JSON.parse(localStorage.getItem("savedSelectedWhiteListsLocal"));
    if(savedSelectedWhiteLists.hasOwnProperty(listName) && containsWhiteList(listName))
    {
        savedSelectedWhiteLists.pop(listName);
    }
    localStorage.setItem("savedSelectedWhiteListsLocal", JSON.stringify(savedSelectedWhiteLists));
}

/**
 * Checks if specified URLName matches any of the savedSelectedWhiteLists URLs.
 * @param: URLName: website address.
 */
function isWhiteListedURL(URLName)
{
    var savedSelectedWhiteLists = JSON.parse(localStorage.getItem("savedSelectedWhiteListsLocal"));
    for (var currentList = 0; currentList < savedSelectedWhiteLists.length; currentList++)
    {
        var currentListURLs = getWhiteListURLs(savedSelectedWhiteLists[currentList]);
        for(var currentURL = 0; currentURL < currentListURLs.length; currentURL++)
            if(URLName.includes(currentListURLs[currentURL]))
                return true;
    }
    return false;
}

function getSelectedWhiteListeds()
{
    return JSON.parse(localStorage.getItem("savedSelectedWhiteListsLocal"));
}



//######################################################################








//######################## black List functions ########################

/**
 * Adds specified listName to savedSelectedBlackLists if listName is valid
 * (in savedBLackLists in ListsModel) and not already in savedSelectedBlackLists.
 * @param: listName: name to added.
 */
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


/**
 * removes specified listName from savedSelectedBlackLists if listName is valid
 * (in savedBlackLists in ListsModel) and listName is in savedSelectedBlackLists.
 * @param: listName: name to remove.
 */
function removeSelectedBlackList(listName)
{
    var savedSelectedBlackLists = JSON.parse(localStorage.getItem("savedSelectedBlackListsLocal"));
    if(savedSelectedBlackLists.hasOwnProperty(listName) && containsBlackList(listName))
    {
        savedSelectedBlackLists.pop(listName);
    }
    localStorage.setItem("savedSelectedBlackListsLocal", JSON.stringify(savedSelectedBlackLists));
}

/**
 * Checks if specified URLName matches any of the savedSelectedBlackLists URLs.
 * @param: URLName: website address.
 */
function isBlackListedURL(URLName)
{
    var savedSelectedBlackLists = JSON.parse(localStorage.getItem("savedSelectedBlackListsLocal"));
    for (var currentList = 0; currentList < savedSelectedBlackLists.length; currentList++)
    {
        var currentListURLs = getBlackListURLs(savedSelectedBlackLists[currentList]);
        for(var currentURL = 0; currentURL < currentListURLs.length; currentURL++)
            if(URLName.includes(currentListURLs[currentURL]))
                return true;
    }
    return false;
}

function getSelectedBlackListeds()
{
    return JSON.parse(localStorage.getItem("savedSelectedBlackListsLocal"));
}
//######################################################################