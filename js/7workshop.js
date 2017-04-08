//var mainHeader = document.getElementById('main-header');
//
//
//document.onkeydown = function(e){
//console.log(e.keyCode);
//
//
//    switch (e.keyCode) {
//        case 37:
//            mainHeader.style.color = "red";
//            break;
//        case 38:
//           mainHeader.style.color = "yellow";
//            break;
//        case 39:
//            mainHeader.style.color = "blue";
//            break;
//        case 40:
//         mainHeader.style.color = "green";
//            break;
//            default
//    }
//}



//{
//    
//   var parSecond = document.getElementById('parSecond');
//function changeBackground() {
//    parSecond.style.backgroundColor = "#00ff00";
//}
//


//
//
//var btn = document.createElement("button");
//var btnText = document.createTextNode("click me");
//var btnClass = document.createAttribute("class");
//
//btnClass.value = 'buttonClass';
//btn.appendChild(btnText);
//btn.setAttributeNode(btnClass);
//
//var parThird = document.getElementById('parThird');
//
//parThird.insertBefore(btn, parThird.children[0]);
//
//
//
//btn.onclick = buttonBackgroundChange;
//console.log(btn);
//
//function buttonBackgroundChange(e) {
//   
//        
//         if (e.type == 'click') {
//       parThird.children[1].style.backgroundColor = "red";
//        parThird.children[2].style.backgroundColor = "yellow";
//
//         }
//    
//                          
//}

function pobierzImie(event){
//console.log(event);
    event.preventDefault();
  

console.log(document.getElementsByName('fname')[0].value);
console.log(document.getElementsByName('lname')[0].value);
}

