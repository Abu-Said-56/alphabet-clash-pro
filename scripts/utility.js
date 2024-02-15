
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

function setBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-500');
}

function removeBackgeoundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-500');
}

function continueGame(){
    const alphabet = getARandomAlphabet();

    const currentAlphabetElement = document.getElementById('display_letter');
    currentAlphabetElement.innerText = alphabet;

    setBackgroundColorById(alphabet);
}