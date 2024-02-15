function play(){
    // step-1: tap button and hidden hone screen.
    const homeSection = document.getElementById('home-screen');
    homeSection.classList.add('hidden');

    // step-2: show the playground section
    const playGroundSection = document.getElementById('playground-section');
    playGroundSection.classList.remove('hidden');

    const letter = getARandomAlphabet();
    const currentAlphabetElement = document.getElementById('display_letter');
    currentAlphabetElement.innerText = letter ;
    //console.log(showLetter)
    setBackgroundColorById(letter);
    //document.addEventListener('keyup',handleKeyboardKeyUpEvent);
    
}

function handleKeyboardButtonPress(event){
    const playerPressed = event.key;
    console.log('press',playerPressed);

    // get the expected to press
    const currentAlphabetElement =document.getElementById('display_letter');
    const currentAlphabet = currentAlphabetElement.innerText;
    console.log('alpha = ',currentAlphabet);
    const expectedAlphabet = currentAlphabet.toLocaleLowerCase();

    // check Match or not
    if(playerPressed === expectedAlphabet){
        console.log('you get a pooint');
        // score update

        const currentScoreElement = document.getElementById('score_num');
        const currentScoreText = currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreText);
        //console.log(currentScore);

        //new score
        const newScore = currentScore + 1;

        // show the update score
        currentScoreElement.innerText = newScore;
        console.log(newScore);


        removeBackgeoundColorById(expectedAlphabet);
        continueGame();
       
    }else{
        console.log('please click right button');
        const lifeElement = document.getElementById('life_point');
        const lifetext = lifeElement.innerText ;
        const lifeNumber = parseInt(lifetext);

        const life = lifeNumber - 1; 
        lifeElement.innerText = life;
        if(life === 0 ){
            GameOver();
        }
    }
}

document.addEventListener('keyup',handleKeyboardButtonPress);


function GameOver(){
    const ScoreSection = document.getElementById('Score-Section');
    ScoreSection.classList.remove('hidden');

    // step-2: show the playground section
    const playGroundSection = document.getElementById('playground-section');
    playGroundSection.classList.add('hidden');
}