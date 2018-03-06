var ennemie = document.querySelector('.containerImg');
var illustration = document.querySelector('.ennemieImg');
var progressBar = document.querySelector('.ennemieHp');
var hp = document.querySelector('.actualHp');
var maxhp = document.querySelector('.maxHp');
var actualYen = document.querySelector('.yenNb');
var yen_btn = document.querySelector('.yen_btn');
var acutal_dpc = document.querySelector('.actualDpc');
var yenNeeded = document.querySelector('.yenNeeded');
var counter = 0;
var big = 0;
var force = 1;
var yen = 0;
var lvl = 1;
var requireYen = 1;
var yenExp = 1;



window.addEventListener('dblclick', function(event){
    event.preventDefault()
})

ennemie.addEventListener('click', function(){
    progressBar.value -= force;
    hp.textContent = progressBar.value;

    if (progressBar.value < 1) {
        counter++;
        changement();
        gainYen();
        if (counter>4) {
            counter = 0;
            gainHp();
            lvl++;
        }
    }
});

yen_btn.addEventListener('click', function(){
    if (yen >= requireYen) {
        yen=yen-requireYen;
        force++;
        requireYen+= yenExp;
        yenExp+= 2;
        actualYen.textContent = " " + yen + "¥";
        acutal_dpc.textContent = " " + force;
        yenNeeded.textContent = " " + requireYen + "¥";
    }
});

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
        var number = Math.floor(Math.random()*9);
        illustration.src = 'img/'+ number + '.png';
}

function gainYen(){
    yen+=lvl;
    actualYen.textContent = " " + yen + "¥";
}

function forceUpdate(){

}
