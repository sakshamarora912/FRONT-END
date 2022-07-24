// var img = document.createElement('img'); 
// img.style.display="none";
const dicesound=new Audio('./sound/Rolling Dice 1.mp3'); 
const winnersound=new Audio('./sound/Winner 1.mp3');
var score,roundscore,activeplayer;
score=[0,0];      
roundscore=0;
activeplayer=0;  

 document.querySelector('.dice-roll').addEventListener('click',function(){
 var dice_1=Math.floor(Math.random()*6)+1;
 var dice_2=Math.floor(Math.random()*6)+1;
 dicesound.play();

 document.querySelector('.dice_1').style.display="block";
 document.querySelector('.dice_2').style.display="block";
 document.querySelector('.dice_1').src="./images/dice-"+dice_1+".png";
 document.querySelector('.dice_2').src="./images/dice-"+dice_2+".png";

//  img.style.display="block";
//  img.src="./images/dice-"+dice_2+".png";
//  img.style.position='absolute';
//  img.style.bottom="50%";
//  img.style.left="50%"
//  img.style.height="3.5em";
if(dice_1!=dice_2){
    roundscore+=dice_1+dice_2;
    document.querySelector('#total-score-'+ activeplayer).innerHTML= roundscore;

        } else{
            nextplayer();
        }
});
document.querySelector('.hold').addEventListener('click',function(){
    score[activeplayer]+=roundscore;             
    document.querySelector('.player-score-' + activeplayer).innerHTML=score[activeplayer];

    if (score[activeplayer]>=100){
        document.querySelector('#name-'+activeplayer).innerHTML='winner!';
        document.querySelector('.dice_1').style.display="none";
        document.querySelector('.player-name-'+activeplayer).classList.add('winner');
        document.querySelector('.dice_1').style.display="none";
        document.querySelector('.dice_2').style.display="none";
        winnersound.play();
    }
        nextplayer();
    
});
document.querySelector('.new-game').addEventListener('click',function(){
    score[activeplayer]=0;
    roundscore=0;
    document.querySelector('.dice_1').style.display="none";
    document.querySelector('.dice_2').style.display="none";
    document.querySelector('.player-score-0').innerHTML='0';
    document.querySelector('.player-score-1').innerHTML='0';
    document.querySelector('#total-score-0').innerHTML='0';
    document.querySelector('#total-score-1').innerHTML='0';
    document.querySelector('#name-0').innerHTML='Player-1';
    document.querySelector('#name-1').innerHTML='Player-2';
    document.querySelector('.player-name-0').classList.remove('winner');
    document.querySelector('.player-name-1').classList.remove('winner')
    document.querySelector('.player-0').classList.remove('bgcolor');
    document.querySelector('.player-1').classList.remove('bgcolor');
    document.querySelector('.player-0').classList.add('bgcolor');
});
function nextplayer(){
    activeplayer===0?activeplayer=1:activeplayer=0;
    roundscore=0;
    document.querySelector('#total-score-1').innerHTML='0';
    document.querySelector('#total-score-0').innerHTML='0';
    document.querySelector('.player-0').classList.toggle('bgcolor');
    document.querySelector('.player-1').classList.toggle('bgcolor');
}
