window.onload = function() {document.getElementById('whitelistSubmit').style.display='none' ; document.getElementById('blacklistSubmit').style.display='none'};

clicked = false;

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
    var dv = document.createElement('div');
    var bt1 = document.createElement('button');
    var bt2 = document.createElement('button');
    var sp = document.createElement('span');
    dv.setAttribute('id', candidate);
    dv.setAttribute('class', 'btn-group btn-group-horizontal');
    bt1.setAttribute('class', 'btn');
    bt1.setAttribute('style', 'width:100px');
    bt1.textContent = candidate;
    bt2.setAttribute('class', 'btn close');
    bt2.setAttribute('aria-label', 'Close');
    bt2.addEventListener("click", function() {
        this.parentElement.style.display = 'none';
    });
    sp.setAttribute('aria-hidden', 'true');
    sp.innerHTML = "&times;";
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
}