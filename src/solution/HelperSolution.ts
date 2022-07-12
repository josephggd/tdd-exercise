export function encypher(codePhrase: string) {
    // changes every r to n
    let encodedPhrase1 = "";
    for (let i = 0; i < codePhrase.length; i++){
        const currentCharacter = codePhrase[i];
        if (currentCharacter=="r"){
            encodedPhrase1 += "n";
        } else {
            encodedPhrase1 += currentCharacter;
        }
    }
    // changes every s to a
    let encodedPhrase2 = "";
    for (let i = 0; i < encodedPhrase1.length; i++){
        const currentCharacter = encodedPhrase1[i];
        if (currentCharacter=="s"){
            encodedPhrase2 += "a";
        } else {
            encodedPhrase2 += currentCharacter;
        }
    }
    // deletes second+ e
    let eCounter = 0;
    let encodedPhrase3 = "";
    for (let i = 0; i < encodedPhrase2.length; i++){
        const currentCharacter = encodedPhrase2[i];
        if (currentCharacter=="e" && eCounter >= 1){
            encodedPhrase3+="";
        } else {
            encodedPhrase3+=currentCharacter;
        }
        if (currentCharacter=="e"){
            eCounter+=1;
        }
    }
    // changes second+ t to m
    let tCounter = 0;
    let encodedPhrase4 = "";
    for (let i = 0; i < encodedPhrase3.length; i++){
        const currentCharacter = encodedPhrase3[i];
        if (currentCharacter=="t" && tCounter >= 1){
            encodedPhrase4+="m";
        } else {
            encodedPhrase4+=currentCharacter;
        }
        if (currentCharacter=="t"){
            tCounter+=1;
        }
    }
    // changes every ph to lo
    let encodedPhrase5 = "";
    for (let i = 0; i < encodedPhrase4.length; i++){
        const charAtIndex = encodedPhrase4[i];
        const charAtNextIndex = encodedPhrase4[i+1];
        if (charAtIndex=="p" && charAtNextIndex=="h"){
            encodedPhrase5+="lo";
            i++;
        } else {
            encodedPhrase5+=charAtIndex;
        }
    }
    return encodedPhrase5;
}