let test = document.getElementById('test1');
let but = document.getElementById('buttest');
let ptest = document.getElementById('pInfo');
let selectElement = document.getElementById('week');
let selectAge = document.getElementById('age');


// Вывод скринов отчета КБЗ
function link(){
    let divLink = document.getElementById('link');
    divLink.innerHTML = '';
    let selectedAge = selectAge.options[selectAge.selectedIndex].value;
    let imgMass = [1,2,3,4,5,6,7,8,9];
    let selectedValue = selectElement.options[selectElement.selectedIndex].value;
    console.log(imgMass[0])
    //Вывод скринов в поле link    
    for(let i=0;i<imgMass.length;i++){
      let imgAdres = `image${imgMass[i]}.jpg`;
      let imgLink = document.createElement('img');
      imgLink.src = `../image/KBZ/${selectedAge}/${selectedValue}/${imgAdres}`;
      divLink.appendChild(imgLink);
  }
}

but.addEventListener('click', link);