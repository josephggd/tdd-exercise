export function encypher(codePhrase: string): string {
    // changes every r to n
    let updatedPhrase1: string = "";
    for (let i = 0; i < codePhrase.length; i++) {
        const letterAtIndex = codePhrase[i];
        if (letterAtIndex=="r"){
            updatedPhrase1+="n";
        } else {
            updatedPhrase1+=letterAtIndex;
        }
    }
    // changes every s to a
    let updatedPhrase2: string = "";
    for (let i = 0; i < updatedPhrase1.length; i++) {
        const letterAtIndex = updatedPhrase1[i];
        if (letterAtIndex=="s"){
            updatedPhrase2+="a";
        } else {
            updatedPhrase2+=letterAtIndex;
        }
    }
    // deletes second+ e
    let updatedPhrase3: string = "";
    let eCounter = 0;
    for (let i = 0; i < updatedPhrase2.length; i++) {
        const letterAtIndex = updatedPhrase2[i];
        if (letterAtIndex=="e" && eCounter>=1){
            updatedPhrase3+="";
        } else if (letterAtIndex=="e") {
            updatedPhrase3+=letterAtIndex;
            eCounter++;
        } else {
            updatedPhrase3+=letterAtIndex;
        }
    }
    // changes second+ t to m
    let updatedPhrase4: string = "";
    let tCounter = 0;
    for (let i = 0; i < updatedPhrase3.length; i++) {
        const letterAtIndex = updatedPhrase3[i];
        if (letterAtIndex=="t" && tCounter>=1){
            updatedPhrase4+="m";
        } else if (letterAtIndex=="t") {
            updatedPhrase4+=letterAtIndex;
            tCounter++;
        } else {
            updatedPhrase4+=letterAtIndex;
        }
    }
    // changes every ph to lo
    let updatedPhrase5: string = "";
    for (let i = 0; i < updatedPhrase4.length; i++) {
        const letterAtIndex = updatedPhrase4[i];
        const letterAfterIndex = updatedPhrase4[i+1];
        if ((letterAtIndex+letterAfterIndex)=="ph"){
            updatedPhrase5+="lo";
            i++;
        } else {
            updatedPhrase5+=letterAtIndex;
        }
    }
    return updatedPhrase5;
}