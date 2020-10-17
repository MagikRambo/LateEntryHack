//add some functionality as event listeners

var collapsible = document.getElementsByClassName("whitelist");
function hideDropdown(){
    for(i = 0; i < collapsible.length; i++){
        collapsible[i].addEventListener('click', function() {
            this.classList.toggle('active');
            var content = this.nextElementSibling;
            if (content.style.display === 'block') {
                content.style.display = 'none';
            }
            else{
                content.style.display = 'block';
            }
        });
    }
}