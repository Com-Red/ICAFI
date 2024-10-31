import data from "./data.js";

function socSet (){
    let socDiv = document.getElementById('socSet');
    let socSpisok = Object.values(data.socSet);
    for(let i = 0;i<socSpisok.length;i++){
        let socA = document.createElement('a');
        let socImg = document.createElement('img');
        socA.href = socSpisok[i].href;
        if(document.title == 'ICAFI'){
            socImg.src = `./image/style/${socSpisok[i].src}`;
        }
        else{
            socImg.src = `../image/style/${socSpisok[i].src}`;
        }
        socA.appendChild(socImg);
        socDiv.appendChild(socA);
    }
    
}

export default socSet;