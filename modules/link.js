import data from '../modules/data.js';
//первая неделя октября
function link110(){
  if(document.title == 'КБЗ'){
    let imgMass = [1,2,3,4,5,6,7,8,9];
    let divLink = document.getElementById('link');
    console.log(imgMass[0])
    let pLink = document.createElement('p');
    pLink.textContent = but110.textContent;
    divLink.appendChild(pLink);
    for(let i=0;i<imgMass.length;i++){
      let imgAdres = `image${imgMass[i]}.png`;
      let imgLink = document.createElement('img');
      imgLink.src = `../image/KBZ/24/110/${imgAdres}`;
      divLink.appendChild(imgLink);
    }
  }
}
// 2 неделя октября
function link210(){
  if(document.title == 'КБЗ'){
    let imgMass = [1,2,3,4,5,6,7,8,9];
    let divLink = document.getElementById('link');
    console.log(imgMass[0])
    let pLink = document.createElement('p');
    pLink.textContent = but210.textContent;
    divLink.appendChild(pLink)
    for(let i=0;i<imgMass.length;i++){
      let imgAdres = `image${imgMass[i]}.png`;
      let imgLink = document.createElement('img');
      imgLink.src = `../image/KBZ/24/210/${imgAdres}`;
      divLink.appendChild(imgLink);
    }
  }
}

// Очистка поля link
let butclr = document.getElementById('btnClear');
function btnClear1(){
  let divLink = document.getElementById('link');
  divLink.innerHTML = '';
}
butclr.addEventListener('click', btnClear1);
//---


let but110 = document.getElementById('btn110');
but110.addEventListener('click', link110);
let but210 = document.getElementById('btn210');
but210.addEventListener('click', link210);

export {but110, but210, butclr};