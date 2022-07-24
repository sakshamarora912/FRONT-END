var update,roundscore,activeplayer,score;
score=[0,0];      
roundscore=0;
activeplayer=0;     
const dicesound=new Audio('./sound/Rolling Dice 1.mp3'); 
const winnersound=new Audio('./sound/Winner 1.mp3');

document.querySelector('.dice-roll').addEventListener('click',function(){
        var dice=Math.floor(Math.random()*6)+1;
        var diceshow= document.querySelector('.number');
        diceshow.style.display="block";
        diceshow.src="./images/dice-"+dice+".png";
        dicesound.play();
        console.log(dice);

        if (dice!=1){
            roundscore+=dice;
            document.querySelector('#total-score-'+ activeplayer).innerHTML= roundscore;

        } else{
            nextplayer();
        }
});

 document.querySelector('.hold').addEventListener('click',function(){
        score[activeplayer]+=roundscore;             
        document.querySelector('.player-score-' + activeplayer).innerHTML=score[activeplayer];

        if (score[activeplayer]>=10){
            document.querySelector('#name-'+activeplayer).innerHTML='winner!';
            document.querySelector('.dice_1r').style.display="none";
            document.querySelector('.player-name-'+activeplayer).classList.add('winner');
            gameplaying=false;
            winnersound.play();
        } else{
            nextplayer();
        } 
    });
document.querySelector('.new-game').addEventListener('click',function(){
    roundscore=0;
    document.querySelector('.number').style.display="none";
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
    
   

