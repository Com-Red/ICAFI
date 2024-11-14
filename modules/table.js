import data from "./data.js";

let divTable = document.getElementById('table');
let tableBlock = document.createElement('table');
let tableCaption = document.createElement('caption');
tableCaption.textContent = 'Таблица лидеров Ноябрь';
tableBlock.appendChild(tableCaption);
divTable.appendChild(tableBlock);
function tableLiderFun(){
  let tableLiderKey = Object.keys(data.tableLider.november2024);
  console.log(tableLiderKey.length)
  let tableLiderVel = Object.values(data.tableLider.november2024);
  console.log(tableLiderVel[0].kbz)

  // создаем шапку таблицы
  let nameStolbec = document.createElement('tr');
  let stolbecName = document.createElement('td');
  stolbecName.textContent = 'Ник игрока'
  let stolbecIcon = document.createElement('td');
  let stolbec1 = document.createElement('td');
  stolbec1.textContent = 'Неделя 1';
  let stolbec2 = document.createElement('td');
  stolbec2.textContent = 'Неделя 2';
  let stolbec3 = document.createElement('td');
  stolbec3.textContent = 'Неделя 3';
  let stolbec4 = document.createElement('td');
  stolbec4.textContent = 'Неделя 4';
  let stolbecItog = document.createElement('td');
  stolbecItog.textContent = 'Итог';
  let stolecOchki = document.createElement('td');
  stolecOchki.textContent = 'Очки';
  // добавляем все ячейки в строку шапки
  nameStolbec.appendChild(stolbecName);
  nameStolbec.appendChild(stolbecIcon);
  nameStolbec.appendChild(stolbec1);
  nameStolbec.appendChild(stolbec2);
  nameStolbec.appendChild(stolbec3);
  nameStolbec.appendChild(stolbec4);
  nameStolbec.appendChild(stolbecItog);
  nameStolbec.appendChild(stolecOchki);
  //добавляем строку шапки в таблицу
  tableBlock.appendChild(nameStolbec);

  // цикл создает строки
  for(let i=0;i<tableLiderKey.length;i++){
    let tr = document.createElement('tr');
    let tr2 = document.createElement('tr');
    let tableLider1 = tableLiderKey[i];
    let nameTable = tableLiderKey[i];
    let td1 = document.createElement('td');
    let tdsum = document.createElement('td');
    let tdsumV = document.createElement('td');
    td1.textContent = nameTable;
    td1.rowSpan = '2';
    tr.appendChild(td1)
    // Установки иконки КБЗ в столбец
    let tdMedal = document.createElement('td')
    let stolbecIconKBZ = document.createElement('img');
    stolbecIconKBZ.src = '../image/style/medal.png';
    tdMedal.appendChild(stolbecIconKBZ)
    tr.appendChild(tdMedal);
    // Установки иконки Взвода в столбец
    let tdVzvod = document.createElement('td');
    let stolbecIconVzvod = document.createElement('img');
    stolbecIconVzvod.src = '../image/style/mech.png';
    tdVzvod.appendChild(stolbecIconVzvod);
    tr2.appendChild(tdVzvod);
    // цикл создает ячейки в строках
    // ячейки КБЗ
    for(let i=0;i<4;i++){
      let td = document.createElement('td');
      td.textContent = data.tableLider.november2024[tableLider1].kbz[i]
      tr.appendChild(td)
    }
    // ячейки Взвода
    for(let i=0;i<4;i++){
      let td = document.createElement('td');
      td.textContent = data.tableLider.november2024[tableLider1].vzvod[i]
      tr2.appendChild(td)
    }
    // сумма
    let sumK = 0;
    let sumV = 0;
    //сумма очков КБЗ
    for(let i=0;i<4;i++){
          sumK += data.tableLider.november2024[tableLider1].kbz[i]
        }
    //сумма боев во взводе
    for(let i=0;i<4;i++){
          sumV += data.tableLider.november2024[tableLider1].vzvod[i]
        }
    tdsum.textContent = sumK;
    tdsum.id = 'itogTableK'+i
    tdsumV.textContent = sumV;
    tdsumV.id = 'itogTableV'+i;
    tableBlock.appendChild(tr)
    tableBlock.appendChild(tr2)
    tr.appendChild(tdsum)
    tr2.appendChild(tdsumV)
    // подсчет итоговых очков
    let vzvodSumm = Math.floor(sumV / 10);
    let stolbecItogOchki = vzvodSumm+sumK;
    let tdItogOchki = document.createElement('td');
    tdItogOchki.textContent = stolbecItogOchki;
    tdItogOchki.id = 'tdItogOchki'+i;
    tdItogOchki.className = 'tdItogOchki'
    tr.appendChild(tdItogOchki);
  }
}
tableLiderFun()


//--------------------------------

// Сам не особо понимаю что тут происходит и как работает, но работает
// пустой массив для наполнения данными
let topK = [];
// получение всех ключей объекта tableLider
let test2 = Object.keys(data.tableLider.november2024);
// цикл перебирает данные очков КБЗ
for(let i=0;i<test2.length;i++){
  // получение всех элементов с id itogTableK где i это порядковый номер выданный при создании элемента
  let test = document.getElementById('itogTableK'+i);
  // преобразование текстовой информации в числовую
  let test2 = Number(test.textContent);
  // наполнение массива topK числовой информацией из списка itogTableK
  topK.push(test2);
}
// вычисление максимального числа в массиве topK
const maxValueK = Math.max.apply(null, topK);

// аналогично предыдущему описанию
let topV = [];
let test3 = Object.keys(data.tableLider.november2024);
for(let i=0;i<test2.length;i++){
  let test = document.getElementById('itogTableV'+i);
  let test3 = Number(test.textContent);
  topV.push(test3);
}
const maxValueV = Math.max.apply(null, topV);

// поиск всех элементов с id itogTableK-V
let testid2 = document.querySelectorAll("[id^='itogTableK']")
let testid = document.querySelectorAll("[id^='itogTableV']")
// если один из элементов itogTableK совпадает с значением maxValueK то этому элементу присваивается класс
for(let i=0;i<testid2.length;i++)
  if(testid2[i].textContent == maxValueK){
    testid2[i].className = 'topK';
}
// если один из элементов itogTableV совпадает с значением maxValueV то этому элементу присваивается класс
for(let i=0;i<testid.length;i++)
  if(testid[i].textContent == maxValueV){
    testid[i].className = 'topV';
}

// Вычисление максимального количества очков объединенных
let massItog = [];
for(let i=0; i<test2.length; i++){
  let elemID = document.getElementById('tdItogOchki'+i);
  let elemNumber = Number(elemID.textContent);
  massItog.push(elemNumber);
}
const maxItog = Math.max.apply(null, massItog);

let elemIDSpisok = document.querySelectorAll("[id^='tdItogOchki']");
console.log(elemIDSpisok)

for(let i=0; i<elemIDSpisok.length;i++){
  if(elemIDSpisok[i].textContent == maxItog){
    elemIDSpisok[i].className = 'tdItogOchki2'
  }
}