import data from '../modules/data.js';

function linkData(){
  if(document.title == 'КБЗ'){
    let imgMass = [1,2,3,4,5,6,7,8,9];
    let divLink = document.getElementById('link');
    console.log(imgMass[0])
    
    for(let i=0;i<imgMass.length;i++){
      let imgAdres = `image${imgMass[i]}.png`;
      let imgLink = document.createElement('img');
      imgLink.src = `../image/KBZ/24/110/${imgAdres}`;
      divLink.appendChild(imgLink);
    }
  }
}

export {linkData};