
var slider=document.getElementById("slider");
var val=document.getElementById("value");
var slidervalue=document.getElementsByClassName("slidervalue");

val.innerHTML=slider.value;
slider.oninput=function(){
     val.innerHTML=this.value;
     /*val.style.left =(value/2) + "%";*/
     val.classList.add("show");
}