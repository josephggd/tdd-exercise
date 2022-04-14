export function encypher(codePhrase: string) {
    let newString = "";
    let eCounter = 0;
    let tCounter = 0;
    for (let i = 0; i < codePhrase.length; i++){
        const letter = codePhrase[i];
        if (letter=="r"){
            newString+="n";
        } else if (letter=="s"){
            newString+="a";
        } else if (letter=="e"){
            if (eCounter==0){
                newString+="e";
                eCounter+=1;
            }
        } else if (letter=="t"){
            if (tCounter==0){
                newString+="t";
                tCounter+=1;
            } else {
                newString+="m";
            }
        } else if (letter=="p"){
            if (i+1  < codePhrase.length && codePhrase[i+1]=="h"){
                newString+="lo";
                i++;
            } else {
                newString+="p";
            }
        } else {
            newString+=letter;
        }
    }
    return newString;
}