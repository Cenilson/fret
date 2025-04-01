
    fret03 = [695, 165, 180];

    let fret01 = [806, 748, 694];
    let fret02 = 748;

    let corda1 = [69, 157];
    let corda2 = [69, 174];
    let corda3 = [69, 192];
    let corda4 = [69, 209];
    let corda5 = [69, 226];
    let corda6 = [69, 243];

    //#AAFF00 - lemon

    export var color01 = "#CCFF99"//"#DAF7A6"//rgb(74, 255, 222);

    export const notes={
    // 1st fret *** ESTA INVERTIDO
        "f2":[fret01[0], 230.5],
        "c2":[fret01[0], 218.5, corda5[0], corda5[1]],
        "gs1":[fret01[0], 206, corda3[0], corda3[1]],
        "ds1":[fret01[0], 194],
        "as0":[fret01[0], 181.5],
        "f0":[fret01[0], 169.5, corda1[0], corda1[1]],
    // 2nd fret
        "fs0":[748, 168.7, corda1[0], corda1[1]],
        "b0":[748, 180.5, corda2[0], corda2[1]],
        "e1":[748, 193.7, corda3[0], corda3[1]],
        "a1":[748, 206.5, corda4[0], corda4[1]],
        "cs2":[748, 219, corda5[0], corda5[1]],
        "fs2":[748, 231.5, corda6[0], corda6[1]],
    // 3rd fret
        "g0":[fret01[2], 167.2, corda1[0], corda1[1]],
        "c1":[fret01[2], 180, corda2[0], corda2[1]],
        "f1":[fret01[2], 193.6, corda3[0], corda3[1]],
        "as1":[fret01[2], 206.6],
        "d2":[fret01[2], 219.5, corda5[0], corda5[1]],
        "g2":[fret01[2], 232.2],
    // 4th fret
        "gs0":[643, 167, corda1[0], corda1[1]],
        "cs1":[643, 180, corda2[0], corda2[1]],
        "fs1":[643, 193.5, corda3[0], corda3[1]],
        "b1":[643, 206.9],
        "ds2":[643, 220],
        "gs2":[643, 233.3],
    // 5th fret
        "a0":[595, 166.2, corda1[0], corda1[1]],
        "d1":[595, 180, corda2[0], corda2[1]],
        "g1":[595, 193.4, corda3[0], corda3[1]],
        "c2":[595, 206.5], // Precisa desambiguar
        "e2":[595, 220.8],
        "a2":[595, 234.2]
    };