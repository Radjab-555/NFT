var colls = document.getElementsByClassName('collapsible');
var i;
   
for(let coll of colls) {
    coll.onclick = function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        }else{
            content.style.maxHeight = content.scrollHeight + "px"; 
        }
    };
}
console.log(colls);