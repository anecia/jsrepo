'use strict';

var naglowek = document.getElementById('main-header');
console.log(naglowek.innerText);

naglowek.innerText = "Tekst naglowka po zmianie";

naglowek.innerHtml = "Tekst jest za znacznikiem <span>span</span>";

naglowek.outerHtml = "<h2>Tekst ze znacznikiem <span> span </span></h2>";

naglowek.inner

document.getElementsByTagName('h2')[0].id  = "main-header-after-change";

document.getElementsByTagName('h2')[0].className  = "header-header default";

document.getElemenstByTagName('h2')[0].style.border = "2px red solid";