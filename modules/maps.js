import data from "./data.js";
// сортировка массива с данными по алфавиту
let test = data.maps.sort()
// находим основной блок
let mapsDiv = document.getElementById('mapsDiv');

function dataMaps(){
  for(let i=0; i<data.maps.length; i++){
    //создаем необходимые елементы
    let detailsBlock = document.createElement('details');
    let summaryBlock = document.createElement('summary');
    let imgBlock = document.createElement('img');
    let imgBlockS = document.createElement('img');
    let hBlock = document.createElement('h5');
    // наполняем элементы информацией
    hBlock.textContent = data.maps[i][0];
    imgBlock.src = data.maps[i][1];
    imgBlock.className = 'detailsImg'
    imgBlockS.src = data.maps[i][1];
    //устанавливаем элементы в основной блок
    summaryBlock.appendChild(hBlock);
    summaryBlock.appendChild(imgBlockS);
    detailsBlock.appendChild(summaryBlock);
    detailsBlock.appendChild(imgBlock)
    mapsDiv.appendChild(detailsBlock);
  }
}
dataMaps()