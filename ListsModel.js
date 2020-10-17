/**
 * @author: Hyrum Saunders and Jacob Pehringer
 */

// Globals
savedWhiteLists = {}; //Holds users different white lists.
savedBlackLists = {}; //Holds users different black lists.

//######################## White List Functions ########################
/**
 * Adds new WhiteList with specified listName to savedWhiteLists
 * @param: listName: name of the list to added.
 */
function addWhiteList(listName)
{
    if(!savedWhiteLists.listName)
        savedWhiteLists.push(listName, []);
    //throw something
}

/**
 * Removes WhiteList with specified listName from savedWhiteLists.
 * @param: listName: name of the list to remove.
 */
function removeWhiteList(listName)
{
    if(savedWhiteLists.listName)
        delete savedWhiteLists.listName;
    //throw something
}

/**
 * @return: new Array Iterator object that contains all savedWhiteLists names
 */
function getWhiteListsNames()
{
    return savedWhiteLists.key();
}

/**
 * Adds wedsiteURL to specified WhiteList in savedWhiteLists
 * @param: websiteUrl: URL to add.
 * @param: listName: name of list to add URL to
 */
function addWhitelistURL(websiteURL, listName){
    if (savedWhiteLists.listName)
        savedWhiteLists.listName.push(websiteURL);
}

/**
 * removes wedsiteURL from specified whiteList in savedWhiteLists
 * @param: websiteUrl: URL to remove.
 * @param: listName: name of list to remove URL from.
 */
function removeWhiteListURL(websiteURL, listName){
    if (savedWhiteLists.listName)
        savedWhiteLists.listName.pop(websiteURL);
}

/**
 * @return: new Array Iterator object that contains the specified WhiteList URLs
 */
function getWhiteListURLs(listName)
{
    return savedWhiteLists.listName;
}
//######################################################################

//######################## black List functions ########################
/**
 * Adds new BlackList with specified listName to savedBlackLists
 * @param: listName: The name of the list to added.
 */
function addBlackList(listName)
{
    if(!savedBlackLists.listName)
        savedBlackLists.push(listName, []);
    //throw something
}

/**
 * Removes BlackList with specified listName from savedBlackLists.
 * @param: listName: The name of the list to remove.
 */
function removeBlackList(listName)
{
    if(savedBlackLists.listName)
        delete savedBlackLists.listName;
    //throw something
}

/**
 * @return: new Array Iterator object that contains all savedBlackLists names
 */
function getBlackListsNames()
{
    return savedBlackLists.key();
}

/**
 * Adds wedsiteURL to specified BlackList in savedBlackLists
 * @param: websiteUrl: URL to add.
 * @param: listName: name of list to add URL to
 */
function addBlackListURL(websiteURL, listName){
    if (savedBlackLists.listName)
        savedBlackLists.listName.push(websiteURL);
}

/**
 * Removes wedsiteURL from specified BlackList in savedBlackLists
 * @param: websiteUrl: URL to remove.
 * @param: listName: name of list to remove URL from.
 */
function removeBlackListURL(websiteURL, listName){
    if (savedBlackLists.listName)
        savedBlackLists.listName.pop(websiteURL);
}

/**
 * @return: new Array Iterator object that contains the specified BlackList URLs
 */
function getBlackListURLs(listName)
{
    return savedBlackLists.listName;
}
//######################################################################