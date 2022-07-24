var image,sound,random,randomscore;
score=[0,0]
randomscore=0;
yourscore=0;
activeplayer=0;

document.querySelector('#hit').addEventListener('click',hit);
document.querySelector('#stand').addEventListener('click',stand);
document.querySelector('#deal').addEventListener('click',deal);

function hit(){
   showcard();
    };

function showcard(){
    random=Math.floor(Math.random()*13)+1;
    console.log(random);
    let cardimage=document.createElement('img');
    cardimage.src='./images/'+ random + '.png';
    cardimage.style.margin="1em";
    cardimage.style.width= "70px";
       
    score[activeplayer]+=random; 

    if(score[activeplayer]<21){
         randomscore+=random-1;
        document.querySelector('#yourscore-'+yourscore).innerHTML=score[activeplayer];
        document.querySelector('.activeplayer-'+ activeplayer).appendChild(cardimage);
     }else {
        nextplayer();
        }
}

function nextplayer(){
    activeplayer===0?activeplayer=1:activeplayer=0;
} 

function stand(){
   let total=document.createElement('total');
   document.querySelector('.activeplayer-'+ activeplayer).appendChild(total);
   total.innerHTML='total = ' +score[activeplayer];
   total.style.position='absolute';
   total.style.bottom='40%';
   total.style.fontSize='2em';
  nextplayer();
  document.querySelector('#hit').removeEventListener('click',hit);
  document.querySelector('#stand').removeEventListener('click',stand);
 }

 function deal(){
    var n=Math.floor(Math.random()*5)+2;
    console.log(n);
    showcard()*n;
    score[activeplayer]=0; 
    score[activeplayer]+=random; 

    document.querySelector('#yourscore-1').innerHTML=score[activeplayer];
    if(  score[activeplayer]<21){

    }

 }
