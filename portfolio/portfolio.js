function move(id,position){
    var t1=gsap.timeline();
        t1.to("#bubble_1",{duration:.1,x:"12%",y:"9.68px", boxShadow: 'none', ease: "ease-out",opacity:0}, 0)
          .to("#bubble_2",{duration:.1,x:"36%",y:"9.68px",boxShadow: 'none', ease: "ease-out",opacity:0}, 0)
          .to("#bubble_3",{duration:.1,x:"36%",y:"41%",boxShadow: 'none', ease: "ease-out",opacity:0}, 0)
          .to("#bubble_4",{duration:.1,x:"36%",y:"65%",boxShadow: 'none', ease: "ease-out",opacity:0}, 0)
          .to(".icon", {duration: 0.05, opacity: 0, ease: "ease-out",}, 0)
          .to(".bgbubble",{duration: 0.05,top:position,ease: "ease-in-out"}, 0.2)
          .to(`#bubble_${id}`,{duration: 0.05, opacity: 1, ease: "ease-out"}, 0.2)
          .to(`#bubble_${id}>span`,{duration: 0.05,opacity:1}, '0.1');
    }

    var lineHeight=parseInt($('polyline').css("strokeDashoffset"));
    var line=parseInt($('.text1').css("transform"));
    window.onscroll=function(){
       var winHeight=$(window).height();
       var DocHeight=$(document).height();
       var scrollTop=$(window).scrollTop();
       var trackLength=DocHeight-winHeight;
       var pctScolled =(Math.floor(scrollTop/trackLength*200));
       var total= lineHeight-2*pctScolled;
       var move1=-90+pctScolled/4;
       var move2=69-pctScolled/4;
       if(pctScolled>0){  
                $('polyline').css({"strokeDashoffset":lineHeight+5*pctScolled}); 
                $('.text1').css("transform","translate("+move1+"px)");      
                $('.text2').css("transform","translate("+move2+"px)");          
            }
        }
        // var content = [ "I am Front-End Developer", "I build interactive websites <br>that run across platforms & devices" ];
        // var Part = 0;   // Current sentence being processed
        // var Part_index = 0; // Character number of the current sentence being processed 
        // var interval_val;// Holds the handle returned from setInterval
        // var element = document.getElementById("text");// element that holds the text
        // console.log(element)
        // function Type() { 
        //     var text =  content[Part].substring(0, Part_index + 1);
        //     element.innerHTML = text; 
        //     Part_index++;
        //     // If full sentence has been displayed then start to delete the sentence after some time
        //     if(text == content[Part]) {
        //         clearInterval(interval_val);
        //         setTimeout(function() {
        //             interval_val = setInterval(Delete, 50);
        //         }, 1000);
        //     }
        // }
        // function Delete() {
        //     var text =  content[Part].substring(0, Part_index - 1);
        //     element.innerHTML = text;
        //     Part_index--;
        
        //     // If sentence has been deleted then start to display the next sentence
        //     if(text =='') {
        //         clearInterval(interval_val);
        
        //         // If last sentence then display the first one, else move to the next
        //         if(Part == (content.length - 1))
        //             Part = 0;
        //         else
        //             Part++;
        //             Part_index = 0;
        
        //         setTimeout(function() {  // Start to display the next sentence after some time
        //             interval_val = setInterval(Type, 100);
        //         }, 200);
        //     }
        // }
        // interval_val = setInterval(Type, 10); // Start the typing effect on load
        $(window).scroll(function(){
            if($(window).scrollTop()>60 ){
                $('.start_lang').css({'opacity':'1','transition':'.5s ease-out'});
                $('.end_lang').css({'opacity':'1','transition':'.5s ease-out'});
                $('.move_1').css({'opacity':'1','fontSize':'1.5em','transition':'.5s ease-out'});
                $('.move_2').css({'opacity':'1','fontSize':'1.5em','transition':'.55s ease-out'});
                $('.move_3').css({'opacity':'1','fontSize':'1.5em','transition':'.6s ease-out'});
                $('.move_4').css({'opacity':'1','fontSize':'1.5em','transition':'.65s ease-out'});
            }
            else{
                $('.start_lang').css({'opacity':'0','transition':'.5s ease-out'});
                $('.end_lang').css({'opacity':'0','transition':'.5s ease-out'});
                $('.move_1').css({'opacity':'0','fontSize':'1em','transition':'.5s ease-out'});
                $('.move_2').css({'opacity':'0','fontSize':'1em','transition':'.55s ease-out'});
                $('.move_3').css({'opacity':'0','fontSize':'1em','transition':'.6s ease-out'});
                $('.move_4').css({'opacity':'0','fontSize':'1em','transition':'.65s ease-out'});
            }
        })

        // $('.box').hover(function() {
        //     $(this).css({'filter':'blur(0)'});
        //     $(this).parent('.section_4').css({'transform':'scale(1)'});
        // })