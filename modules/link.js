let test = document.getElementById('test1');
let but = document.getElementById('buttest');
let ptest = document.getElementById('pInfo');
let selectWeek = document.getElementById('week');
let selectAge = document.getElementById('age');
let selectMonth = document.getElementById('month');


let dataKBZ = [
  {
    age:[24,25],
    title:[2024,2025]
  },
  [1,'Январь',2,'Февраль',3,'Март',4,'Апрель',5,'Май',6,'Июнь',7,'Июль',8,'Август',9,'Сентябрь',10,'Октябрь',11,'Ноябрь',12,'Декабрь',],
  [1,'Первая',2,'Вторая',3,'Третья',4,'Четвертая']
]
// Получение текущей даты для установки списков по умолчанию
let testtest = new Date()
console.log(testtest.getFullYear())

// Создает список в меню выбора года
let selAgeBlock = document.getElementById('age');
for(let i=0; i<dataKBZ[0].age.length; i++){
  let ageSelect = document.createElement('option');
  ageSelect.value = dataKBZ[0].age[i];
  ageSelect.textContent = dataKBZ[0].title[i];
  selAgeBlock.appendChild(ageSelect);
}
// Устанавливает начальное значение списка по текущему году
let testS = selAgeBlock.options[1]
testS.setAttribute('selected', 'selected')

// Создает список в меню выбора месяца
let selMonBlock = document.getElementById('month');

for(let i=0; i<dataKBZ[1].length; i+=2){
  let monSelect = document.createElement('option');
  monSelect.value = dataKBZ[1][i];
  monSelect.textContent = dataKBZ[1][i+1];
  selMonBlock.appendChild(monSelect)
}

// Создает список в меню выбора недели
let selWeekBlock = document.getElementById('week');

for(let i=0; i<dataKBZ[2].length; i+=2){
  let weekSelect = document.createElement('option');
  weekSelect.value = dataKBZ[2][i];
  weekSelect.textContent = dataKBZ[2][i+1];
  selWeekBlock.appendChild(weekSelect)
}


// Вывод скринов отчета КБЗ
function link(){
    //находим див линк
    let divLink = document.getElementById('link');
    //чистим див линк
    divLink.innerHTML = '';
    //получаем значения элементов год, месяц, неделя 
    let selectedAge = selectAge.options[selectAge.selectedIndex].value;
    let selectedWeek = selectWeek.options[selectWeek.selectedIndex].value;
    let selectedMonth = selectMonth.options[selectMonth.selectedIndex].value;
    let imgMass = [1,2,3,4,5,6];
  
    //Вывод скринов в поле link    
    for(let i=0;i<imgMass.length;i++){
      let imgAdres = `image${imgMass[i]}.jpg`;
      let imgLink = document.createElement('img');
      imgLink.src = `../image/KBZ/${selectedAge}/${selectedWeek}${selectedMonth}/${imgAdres}`;
      divLink.appendChild(imgLink);
  }
}

but.addEventListener('click', link);