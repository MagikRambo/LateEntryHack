const formElem = document.querySelector('form');
formElem.addEventListener('submit', (e) => {
  // on form submission, prevent default
  e.preventDefault();
  let candidate = formElem.elements.whitelistAdd.value;
   var li = document.createElement("li");
  li.setAttribute('id', candidate);
  li.appendChild(document.createTextNode(candidate));
  var ul = document.querySelector('ul');
  ul.appendChild(li);
  }
  );