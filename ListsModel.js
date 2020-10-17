/**
 * @author: Hyrum Saunders and Jacob Pehringer
 */

// Globals
savedWhiteLists = {}; //Holds users different white lists.
savedBlackLists = {}; //Holds users different black lists.

//######################## White List Functions ########################
/**
 * Adds new WhiteList with specified listName to savedBlackLists
 * @param: listName: The name of the list to added.
 */
function createCustomWhiteList(listName)
{
    if(!savedWhiteLists.listName)
        savedWhiteLists.push(listName, []);
    //throw something
}

/**
 * Removes WhiteList with specified listName from savedWhiteLists.
 * @param: listName: The name of the list to remove.
 */
function removeCustomWhiteList(listName)
{
    if(savedWhiteLists.listName)
        delete savedWhiteLists.listName;
    //throw something
}

/**
 * Adds wedsiteURL to specified WhiteList in savedWhiteLists
 * @param: websiteUrl: the url to add to the whitelist
 * @param: listName: the name of the list to add the url to
 */
function addToWhitelist(websiteUrl, listName){
    if (savedWhiteLists.listName)
        savedWhiteLists.listName.push(websiteUrl);
}

/**
 * @return: new Array Iterator object that contains the savedWhiteLists names
 */
function getWhiteListsNames()
{
    return savedWhiteLists.key();
}
//######################################################################

//######################## black List functions ########################
/**
 * Adds new BlackList with specified listName to savedBlackLists
 * @param: listName: The name of the list to added.
 */
function createCustomBlackList(listName)
{
    if(!savedWhiteLists.listName)
        savedWhiteLists.push(listName, []);
    //throw something
}

/**
 * Removes BlackList with specified listName from savedBlackLists.
 * @param: listName: The name of the list to remove.
 */
function removeCustomBlackList(listName)
{
    if(savedBlackLists.listName)
        delete savedBlackLists.listName;
    //throw something
}

/**
 * Adds wedsiteURL to specified BlackList in savedWhiteLists
 * @param: websiteUrl: the url to add to the blacklist
 * @param: listName: the name of the list to add the url to
 */
function addToBlackList(websiteURL, listName){
    if (savedWhiteLists.listName)
        savedBlackLists.listName.push(websiteURL);
}

/**
 * @return: new Array Iterator object that contains the savedBlackLists names
 */
function getBlackListsNames()
{
    return savedBlackLists.key();
}
//######################################################################


