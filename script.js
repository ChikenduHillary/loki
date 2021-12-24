const audioElement = document.getElementById('audio')
let counter = 0
const fonts = [
    'Kirang Haerang',
    'Indie Flower',
    'Rye',
    'Amatic SC',
    'Bangers',
    'Fredericka the Great'
];

const letters = document.querySelectorAll('.letter');

let count = 0;

const rollIntro = () => {
    letters.forEach(letter => {
        let randomFontIndex = Math.floor(Math.random() * fonts.length);
        let randomFont = fonts[randomFontIndex];
        letter.style.fontFamily = randomFont;
    });
}

let introAnimation = setInterval(function(){
    rollIntro();
    if (count > 500)
        clearInterval(introAnimation);
    count++;
}, 350)

function playTheme(){
    counter ++
    if (counter%2 == 0){
        audioElement.pause()
    }else{
        audioElement.play()
    }
}

window.addEventListener('click', playTheme);
window.onload = function(){    
alert("Tap anywhere and wait for 3sec to play the Theme Song and tap again if you want to pause the song, Enjoy 😊😊");
}