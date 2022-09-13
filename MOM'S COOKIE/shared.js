$('.toggle-cart').click(()=>{
        $('.cart').toggleClass('visible')
    })

    $('.section-food').hover(function(){
    $(this).find(".food-item").toggleClass('imgzoom');
    $(this).find('.addtocart').toggleClass('move');
    })

    $('.addtocart').click(function(){
        console.log($(this).closest(nav).find(img).attr('src'));  
    })

    $(window).scroll(function(){
         if($(window).scrollTop()>=$('.part-0').offset().top+70){
             $('.part-1').css({'position':'fixed','top':'0','padding':'.5em 1em'})
             $('.part-1').children('nav').css({'font-size':'.7em','width':'36em','display':'fixed'})
             $('.part-1').children('div').css('flex-direction','row')
             $('.part-1').children('div').children('div').children('nav').css('font-size','.8em')
             $('.btn').css('width','3em')
         }else{return false}
     })
     let initialValue= document.querySelector('.value')
     function decrease(){
         if(initialValue.value>0){initialValue.value--}
         else{initialValue.innerHTML="0"}
        }
        function increase(){
         if(initialValue.value<5){initialValue.value++}
         else{initialValue.innerHTML="5"}
        }
    

