$(document).ready(function(){
    $(".skins").hover(function(){
      $(".skin_hover").addClass('hover-show-hide');
      $(".container-image").addClass('image-show-hide');
      });

      $(".part-1").mouseenter(function(){
        $(".skin_hover").removeClass('hover-show-hide');
        $(".container-image").removeClass('image-show-hide');
        });

      if($(window).scroll()>=offset.Top()+50){
        $(".skin_hover").removeClass('hover-show-hide');
        $(".container-image").removeClass('image-show-hide');
      }

      $(".cases").hover(function(){
        $(".case_hover").addClass('hover-show-hide');
        $(".container-image").addClass('image-show-hide');
        });
  
        $(".part-1").mouseenter(function(){
          $(".case_hover").removeClass('hover-show-hide');
          $(".container-image").removeClass('image-show-hide');
          });
  
        if($(window).scroll()>=offset.Top()+50){
          $(".case_hover").removeClass('hover-show-hide');
          $(".container-image").removeClass('image-show-hide');
        }
  });


 