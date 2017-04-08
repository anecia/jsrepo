'strict mode';
 var parFirst = document.getElementById('parFirst');
var firstParId = parFirst.getAttributeNode('id');

console.log(firstParId);
console.log(parFirst.parentNode);

console.log(parFirst.childNodes[1]);
console.log(parFirst.children);

console.log(parFirst.firstChild);
console.log(parFirst.lastChild);

console.log(parFirst.firstElementChild);
console.log(parFirst.lastElementChild);

var link = parFirst.children[1];
console.log(link);

console.log(link.nextSibling); //br
console.log(link.previousSibling); // tekst enter

console.log(link.nextElementSibling); //br
console.log(link.previousElementSibling); //<p>


var parFirstNodes = parFirst.childNodes;
for (var i = 0; i<parFirstNodes.length; i++) {
    console.log('test');
    console.log(parFirstNodes[i]. nodeType);
    
    if(parFirstNodes[i].nodeType == 8) {
        console.log('W tym dokumencie jest komentarz ' + parFirstNodes[i]);
    }
    
}

var btn = document.createElement("button");
var btnText = document.createTextNode("click me");
var btnClass = document.createAttribute("class");

btnClass.value = 'buttonClass';
btn.appendChild(btnText);
btn.setAttributeNode(btnClass);

//dodac button miedzy linkami

console.log(parFirst.children[2]);

parFirst.insertBefore(btn, parFirst.children[2]);


//usuwanie wezlow - tzn class

var allLinks = document.getElementsByTagName('a');
console.log(allLinks);
for (var i = 0; i<allLinks.lenth; i++) {
    allLinks[i].removeAttribute('class');
}