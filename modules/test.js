let test = document.getElementById('test1');
let but = document.getElementById('buttest');
let ptest = document.getElementById('ptest');


let selectElement = document.getElementById('mySelect');




function test3(){
 let selectedValue = selectElement.options[selectElement.selectedIndex].text;
  console.log(selectedValue)
}
but.addEventListener('click', test3);


