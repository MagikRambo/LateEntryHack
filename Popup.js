/**
 * @author Hyrum Saunders
 */
document.write('<script src="ListsModel.js" ></script>')

window.onload = function() {document.getElementById('whitelistSubmit').style.display='none' ; document.getElementById('blacklistSubmit').style.display='none'};

clicked = false;

document.getElementById('whitelistButton').addEventListener('click', function()
{
    if(document.querySelectorAll('div.btn-group-horizontal').length == 0)
    {
        var whiteListsNames = getWhiteListsNames();
        for(var i = 0; i < whiteListsNames.length; i++)
        {
            submitFormHandler(whiteListsNames[i], 'dynamic-whitelist');
        }
    }
});

document.getElementById('blacklistButton').addEventListener('click', function()
{
    if(document.querySelectorAll('div.btn-group-horizontal').length == 0)
    {
        var blackListsNames = getBlackListsNames();
        for(var i = 0; i < blackListsNames.length; i++)
        {
            submitFormHandler(blackListsNames[i], 'dynamic-blacklist');
        }
    }
});

const formElem = document.getElementById('whitelistForm');
formElem.addEventListener('submit', (e) => {
// on form submission, prevent default
e.preventDefault();
let candidate = formElem.elements.whitelistAdd.value;
submitFormHandler(candidate, 'dynamic-whitelist');
formElem.elements.whitelistAdd.value = "";
});

const formElemBlacklist = document.getElementById('blacklistForm');
formElemBlacklist.addEventListener('submit', (f) => {
// on form submission, prevent default
f.preventDefault();
let candidate = formElemBlacklist.elements.blacklistAdd.value;
submitFormHandler(candidate, 'dynamic-blacklist');
formElemBlacklist.elements.blacklistAdd.value = "";
});

document.querySelectorAll('div.btn').length

function submitSubFormHandler(){

    // Create elements
    var outermostDiv = document.createElement('div');
    var innermostDiv = document.createElement('div');
    var bt1 = document.createElement('button');
    var bt2 = document.createElement('button');

    // Setup attributes
    outermostDiv.setAttribute('class', 'card-body');
    outermostDiv.setAttribute('style', 'width:100%');
    innermostDiv.setAttribute('class', 'btn-group btn-group-horizontal');
    innermostDiv.setAttribute('style', 'width:100%');
    bt1.setAttribute('class', 'btn');
    bt1.setAttribute('style', 'width:100%');

}

function submitFormHandler(candidate, list)
{
    // Create all necessary elements
    var outermostDiv = document.createElement('div');
    var outDivBt1 = document.createElement('button');
    var outDivBt2 = document.createElement('button');
    var bt2Span = document.createElement('span')
    var divCard = document.createElement('div');
    var divBtnGroupVertical = document.createElement('div');
    var formTag = document.createElement('form');
    var divFormGroup = document.createElement('div');
    var inputTag = document.createElement('div');

    // Setup attributes
    outermostDiv.setAttribute('id', candidate);
    outermostDiv.setAttribute('class', 'btn-group btn-group-horizontal');
    outermostDiv.setAttribute('style', 'width:100%');
    outDivBt1.setAttribute('class', 'btn');
    outDivBt1.setAttribute('data-toggle', 'collapse');
    outDivBt1.setAttribute('data-target', '#subListButtonGroup' + candidate);
    outDivBt1.setAttribute('style', 'width:100%');
    outDivBt1.textContent = candidate;
    outDivBt2.setAttribute('class', 'btn close');
    outDivBt2.setAttribute('aria-label', 'Close');
    bt2Span.setAttribute('aria-hidden', 'true');
    bt2Span.innerHTML = '&times;';
    divCard.setAttribute('class', 'card');
    divCard.setAttribute('style', 'width:100%');
    divBtnGroupVertical.setAttribute('class', 'btn-group btn-group-vertical collapse');
    divBtnGroupVertical.setAttribute('id', 'subListButtonGroup' + candidate);
    divBtnGroupVertical.setAttribute('style', 'width:100%');
    divFormGroup.setAttribute('class', 'form-group');
    divFormGroup.setAttribute('style', 'width:100%');
    inputTag.setAttribute('type', 'text');
    inputTag.setAttribute('class', 'form-control');
    inputTag.setAttribute('style', 'width:100%');
    inputTag.setAttribute('name', 'sublistAdd');
    inputTag.setAttribute('id', 'sublistAdd');

    // Setup hierarchy
    divFormGroup.appendChild(inputTag);
    formTag.appendChild(divFormGroup);
    divBtnGroupVertical.appendChild(formTag);
    divCard.appendChild(divBtnGroupVertical);
    outDivBt2.appendChild(bt2Span);
    outermostDiv.appendChild(outDivBt1);
    outermostDiv.appendChild(outDivBt2);
    var ul = document.getElementById(list);
    ul.appendChild(outermostDiv);

    // Setup listeners
    outDivBt1.addEventListener('click', function() {
        if (clicked){
            this.style.backgroundColor="white";
            clicked=false;
        }
        else{
            this.style.backgroundColor="yellow";
            clicked=true;
        }
        
    });

    outDivBt2.addEventListener("click", function() {
        if (list == "dynamic-whitelist")
            removeWhiteList(candidate);
        else
            removeBlackList(candidate);
        this.parentElement.style.display = 'none';
    });
}