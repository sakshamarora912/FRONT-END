function visible(){
    $('.dialog-box').toggleClass('visible');
    $('.backdrop').toggleClass('visible');
}
$('.pop-up').click(function(){visible();});
$('.dialog-box__action--negative').click(function(){visible();});
$('.cross').click(function(){visible();});
function open(){
    $('.a').addClass('color');
    $('.heading-01').addClass('color')
    $('.heading-02').addClass('visibility');
    $('.container').addClass('height');
}
$('.btn-success').click(function(){open();});
function close(){
    $('.a').removeClass('color');
    $('.heading-01').removeClass('color')
    $('.heading-02').removeClass('visibility');
    $('.container').removeClass('height');
}
$('.btn-danger').click(function(){close();});
$('button.a').click(function(){
    $(this).closest('.container').find('h3.heading-02').toggleClass('visibility');
    $(this).closest('.container').find('h1.heading-01').toggleClass('color');
    $(this).closest('.container').toggleClass('height');
    $(this).toggleClass('color');
});
$(".plan").hover(function(){
    $(this).toggleClass("change");
    // $(this).before().toggleClass("show");
  });
  $(".child").hover(function(){
    $(this).toggleClass("change");
  });

// $(".plan::after").hover(function(){
//     $(this).toggleClass("show")
// })
// $(".plan::before").hover(function(){
//     $(this).toggleClass("show")
// })


let el = document.querySelectorAll ('svg')

const height = el.clientHeight
const width = el.clientWidth

$('#svg').mousemove(function(e){
    const xVal = e.layerX
    const yVal = e.layerY
    const yRotation = 20 * ((xVal - width / 2) / width)
    const xRotation = -20 * ((yVal - height / 2) / height)
    $(this).css('transform','perspective(500px) scale(1.1) rotateX(' + xRotation + 'deg) rotateY(' + yRotation + 'deg)')
})

$('#svg').mouseout(function() {
    $(this).css('transform','perspective(500px) scale(1) rotateX(0) rotateY(0)')
})
$('#svg').mousedown(function() {
    $(this).css('transform','perspective(500px) scale(1) rotateX(0) rotateY(0)')
})
$('#svg').mouseup(function() {
    $(this).css('transform','perspective(500px) scale(1) rotateX(0) rotateY(0)')
})


// el.addEventListener('mousemove', handleMove)

// function handleMove(e) {
//     const xVal = e.layerX
//     const yVal = e.layerY
//     const yRotation = 20 * ((xVal - width / 2) / width)
//     const xRotation = -20 * ((yVal - height / 2) / height)
//     el.style.transform = 'perspective(500px) scale(1.1) rotateX(' + xRotation + 'deg) rotateY(' + yRotation + 'deg)'
// }   



// el.addEventListener('mouseout', function() {
// el.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)'
// })

// el.addEventListener('mousedown', function() {
// el.style.transform = 'perspective(500px) scale(0.9) rotateX(0) rotateY(0)'
// })

// el.addEventListener('mouseup', function() {
// el.style.transform = 'perspective(500px) scale(1.1) rotateX(0) rotateY(0)'
// })