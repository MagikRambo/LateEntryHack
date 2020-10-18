










// This is the js add / remove

//document.getElementById("btn btn-add").addEventListener('click', addItem);
//document.getElementById("btn btn-remove").addEventListener('click', removeItem);

document.getElementById("btn btn-white-add").addEventListener('click', whiteListAddItem);
document.getElementById("btn btn-white-remove").addEventListener('click', whiteListRemoveItem);

function addItem() {


    var ul = document.getElementById("dynamic-list");
    var candidate = document.getElementById("candidate");
    var li = document.createElement("li");
    li.setAttribute('id', candidate.value);
    li.appendChild(document.createTextNode(candidate.value));
    ul.appendChild(li);
}


 function removeItem() {
     var ul = document.getElementById("dynamic-list");
     var candidate = document.getElementById("candidate");
    var item = document.getElementById(candidate.value);
     ul.removeChild(item);
 }

 function whiteListAddItem()
 {

    var ul = document.getElementById("dynamicWhiteList");
    var candidate = document.getElementById("whiteListCandidate");
    var li = document.createElement("li");
    li.setAttribute('id', candidate);
    li.appendChild(document.createTextNode(candidate.value));
    ul.appendChild(li);
 }
 
 function whiteListRemoveItem()
 {
    var ul = document.getElementById("dynamicWhiteList");
    var candidate = document.getElementById("whiteListCandidate");
    var item = document.getElementById(candidate.value);
    ul.removeChild(item);

 }