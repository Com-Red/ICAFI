import data from "./data.js";

function menu(){
  if(document.title == 'ICAFI'){
    let divMenu = document.getElementById('menu');
    divMenu.className = 'menu'
    let dataInfo = Object.keys(data.menu)
    let dataInfo2 = Object.values(data.menu)
    console.log(dataInfo2[0].name)
    let ulMenu = document.createElement('ul');
    for(let i=0;i<dataInfo.length;i++){
      
      let liMenu = document.createElement('li');
      let aMenu = document.createElement('a');
      aMenu.href = './pages/'+dataInfo2[i].adres
      aMenu.textContent = dataInfo2[i].name
      liMenu.appendChild(aMenu);
      ulMenu.appendChild(liMenu);
      divMenu.appendChild(ulMenu);  
    }
  }
  else {
    let divMenu = document.getElementById('menu');
    divMenu.className = 'menu'
    let dataInfo = Object.keys(data.menu)
    let dataInfo2 = Object.values(data.menu)
    console.log(dataInfo2[0].name)
    let ulMenu = document.createElement('ul');
    for(let i=0;i<dataInfo.length;i++){
      
      let liMenu = document.createElement('li');
      let aMenu = document.createElement('a');
      aMenu.href = '../'+dataInfo2[i].adres
      aMenu.textContent = dataInfo2[i].name
      liMenu.appendChild(aMenu);
      ulMenu.appendChild(liMenu);
      divMenu.appendChild(ulMenu);  
    }
  }
}

export default menu;