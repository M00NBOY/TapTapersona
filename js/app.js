var ennemie = document.querySelector('.containerImg');
var illustration = document.querySelector('.ennemieImg');
var progressBar = document.querySelector('.ennemieHp');
var hp = document.querySelector('.actualHp');
var maxhp = document.querySelector('.maxHp');
var counter = 0;
var big = 0;
var force = 1;

window.addEventListener('dblclick', function(event){
    console.log(event);
    event.preventDefault()
})

ennemie.addEventListener('click', function(){
    progressBar.value -= force;
    hp.textContent = progressBar.value;

    if (progressBar.value < 1) {
        counter++;
        changement();
        if (counter>4) {
            counter = 0;
            gainHp();
        }
    }
})

function changement(){
    progressBar.value = progressBar.max;
    hp.textContent = progressBar.value;
    maxhp.textContent = progressBar.max;
    randomImg();
}

function gainHp(){
    big+=2;
    progressBar.max+=big;
}

function randomImg(){
        var number = Math.floor(Math.random()*8);
        illustration.src = 'img/'+ number + '.png';
}
