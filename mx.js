
const fd = [833, 806, 748, 694, 643, 595, 550, 507, 467, 429, 393, 359, 328.5, 298, 269.5, 243.5, 217.5, 193.2, 171.3, 150, 130, 111, 93.2, 76];

const sd6 = [169.6, 169.2, 168.4, 167.7, 167.0, 166.3, 165.7, 165.1, 164.6, 164.0, 163.5, 163.1, 162.7, 162.2, 161.9, 161.5, 161.1, 160.8, 160.5, 160.2, 159.9, 159.7, 159.4, 159.2];
const sd5 = [181.8, 181.6, 181.1, 180.6, 180.2, 179.8, 179.4, 179.0, 178.7, 178.4, 178.1, 177.8, 177.5, 177.3, 177.0, 176.8, 176.6, 176.4, 176.2, 176.0, 175.9, 175.7, 175.5, 175.4];
const sd4 = [194.0, 193.9, 193.7, 193.6, 193.4, 193.2, 193.1, 193.0, 192.8, 192.7, 192.6, 192.5, 192.4, 192.3, 192.2, 192.1, 192.0, 192.0, 191.9, 191.8, 191.8, 191.7, 191.7, 191.6];
const sd3 = [206.2, 206.3, 206.4, 206.5, 206.6, 206.7, 206.8, 206.9, 207.0, 207.1, 207.1, 207.2, 207.3, 207.3, 207.4, 207.4, 207.5, 207.6, 207.6, 207.6, 207.7, 207.7, 207.8, 207.8];
const sd2 = [218.4, 218.6, 219.0, 219.4, 219.8, 220.2, 220.5, 220.8, 221.1, 221.4, 221.7, 221.9, 222.1, 222.4, 222.6, 222.8, 223.0, 223.1, 223.3, 223.5, 223.6, 223.7, 223.9, 224.0];
const sd1 = [230.6, 230.9, 231.7, 232.4, 233.0, 233.6, 234.2, 234.7, 235.2, 235.7, 236.2, 236.6, 237.0, 237.4, 237.7, 238.1, 238.4, 238.7, 239.0, 239.3, 239.5, 239.8, 240.0, 240.2];

const no6 = ["E", "F", "F#", "G", "G#", "A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B", "C", "C#", "D", "D#"];
const no5 = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];
const no4 = ["D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B", "C", "C#","D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B", "C", "C#"];
const no3 = ["G", "G#", "A", "A#", "B", "C", "C#","D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B", "C", "C#","D", "D#", "E", "F", "F#"];
const no2 = ["B", "C", "C#","D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B", "C", "C#","D", "D#", "E", "F", "F#", "G", "G#", "A", "A#"];
const no1 = ["E", "F", "F#", "G", "G#", "A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B", "C", "C#", "D", "D#"];

var color01 = "#58D68D"//#CCFF99"//"#DAF7A6"//rgb(74, 255, 222);

notes={
// zero
    "x6":[fd[0], sd6[0]], "x5":[fd[0], sd5[0]], "x4":[fd[0], sd4[0]], "x3":[fd[0], sd3[0]], "x2":[fd[0], sd2[0]], "x1":[fd[0], sd1[0]],
// 1st fret
    "f0":[fd[1], sd6[1]], "as0":[fd[1], sd5[1]], "ds1":[fd[1], sd4[1]], "gs1":[fd[1], sd3[1]], "c2":[fd[1], sd2[1]], "f2":[fd[1], sd1[1]],
// 2nd fret
    "fs0":[fd[2], sd6[2]], "b0":[fd[2], sd5[2]], "e1":[fd[2], sd4[2]], "a1":[fd[2], sd3[2]], "cs2":[fd[2], sd2[2]], "fs2":[fd[2], sd1[1]],
// 3rd fret
    "g0":[fd[3], sd6[3]], "c1":[fd[3], sd5[3]],"f1":[fd[3], sd4[3]], "as1":[fd[3], sd3[3]], "d2":[fd[3], sd2[2]], "g2":[fd[3], sd1[1]],
// 4th fret
    "gs0":[fd[4], sd6[4]], "cs1":[fd[4], sd5[4]], "fs1":[fd[4], sd4[4]], "b1":[fd[4], sd3[4]], "ds2":[fd[4], sd2[4]], "gs2":[fd[4], sd1[4]],
// 5th fret
    "a0":[fd[5], sd6[5]],
    "d1":[fd[5], 180],
    "g1":[fd[5], 193.4],
// "c2":[fd[5], 206.5], // Precisa desambiguar
    "e2":[fd[5], 220.8],
    "a2":[fd[5], 234.2],
// 6th fret
    "ft06":[fd[6], sd6[6]],
// 7th fret
    "ft07":[fd[7], sd6[7]],
// 8th fret
    "ft08":[fd[8], sd6[8]],
// 9th fret
    "ft09":[fd[9], sd6[9]],
// 10th fret
    "ft10":[fd[10], sd6[10]],
// 11th fret
    "ft11":[fd[11], sd6[11]],
// 12th fret
    "ft12":[fd[12], sd6[12]],
// 13th fret
    "ft13":[fd[13], sd6[13]],
// 14th fret
    "ft14":[fd[14], sd6[14]],
// 15th fret
    "ft15":[fd[15], sd6[15]],
// 16th fret
    "ft16":[fd[16], sd6[16]],
// 17th fret
    "ft17":[fd[17], sd6[17]],
// 18th fret
    "ft18":[fd[18], sd6[18]],
// 19th fret
    "ft19":[fd[19], sd6[19]],
// 20th fret
    "ft20":[fd[20], sd6[20]],
// 21th fret
    "ft21":[fd[21], sd6[21]],
// 22th fret
    "ft22":[fd[22], sd6[22]],
// 23th fret
    "ft23":[fd[23], sd6[23]],

// 23th fret
    "j1":[76, 159.2],
    "j2":[76, 175.4],
    "j3":[76, 191.6],
    "j4":[76, 207.8],
    "j5":[76, 224],
    "j6":[76, 240.2],
}

chords={
    "T0":["x1", "x2", "x3", "x4", "x5", "x6"],
    "T5":["a0", "d1", "g1", "c2", "e2", "a2"], 
    "T1":["f0", "fs0", "g0", "gs0", "a0", "ft06", "ft07", "ft08", "ft09", "ft10", "ft11", "ft12", "ft13", "ft14", "ft15", "ft16", "ft17", "ft18", "ft19", "ft20", "ft21", "ft22", "ft23"],
    "T23":["j1", "j2", "j3", "j4", "j5", "j6"],
// Notas devem ser posicionadas na lista na mesma ordem do encaixe dos dedos 1,2,3,4
    "CMaj":["c2","e1", "c1"],
    "DMaj":["a1", "d2", "fs2"],
    "Dm":["f2","a1","d2"],
    "Am":["c2", "e1", "a1"],
    "AMaj":["e1", "a1", "cs2"],
    "GMaj":["b0", "g0", "d2", "g2"],
    "Em":["b0", "e1"]
    }

let store_state = [];



function createChord(chord) {
    let circles = [];
    let finger = [];
    let test = [];
    let new_chord = [];
    var counter = 1;
    var chord_to_lower = chord.toLowerCase();
    var first_letter = Array.from(chord_to_lower)[0];

    const fretb = document.getElementById("fretboard");
    var svgNS = "http://www.w3.org/2000/svg";
    var svgCircle = document.getElementById("svg_circles");
    var circle = document.createElementNS(svgNS, "circle");
    var circle2 = document.createElementNS(svgNS, "circle");
    
    var el = document.getElementById("svg_circles"); // https://stackoverflow.com/questions/29398277/svg-clear-groupg
        while (el.firstChild) {
        el.removeChild(el.firstChild);
        }

    for(const ch in chords){ // Loop principal
        if(chord === ch){
            new_chord = chords[ch];
        }

        for(n in new_chord){ // Verifica as notas do array new_chord
            finger.push(counter);
            counter ++;
            for(note in notes){ // Itera sobre o notes
                if(new_chord[n] === note){ // Compara se a nota do acorde é igual a nota em notes
                    test.push(notes[note]); // Insere as coordenadas em test
                    //console.log(test)
                }
            }
        }

        for(i in new_chord){
            let x = test[i].at(0) * 2; // * 2 pq a imagem do canvas foi ajustada 2x
            let y = test[i].at(1) * 2;
            let ini_x = test[i].at(2) * 2; // define o inicio da corda para desenho das linhas
            let ini_y = test[i].at(3) * 2;
            console.log(test)

            // Linha da corda (indica a corda a ser tocada)
            // var line = document.createElementNS(svgNS, "line");
            // line.setAttributeNS(null, 'id','line2');
            // line.setAttributeNS(null, 'x1', x);
            // line.setAttributeNS(null, 'y1', y);
            // line.setAttributeNS(null, 'x2', ini_x);
            // line.setAttributeNS(null, 'y2', ini_y);
            // line.setAttributeNS(null, "stroke", color01)
            // line.setAttributeNS(null, "stroke-width", "0");

            // Círculo da nota principal do acorde
            var circle2 = document.createElementNS(svgNS, "circle");
            circle2.setAttributeNS(null, "cx", x);
            circle2.setAttributeNS(null, "cy", y);
            circle2.setAttributeNS(null, "r", 16);
            circle2.setAttributeNS(null, "fill", "none");
            circle2.setAttributeNS(null, "stroke", "#1A5276"); //00CCFF
            circle2.setAttributeNS(null, "stroke-width", "1.2");

            // Contorno da nota
            var circle = document.createElementNS(svgNS, "circle");
            circle.setAttributeNS(null, "cx", x);
            circle.setAttributeNS(null, "cy", y);
            circle.setAttributeNS(null, "r", 11.3);
            circle.setAttributeNS(null, "fill", color01);
            circle.setAttributeNS(null, "stroke", "blue"); "#82E0AA"
            circle.setAttributeNS(null, "stroke-width", "1");

            // Texto indicador do dedo (1, 2, 3, 4)
            // var text = document.createElementNS(svgNS, "text"); //https://stackoverflow.com/questions/9281199/adding-text-to-svg-document-in-javascript
            // text.setAttributeNS(null, 'x', x);
            // text.setAttributeNS(null, 'y', y);
            // text.setAttributeNS(null, "font-size", "12");
            // text.setAttributeNS(null, "text-anchor", "middle");
            // text.setAttributeNS(null, "dominant-baseline", "central");
            // text.setAttributeNS(null, "font-family", "monospace");
            // text.setAttributeNS(null, "fill", "#51-5A5A")
            // text.textContent = finger[i];
            
            //svgCircle.appendChild(line);

            if (new_chord[i].startsWith(first_letter)){
                svgCircle.appendChild(circle2);
            }
            
            svgCircle.appendChild(circle);
            // svgCircle.appendChild(text);
            //console.log(circle);

        }
    }
}














// NOTA:
// CONSIDERAR INCLUIR UM TERCEIRO ELEMENTO NO OBJETO
// PARA SERVIR DE FRET E ASSIM SER POSSIVEL REALIZAR
// OPERACOES COMO SE TERC ELEMENTO > 1 AND < 5 createChord()
// POSSIBILITANDO MOSTRAR NOTAS PROXIMAS



// DESENHAR LINHAS DAS NOTAS ATÉ O INÍCIO DO BRAÇO
// NO CASO DE CORDAS SOLTAS AS LINHAS VÃO ATÉ A PONTE

// ANIMAÇÃO DA MUDANÇA DE ACORDES

// ACRESCENTAR SELETOR DE TONS (A, B, C, E, F ...)