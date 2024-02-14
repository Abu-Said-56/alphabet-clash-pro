
function getARandomAlphabet(){
    // get or create an random alphabet
    const alphabetStrings = 'abcdefghijklmnopqrstwxyz';
    const alphabets = alphabetStrings.split(''); 
    // get a random index between 0-25
    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);

    const alphabet = alphabets[index];
    //console.log(index,alphabet);
    return alphabet;
}