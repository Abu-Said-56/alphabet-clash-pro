function play(){
    // hide home-screen section
    const homeScreen = document.getElementById('home-screen');
    homeScreen.classList.add('hidden');
    
    // show playground Section 
    const playground = document.getElementById('playground-section');
    playground.classList.remove('hidden');
}