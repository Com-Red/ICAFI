import data from "./data.js";

let divTable = document.getElementById('table');
let tableBlock = document.createElement('table');
let tableCaption = document.createElement('caption');
tableCaption.textContent = 'Таблица лидеров Октябрь';
tableBlock.appendChild(tableCaption);
divTable.appendChild(tableBlock);
function tableLiderFun(){
  let tableLiderKey = Object.keys(data.tableLider);
  console.log(tableLiderKey.length)
  let tableLiderVel = Object.values(data.tableLider);
  console.log(tableLiderVel[0].kbz)
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
    // цикл создает ячейки в строках
    // ячейки КБЗ
    for(let i=0;i<4;i++){
      let td = document.createElement('td');
      td.textContent = data.tableLider[tableLider1].kbz[i]
      tr.appendChild(td)
    }
    // ячейки Взвода
    for(let i=0;i<4;i++){
      let td = document.createElement('td');
      td.textContent = data.tableLider[tableLider1].vzvod[i]
      tr2.appendChild(td)
    }
    // сумма
    let sumK = 0;
    let sumV = 0;
    //сумма очков КБЗ
    for(let i=0;i<4;i++){
          sumK += data.tableLider[tableLider1].kbz[i]
        }
        //сумма боев во взводе
    for(let i=0;i<4;i++){
          sumV += data.tableLider[tableLider1].vzvod[i]
        }
    tdsum.textContent = sumK;
    tdsum.id = 'itogTableK'+i
    tdsumV.textContent = sumV;
    tdsumV.id = 'itogTableV'+i;
    tableBlock.appendChild(tr)
    tableBlock.appendChild(tr2)
    tr.appendChild(tdsum)
    tr2.appendChild(tdsumV)
  }
}
tableLiderFun()


//--------------------------------
let topK = [];
let test2 = Object.keys(data.tableLider);
for(let i=0;i<test2.length;i++){
  let test = document.getElementById('itogTableK'+i);
  let test2 = Number(test.textContent);
  topK.push(test2);
}
const maxValueK = Math.max.apply(null, topK);
console.log(maxValueK)
console.log(topK)

let topV = [];
let test3 = Object.keys(data.tableLider);
for(let i=0;i<test2.length;i++){
  let test = document.getElementById('itogTableV'+i);
  let test3 = Number(test.textContent);
  topV.push(test3);
}
const maxValueV = Math.max.apply(null, topV);
console.log(maxValueV)
console.log(topV)

let testid = document.querySelectorAll("[id^='itogTableV']")
console.log(testid[0])