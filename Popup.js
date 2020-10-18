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

const formElem = document.querySelector('form');
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

function submitFormHandler(candidate, list)
{
    // Elements for main list
    var dv = document.createElement('div');
    var bt1 = document.createElement('button');
    var bt2 = document.createElement('button');
    var sp = document.createElement('span');

    // Elements for sub list
    var subListForm = document.createElement('form');
    var divFormGroup = document.createElement('div');
    var divMenu = document.createElement('div');
    var formInput = document.createElement('input');
    var formSubmitButton = document.createElement('button');

    // Set attributes and values for main list
    dv.setAttribute('id', candidate);
    dv.setAttribute('class', 'btn-group btn-group-horizontal dropleft');
    bt1.setAttribute('class', 'btn dropdown-toggle');
    bt1.setAttribute('data-toggle', 'dropdown');
    bt1.setAttribute('style', 'width:100px');
    bt1.textContent = candidate;
    bt2.setAttribute('class', 'btn close');
    bt2.setAttribute('aria-label', 'Close');
    bt2.addEventListener("click", function() {
        this.parentElement.style.display = 'none';
    });
    sp.setAttribute('aria-hidden', 'true');
    sp.innerHTML = "&times;";

    // Set attributes and values for sub list
    divFormGroup.setAttribute('class', 'form-group');
    formInput.setAttribute('class', 'form-control');
    formInput.setAttribute('name', 'subList');
    formSubmitButton.setAttribute('name', 'submitButton');
    divMenu.setAttribute('class', 'dropdown-menu');
    divMenu.setAttribute('id', 'divMenu');
    bt1.setAttribute('data-target', 'divMenu');

    // Set up hierarchy for main list
    bt2.appendChild(sp);
    dv.appendChild(bt1);
    dv.appendChild(bt2);
    bt1.addEventListener('click', function() {
        if (clicked){
            this.style.backgroundColor="white";
            clicked=false;
        }
        else{
            this.style.backgroundColor="yellow";
            clicked=true;
        }
        
    });
    var ul = document.getElementById(list);
    ul.appendChild(dv);

    // Set up hierarchy for sub list
    subListForm.appendChild(divFormGroup);
    divFormGroup.appendChild(formInput);
    subListForm.appendChild(formSubmitButton);
    
}