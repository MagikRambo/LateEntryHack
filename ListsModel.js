/**
 * @author: Hyrum Saunders and Jacob Pehringer and Jordan Jimenez
 */

/**
 * Run this functions before using any other ListsModel functions
 * Sets assisted memory in chrome for Lists.
 */
function initializeLists()
{
    localStorage.setItem("savedWhiteListsLocal", JSON.stringify({}));
    localStorage.setItem("savedBlackListsLocal", JSON.stringify({}));
}

//######################## White List Functions ########################

function containsWhiteList(listName)
{
    var savedWhiteLists = JSON.parse(localStorage.getItem("savedWhiteListsLocal"));
    if(savedWhiteLists.hasOwnProperty(listName))
        return true;
    return false;
}

/**
 * Adds new WhiteList with specified listName to savedWhiteLists
 * @param: listName: name of the list to added.
 */
function addWhiteList(listName)
{
    var savedWhiteLists = JSON.parse(localStorage.getItem("savedWhiteListsLocal"));
    if(!(savedWhiteLists.hasOwnProperty(listName)))
        savedWhiteLists[listName] = [];
    localStorage.setItem("savedWhiteListsLocal", JSON.stringify(savedWhiteLists));
}

/**
 * Removes WhiteList with specified listName from savedWhiteLists.
 * @param: listName: name of the list to remove.
 */
function removeWhiteList(listName)
{
    var savedWhiteLists = JSON.parse(localStorage.getItem("savedWhiteListsLocal"));
    if(savedWhiteLists.hasOwnProperty(listName))
        delete savedWhiteLists[listName];
    //throw something
    localStorage.setItem("savedWhiteListsLocal", JSON.stringify(savedWhiteLists));
}

/**
 * @return: new Array Iterator object that contains all savedWhiteLists names
 */
function getWhiteListsNames()
{
    var savedWhiteLists = JSON.parse(localStorage.getItem("savedWhiteListsLocal"));
    return Object.keys(savedWhiteLists);
}

/**
 * Adds wedsiteURL to specified WhiteList in savedWhiteLists
 * @param: websiteUrl: URL to add.
 * @param: listName: name of list to add URL to
 */
function addWhiteListURL(websiteURL, listName) //list -> List
{
    var savedWhiteLists = JSON.parse(localStorage.getItem("savedWhiteListsLocal"));
    if (savedWhiteLists.hasOwnProperty(listName))
        savedWhiteLists[listName].push(websiteURL);
    localStorage.setItem("savedWhiteListsLocal", JSON.stringify(savedWhiteLists));
}

/**
 * removes wedsiteURL from specified whiteList in savedWhiteLists
 * @param: websiteUrl: URL to remove.
 * @param: listName: name of list to remove URL from.
 */
function removeWhiteListURL(websiteURL, listName)
{
    var savedWhiteLists = JSON.parse(localStorage.getItem("savedWhiteListsLocal"));
    if (savedWhiteLists.hasOwnProperty(listName))
        savedWhiteLists[listName].pop(websiteURL);
    localStorage.setItem("savedWhiteListsLocal", JSON.stringify(savedWhiteLists));
}

/**
 * @return: new Array Iterator object that contains the specified WhiteList URLs
 */
function getWhiteListURLs(listName)
{
    var savedWhiteLists = JSON.parse(localStorage.getItem("savedWhiteListsLocal"));
    return savedWhiteLists[listName];
}
//######################################################################








//######################## black List functions ########################

/**
 * 
 * @param listName 
 */
function containsBlackList(listName)
{
    var savedBlackLists = JSON.parse(localStorage.getItem("savedBlackListsLocal"));
    if(savedBlackLists.hasOwnProperty(listName))
        return true;
    return false;
}

/**
 * Adds new BlackList with specified listName to savedBlackLists
 * @param: listName: The name of the list to added.
 */
function addBlackList(listName)
{
    var savedBlackLists = JSON.parse(localStorage.getItem("savedBlackListsLocal"));
    if(!savedBlackLists.hasOwnProperty(listName))
        savedBlackLists[listName] = [];
    //throw something
    localStorage.setItem("savedBlackListsLocal", JSON.stringify(savedBlackLists));
}

/**
 * Removes BlackList with specified listName from savedBlackLists.
 * @param: listName: The name of the list to remove.
 */
function removeBlackList(listName)
{
    var savedBlackLists = JSON.parse(localStorage.getItem("savedBlackListsLocal"));
    if(savedBlackLists.hasOwnProperty(listName))
        delete savedBlackLists[listName];
    //throw something
    localStorage.setItem("savedBlackListsLocal", JSON.stringify(savedBlackLists));
}

/**
 * @return: new Array Iterator object that contains all savedBlackLists names
 */
function getBlackListsNames()
{
    var savedBlackLists = JSON.parse(localStorage.getItem("savedBlackListsLocal"));
    return Object.keys(savedBlackLists);
}

/**
 * Adds wedsiteURL to specified BlackList in savedBlackLists
 * @param: websiteUrl: URL to add.
 * @param: listName: name of list to add URL to
 */
function addBlackListURL(websiteURL, listName)
{
    var savedBlackLists = JSON.parse(localStorage.getItem("savedBlackListsLocal"));
    if (savedBlackLists.hasOwnProperty(listName))
        savedBlackLists[listName].push(websiteURL);
    localStorage.setItem("savedBlackListsLocal", JSON.stringify(savedBlackLists));
}

/**
 * Removes wedsiteURL from specified BlackList in savedBlackLists
 * @param: websiteUrl: URL to remove.
 * @param: listName: name of list to remove URL from.
 */
function removeBlackListURL(websiteURL, listName)
{
    var savedBlackLists = JSON.parse(localStorage.getItem("savedBlackListsLocal"));
    if (savedBlackLists.hasOwnProperty(listName))
        savedBlackLists[listName].pop(websiteURL);
    localStorage.setItem("savedBlackListsLocal", JSON.stringify(savedBlackLists));
}

/**
 * @return: new Array Iterator object that contains the specified BlackList URLs
 */
function getBlackListURLs(listName)
{
    var savedBlackLists = JSON.parse(localStorage.getItem("savedBlackListsLocal"));
    return savedBlackLists[listName];
}
//######################################################################



