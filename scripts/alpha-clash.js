function play(){
    // step-1: tap button and hidden hone screen.
    const homeSection = document.getElementById('home-screen');
    homeSection.classList.add('hidden');

    // step-2: show the playground section
    const playGroundSection = document.getElementById('playground-section');
    playGroundSection.classList.remove('hidden');

    const letter = getARandomAlphabet();
     const saidBhai = document.getElementById('display_letter');
     saidBhai.innerText = letter ;
    //console.log(showLetter)

}