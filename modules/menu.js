import data from "./data.js";

function menu(){
  // Отрисовка меню на главной странице
  if(document.title == 'ICAFI'){
    let divMenu = document.getElementById('menu');
    divMenu.className = 'menu'
    let dataInfo = Object.keys(data.menu)
    let dataInfo2 = Object.values(data.menu)
    console.log(dataInfo2[0].name)
    let ulMenu = document.createElement('ul');
    let liglav = document.createElement('li');
    let aglav = document.createElement('a');
    aglav.href = dataInfo2[0].adres;
    aglav.textContent = dataInfo2[0].name
    liglav.appendChild(aglav);
    ulMenu.appendChild(liglav);
    for(let i=1;i<dataInfo.length;i++){
      let liMenu = document.createElement('li');
      let aMenu = document.createElement('a');
      aMenu.href = './pages/'+dataInfo2[i].adres
      aMenu.textContent = dataInfo2[i].name
      liMenu.appendChild(aMenu);
      ulMenu.appendChild(liMenu);
      divMenu.appendChild(ulMenu);  
    }
  }
  // отрисовка меню на второстепенных страницах
  else {
    let divMenu = document.getElementById('menu');
    divMenu.className = 'menu'
    let dataInfo = Object.keys(data.menu)
    let dataInfo2 = Object.values(data.menu)
    console.log(dataInfo2[0].name)
    let ulMenu = document.createElement('ul');
    let liglav = document.createElement('li');
    let aglav = document.createElement('a');
    aglav.href = '../'+dataInfo2[0].adres;
    aglav.textContent = dataInfo2[0].name;
    liglav.id = dataInfo2[0].adres;
    liglav.appendChild(aglav);
    ulMenu.appendChild(liglav);
    for(let i=1;i<dataInfo.length;i++){
      let liMenu = document.createElement('li');
      let aMenu = document.createElement('a');
      aMenu.href = '../pages/'+dataInfo2[i].adres
      aMenu.textContent = dataInfo2[i].name
      liMenu.appendChild(aMenu);
      ulMenu.appendChild(liMenu);
      divMenu.appendChild(ulMenu);  
    }
  }
}

export default menu;