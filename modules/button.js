import data from "./data.js";
import linkData from "./link.js";


let linkdiv = document.getElementById('link');
let but = document.createElement('button');
function test1(){
  for(let i=0;i<data.button.age24.name.length;i++){
    linkdiv.appendChild(but);
    but.textContent = 'месяц '+data.button.age24.name[i][1]+' неделя '+data.button.age24.name[i][0];
    let test = console.log('123')

    
  }
  
}
but.addEventListener('click', test1);

export default but;