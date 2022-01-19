export function encypher(codePhrase: string) {
  const unEncryptedCharacters = Array.from(codePhrase);
  let encryptedCharacters = new Array(20);
  //declare variables here

  unEncryptedCharacters.forEach((character, index) => {
    //do stuff here
    
    encryptedCharacters[index] = character;    
  });

  return encryptedCharacters.join("");
}
