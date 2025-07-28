
// To Do:
// Desenho das escalas
// Indicados de cordas a não serem tocadas

var colorNotes = "#CDFF75";
var contourColorNotes = "#DFFF00";
var color01 = "#58D68D";
var lineColor = "white";

const notes = [["E", "F", "F#", "G", "G#", "A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B", "C", "C#", "D", "D#"],
               ["B", "C", "C#","D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B", "C", "C#","D", "D#", "E", "F", "F#", "G", "G#", "A", "A#"],
               ["G", "G#", "A", "A#", "B", "C", "C#","D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B", "C", "C#","D", "D#", "E", "F", "F#"],
               ["D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B", "C", "C#","D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B", "C", "C#"],
               ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"],
               ["E", "F", "F#", "G", "G#", "A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B", "C", "C#", "D", "D#"]];

const fd = [869.5, 847, 800, 753, 709, 665, 622, 581.5, 541.5, 503, 464.5, 427.5, 391.2, 354, 320, 284.8, 250.2, 217.5, 184, 151.7, 120.4, 89.2, 59, 29.1];

const sd = [[90.3], [76.1], [61.9], [47.7], [33.5], [19.3]];

// valores de y são a sequência dos índices (0, 1, 2, ...) representando as cordas e que serão buscados em fd
// valores de x são os valores de cada índice representando os trastes e que serão buscados em sd1, sd2, ...
chordDict = {
    // Major Triads
    "CMaj": [[0,1,0,2,3], [3,5,5,5,3], [8,8,9,10,10,8], [12,13,12,10]],
    "C#Maj": [[1,2,1,3,4], [4,6,6,6,4], [9,9,10,11,11,9], [13,14,13,11]],
    "DMaj" : [[2, 3, 2, 0], [5,7,7,7,5], [10,10,11,12,12,10], [14,15,14,12]],
    "D#Maj" : [[3, 4, 3, 1], [6,8,8,8,6], [11,11,12,13,13,11], [15,16,15,13]],
    "EMaj": [[0,0,1,2,2,0], [4,5,4,2], [4,5,4,6,7], [7,9,9,9,7], [12,12,13,14,14,12]],
    "FMaj": [[1,1,2,3,3,1], [5,6,5,3], [5,6,5,7,8], [8,10,10,10,8], [13,13,14,15,15,13]],
    "F#Maj": [[2,2,3,4,4,2], [6,7,6,4], [6,7,6,8,9], [9,11,11,11,9], [14,14,15,16,16,14]],
    "GMaj" : [[3,3,0,0,2,3], [7,8,7,5], [7,8,7,9,10], [10,12,12,12,10], [15,15,16,17,17,15]],
    "G#Maj" : [[4,4,5,6,6,4], [8,9,8,6], [8,9,8,10,11], [11,13,13,13,11], [16,16,17,18,18,16]],
    "AMaj": [[0,2,2,2,0], [5,5,6,7,7,5], [9,10,9,7], [9,10,9,11,12], [12,14,14,14,12], [17,17,18,19,19,17]],
    "A#Maj": [[1,3,3,3,1], [6,6,7,8,8,6], [10,11,10,8], [10,11,10,12,13], [13,15,15,15,13], [18,18,19,20,20,18]],
    "BMaj": [[2,4,4,4,2], [7,7,8,9,9,7], [11,12,11,9], [11,12,11,13,14], [14,16,16,16,14], [19,19,20,21,21,19]],
    // Minor Triads
    "Cm": [[3,4,5,5,3], [9,9,10,11,11,9], [13,14,13,11], [13,13,14,13,15,16], [16,16,18,18,16], [21,21,22,23,23,21]],
    "C#m": [[4,5,6,6,4], [10,10,12,12,12,10], [14,15,14,12], [14,14,15,14,16,17], [17,17,19,19,18], [22,22,23,24,24,22]],
    "Dm": [[1,3,2,0], [5,6,7,7,5], [10,10,10,12,12,10], [13,15,14,12]],
    "D#m": [[2,4,3,1], [6,7,8,8,6], [11,11,11,13,13,11], [14,16,15,13]],
    "Em": [[0,0,0,2,2,0], [3,5,4,2], [7,8,9,9,7], [12,12,12,14,14,12], [15,17,16,14]],
    "Fm": [[1,1,1,3,3,1], [4,6,5,3], [8,9,10,10,8], [13,13,13,15,15,13], [16,18,17,15]],
    "F#m": [[2,2,2,4,4,2], [5,7,6,4], [9,10,11,11,9], [14,14,14,16,16,14], [17,19,18,16]],
    "Gm": [[3,3,3,5,5,3], [6,8,7,5], [10,11,12,12,10], [15,15,15,17,17,15], [18,20,19,17]],
    "G#m": [[4,4,4,6,6,4], [7,9,8,6], [11,12,13,13,11], [16,16,16,18,18,16], [19,21,20,18]],
    "Am": [[0,1,2,2,0], [5,5,5,7,7,5], [7,10,9,7], [12,13,14,14,12], [17,17,17,19,19,17]],
    "A#m": [[1,2,3,3,1], [6,6,6,8,8,6], [8,11,10,8], [13,14,15,15,13], [18,18,18,20,20,18]],
    "Bm": [[2,3,4,4,2], [7,7,7,9,9,7], [9,12,11,9], [14,15,16,16,14], [19,19,19,21,21,19]],
    // "Major 7"
    "CMaj7": [[0,0,0,2,3], [0,1,4,5], [3,1,4,2], [3,5,4,5,3], [7,5,5,5,0,8], [7,8,9,10], [0,8,9,9,0,8]],
    // Sus4,
    "Dsus4":[[3,3,2,0], [5,5,7,7,5]]
}

scaleDict = {
    "CMaj": ["C", "D", "E", "F", "G", "A", "B"]
}

//  MANTÉM APARÊNCIA DE BOTÃO "CLICADO" ----------
// Aparência dos botões de notas (C, D, F, G, e A)
const btnList = document.querySelectorAll('.btnNote');
const btnList3 = document.querySelector('.btnSharp');
const btnListNotSharp = document.querySelectorAll('.btnNotSharp');

btnList.forEach(btnEl => {
    btnEl.addEventListener('click', () => {
        document.querySelector('.btnNotSharp-clicked')?.classList.remove('btnNotSharp-clicked');
        document.querySelector('.btnNote-clicked')?.classList.remove('btnNote-clicked');
        btnEl.classList.add('btnNote-clicked');
        btnList3.classList.remove('btnNotSharp-disabled'); // o problema está aqui
        btnList3.classList.add('btnSharp');
        btnList3.removeAttribute('disabled');
        console.log(btnEl)
    });
});

// Aparência dos botões de notas (E, B)
btnListNotSharp.forEach(btnElNS => {
    btnElNS.addEventListener('click', () => {
        document.querySelector('.btnNotSharp-clicked')?.classList.remove('btnNotSharp-clicked');
        document.querySelector('.btnNote-clicked')?.classList.remove('btnNote-clicked');
        btnElNS.classList.add('btnNotSharp-clicked');
        btnList3.classList.remove('btnSharp');
        btnList3.classList.add('btnNotSharp-disabled');
        btnList3.setAttribute('disabled', '');
        console.log(btnList3)
    });
});

// Esconde os botões E e B (não tem sustenidos)
btnList3.addEventListener('click', () => {
    
    if(sharp == ""){
        btnList3.classList.add('btnSharp-clicked');
        btnListNotSharp.forEach(btnElNS => {
            btnElNS.classList.add('btnNotSharp-disabled');
            btnElNS.setAttribute('disabled', '');
        });
        sharp = "#"
        var con = listNote[0].concat(sharp).concat(listType[0]);
        createChord(con);
        return;
    }

    if(sharp == "#"){
        btnList3.classList.remove('btnSharp-clicked');
        btnListNotSharp.forEach(btnElNS => {
            btnElNS.classList.remove('btnNotSharp-disabled');
            btnElNS.removeAttribute('disabled');
        }); 
        
        sharp = "";
        var con = listNote[0].concat(sharp).concat(listType[0]);
        createChord(con);
    }
});

// Altera a aparência dos botões de acordo com a tecla do teclado pressionada
function btnOnKeyDown(key){
    const btnList = document.querySelectorAll('.btnNote, .btnNotSharp');
    document.querySelector('.btnNote-clicked')?.classList.remove('btnNote-clicked');
    btnList[key].classList.add('btnNote-clicked')
    console.log(btnList)
}

// Altera a aparência dos botões de tipos de acordes
const btnList2 = document.querySelectorAll('.btnType');

btnList2.forEach(btnEl2 => {
    btnEl2.addEventListener('click', () => {
        document.querySelector('.btnType-clicked')?.classList.remove('btnType-clicked');
        btnEl2.classList.add('btnType-clicked');
    });
});

// CONCATENA VALORES DE NOTAS E TIPOS DE ACORDES ----------
// Acrescenta o valor da nota ao araray listNote
let listNote = ["C"];
let listType = ["Maj"];
let sharp = "";
let keysEB = false;
let listVari = [];

let acorde = ["C", "Maj"]; // Faz com que o acorde de CMaj seja o primeiro a aparecer se for clicado o tipo de acorde



function receiveNote(val){
    listNote.length = 0;
    listNote.push(val);
    var con = listNote[0].concat(sharp).concat(listType[0]);
    createChord(con);
}

// Acrescenta o valor do tipo de acorde ao array listType
function receiveType(val){
    if(listType.length > 0){
        listType.length = 0;
        listType.push(val);
        var conc = listNote[0].concat(sharp).concat(listType[0]);
        createChord(conc);
    }else{
        listType.push(val);
        var conc = listNote[0].concat(listType[0]);
        createChord(conc);
    };
}

function receiveVari(val){
    listVari.length = 0;
    listVari.push(val);
    var conc = listNote[0].concat(listType[0]).concat(listVari[0]);
    createChord(conc);
}

let sequence = 0;

function receiveSeq(val){
    val = Number(val); // returns the number "val" which is a string
    sequence = sequence + val;
    if(listVari.length == 0){
        var con = listNote[0].concat(sharp).concat(listType[0]);
        createChord(con);
    }
    if(listVari.length > 0){
        console.log("ok")
        var con = listNote[0].concat(sharp).concat(listType[0]).concat(listVari[0]);
        createChord(con);
    }
    createChord(con);
    console.log(val);
}

// Usa o teclado para mudar posições
window.onkeydown = function(event) {
    if (event.keyCode == 37) {
        receiveSeq(1)
    }if (event.keyCode == 39) {
        receiveSeq(-1)
    };
    if (event.keyCode == 67) {
        btnOnKeyDown(0)
        receiveNote("C")  
    };
    if (event.keyCode == 68) {
        btnOnKeyDown(1)
        receiveNote("D")  
    };
    if (event.keyCode == 69) {
        btnOnKeyDown(2)
        receiveNote("E")  
    };
    if (event.keyCode == 70) {
        btnOnKeyDown(3)
        receiveNote("F")  
    };
    if (event.keyCode == 71) {
        btnOnKeyDown(4)
        receiveNote("G")  
    };
    if (event.keyCode == 65) {
        btnOnKeyDown(5)
        receiveNote("A")  
    };
    if (event.keyCode == 66) {
        btnOnKeyDown(6)
        receiveNote("B")  
    };
};

function createScale(scale){
    let coordinates = [];
    let newScale = [];

    for(s in scaleDict){
        if(scale === s){
            newScale = scaleDict[s];
        }
    }
}

createScale("C");

console.log(newScale);

// FUNÇÃO DE "DESENHO"  DO ACORDE ----------
function createChord(chord){
    console.log(listNote)
    console.log(listType)
    console.log(listVari)
    console.log(chord)
    document.getElementById("display").innerHTML = chord;
    let octave = 0;
    let seventh = 0;
    let fifth = 0;
    let thirdMajor = 0;
    let thirdMinor = 0;
    let finger = [];
    let coordinates = [];
    let coordinatesPestana = [];
    let newChord = [];
    let chordName = [];
    let chordMainNote = [];
    var chordToUpper = chord.toUpperCase();
    // var firstLetter = Array.from(chordToUpper)[0];
    var firstLetter = listNote[0].concat(sharp)

    var svgNS = "http://www.w3.org/2000/svg";
    var fretboard = document.getElementById("fretboard");

    var el = document.getElementById("fretboard"); // https://stackoverflow.com/questions/29398277/svg-clear-groupg
    while (el.firstChild) {
    el.removeChild(el.firstChild);
    };

    for(const ch in chordDict){
        if(chord === ch){
            newChord = chordDict[ch][sequence];
            chordName = ch;
        }
    };

    cont = 0;
    for(const i of notes[0]){
        if(i === firstLetter){
            thirdMajor = notes[0].at(cont+4)
            thirdMinor = notes[0].at(cont+3)
            break
        }
        cont ++;
    };

    cont = 0;
    var confPestana = false;
    var confFinger = false;
    let pestana = [newChord[0]];
    // Insere os valores das coordenadas no array "coordinates"
    for(const n of newChord){
            var ct= [];
            var cp = [];
            ct.push(fd[n]);
            ct.push(sd[cont].at(0));
            ct.push(10);
            ct.push(sd[cont].at(0));
            chordMainNote.push(notes[cont].at(n));
            coordinates.push(ct);
            cont ++;
            console.log(chordMainNote)
            // PESTANA ---------
            // Para que o acorde contenha pestana apenas o dedo 1 poderá ser repetido
            if(n < pestana[0]){
                confFinger = true;
            }

            if(pestana[0] == n & pestana[0] != 0){
                pestana.push(n);
                coordinatesPestana.push(ct);
            }

            if(pestana.length > 2 & confFinger === false){
                confPestana = true;
            } else {
                confPestana = false;
            }
        };

    var ini = [[833, 230.6], [833, 218.4], [833, 206,2], [833, 194.0], [833, 181.8], [833, 169.6]];

    // for(const i in ini){
    //     let x = ini[i].at(0) * 2; // * 2 pq a imagem do canvas foi ajustada 2x
    //     let y = ini[i].at(1) * 2;
    //     // Desenha um "x" em todas as cordas
    //     var text = document.createElementNS(svgNS, "text"); //https://stackoverflow.com/questions/9281199/adding-text-to-svg-document-in-javascript
    //     text.setAttributeNS(null, 'x', x);
    //     text.setAttributeNS(null, 'y', y);
    //     text.setAttributeNS(null, "font-size", "18");
    //     text.setAttributeNS(null, "text-anchor", "middle");
    //     text.setAttributeNS(null, "dominant-baseline", "central");
    //     text.setAttributeNS(null, "font-family", "monospace");
    //     text.setAttributeNS(null, "fill", "#515A5A")
    //     text.textContent = "X";
    //     fretboard.appendChild(text);
    // }

    // x e y definem as coordenadas do início da linha
    let x = coordinatesPestana[0].at(0) * 2; 
    let y = coordinatesPestana[0].at(1) * 2;
    // x2 e y2 definem o final da linha
    let x2 = coordinatesPestana[coordinatesPestana.length - 1].at(0) * 2; 
    let y2 = coordinatesPestana[coordinatesPestana.length - 1].at(1) * 2; 

    //Linha da pestana (indica a corda a ser tocada)
    if(confPestana == true){
        var line2 = document.createElementNS(svgNS, "line");
        line2.setAttributeNS(null, 'id','line2');
        line2.setAttributeNS(null, 'x1', x);
        line2.setAttributeNS(null, 'y1', y);
        line2.setAttributeNS(null, 'x2', x2);
        line2.setAttributeNS(null, 'y2', y2);
        line2.setAttributeNS(null, "stroke", colorNotes)
        line2.setAttributeNS(null, "stroke-width", "20");

        fretboard.appendChild(line2);
    }
    
    for(i in coordinates){
        
        var auxChordNote = chordMainNote[i];
        // var auxChordNote = listNote[0].concat(sharp);
        // console.log(chordToUpper)
        // console.log(chordMainNote)
        let x = coordinates[i].at(0) * 2; // * 2 pq a imagem do canvas foi ajustada 2x
        let y = coordinates[i].at(1) * 2;
        let ini_x = coordinates[i].at(2) * 2; // define o inicio da corda para desenho das linhas
        let ini_y = coordinates[i].at(3) * 2;

        //Linha da corda (indica a corda a ser tocada)
        var line = document.createElementNS(svgNS, "line");
        line.setAttributeNS(null, 'id','line2');
        line.setAttributeNS(null, 'x1', x);
        line.setAttributeNS(null, 'y1', y);
        line.setAttributeNS(null, 'x2', ini_x);
        line.setAttributeNS(null, 'y2', ini_y);
        line.setAttributeNS(null, "stroke", lineColor)
        line.setAttributeNS(null, "stroke-width", "0.7");

        // Círculo da nota principal do acorde
        var circle2 = document.createElementNS(svgNS, "circle");
        circle2.setAttributeNS(null, "cx", x);
        circle2.setAttributeNS(null, "cy", y);
        circle2.setAttributeNS(null, "r", 7);
        circle2.setAttributeNS(null, "fill", "none");
        circle2.setAttributeNS(null, "stroke", "black"); //00CCFF
        circle2.setAttributeNS(null, "stroke-width", "2");

        // Contorno da nota
        var circle = document.createElementNS(svgNS, "circle");
        circle.setAttributeNS(null, "cx", x);
        circle.setAttributeNS(null, "cy", y);
        circle.setAttributeNS(null, "r", 10);
        circle.setAttributeNS(null, "fill", colorNotes);
        circle.setAttributeNS(null, "stroke", "none"); "#82E0AA"
        circle.setAttributeNS(null, "stroke-width", "1");

        var circleThirdMajor = document.createElementNS(svgNS, "circle");
        circleThirdMajor.setAttributeNS(null, "cx", x);
        circleThirdMajor.setAttributeNS(null, "cy", y);
        circleThirdMajor.setAttributeNS(null, "r", 6);
        circleThirdMajor.setAttributeNS(null, "fill", "black");
        circleThirdMajor.setAttributeNS(null, "stroke", "none"); "#82E0AA"
        circleThirdMajor.setAttributeNS(null, "stroke-width", "1");

        var circleThirdMinor = document.createElementNS(svgNS, "circle");
        circleThirdMinor.setAttributeNS(null, "cx", x);
        circleThirdMinor.setAttributeNS(null, "cy", y);
        circleThirdMinor.setAttributeNS(null, "r", 6);
        circleThirdMinor.setAttributeNS(null, "fill", "#34495E");
        circleThirdMinor.setAttributeNS(null, "stroke", "none"); "#82E0AA"
        circleThirdMinor.setAttributeNS(null, "stroke-width", "1");

        // Texto indicador do dedo (1, 2, 3, 4)
        var text = document.createElementNS(svgNS, "text"); //https://stackoverflow.com/questions/9281199/adding-text-to-svg-document-in-javascript
        text.setAttributeNS(null, 'x', x);
        text.setAttributeNS(null, 'y', y);
        text.setAttributeNS(null, "font-size", "12");
        text.setAttributeNS(null, "text-anchor", "middle");
        text.setAttributeNS(null, "dominant-baseline", "central");
        text.setAttributeNS(null, "font-family", "monospace");
        text.setAttributeNS(null, "fill", "#51-5A5A")
        text.textContent = finger[i];
        
        fretboard.appendChild(line);
        
        fretboard.appendChild(circle);
        // fretboard.appendChild(text);
        //console.log(circle);

        if(auxChordNote === thirdMajor){
            fretboard.appendChild(circleThirdMajor);
        }

        if(auxChordNote === thirdMinor){
            fretboard.appendChild(circleThirdMinor);
        }

        if(auxChordNote === listNote[0].concat(sharp)){
            fretboard.appendChild(circle2);
        }
    }     
}

