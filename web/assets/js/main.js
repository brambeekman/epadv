;(function($){

  $(document).ready(function(){

            const ucounter = $('.counter');
     
           if (ucounter.length > 0) {
            ucounter.countUp();  
           }
       

           $(function () { 
             $('[data-toggle="tooltip"]').tooltip({trigger: 'manual'}).tooltip('show');
           });  
           
           // $( window ).scroll(function() {   
            // if($( window ).scrollTop() > 10){  // scroll down abit and get the action   
             $(".progress-bar").each(function(){
               each_bar_width = $(this).attr('aria-valuenow');
               $(this).width(each_bar_width + '%');
             });
                  
            //  }  
           // }); 
           $(".modal-video-1").modalVideo({channel:'#'}); 
           $(".play-btn-1").modalVideo({channel:'#'});   

          // sticky header active
          if ($("#header").length > 0) {
            $(window).on("scroll", function (event) {
              var scroll = $(window).scrollTop();
              if (scroll < 1) {
                $(".header-area").removeClass("sticky");
              } else {
                $(".header-area").addClass("sticky");
              }
            });
          }

   


          // page-progress
          var progressPath = document.querySelector(".progress-wrap path");
          var pathLength = progressPath.getTotalLength();
          progressPath.style.transition = progressPath.style.WebkitTransition =
            "none";
          progressPath.style.strokeDasharray = pathLength + " " + pathLength;
          progressPath.style.strokeDashoffset = pathLength;
          progressPath.getBoundingClientRect();
          progressPath.style.transition = progressPath.style.WebkitTransition =
            "stroke-dashoffset 10ms linear";
          var updateProgress = function () {
            var scroll = $(window).scrollTop();
            var height = $(document).height() - $(window).height();
            var progress = pathLength - (scroll * pathLength) / height;
            progressPath.style.strokeDashoffset = progress;
          };
          updateProgress();
          $(window).scroll(updateProgress);
          var offset = 50;
          var duration = 550;
          jQuery(window).on("scroll", function () {
            if (jQuery(this).scrollTop() > offset) {
              jQuery(".progress-wrap").addClass("active-progress");
            } else {
              jQuery(".progress-wrap").removeClass("active-progress");
            }
          });
          jQuery(".progress-wrap").on("click", function (event) {
            event.preventDefault();
            jQuery("html, body").animate({ scrollTop: 0 }, duration);
            return false;
          });
          $('select').niceSelect();

            });

  // Price filtering
(function () {
 var parent = document.querySelector("#rangeSlider");
 if (!parent) return;

 var rangeS = parent.querySelectorAll("input[type=range]"),
   numberS = parent.querySelectorAll("input[type=number]");

 rangeS.forEach(function (el) {
   el.oninput = function () {
     var slide1 = parseFloat(rangeS[0].value),
       slide2 = parseFloat(rangeS[1].value);

     if (slide1 > slide2) {
       [slide1, slide2] = [slide2, slide1];
     }

     numberS[0].value = slide1;
     numberS[1].value = slide2;
   };
 });

 numberS.forEach(function (el) {
   el.oninput = function () {
     var number1 = parseFloat(numberS[0].value),
       number2 = parseFloat(numberS[1].value);

     if (number1 > number2) {
       var tmp = number1;
       numberS[0].value = number2;
       numberS[1].value = tmp;
     }

     rangeS[0].value = number1;
     rangeS[1].value = number2;
   };
 });
})();


  //minus

  var buttonPlus  = $(".qty-btn-plus");
  var buttonMinus = $(".qty-btn-minus");

  var incrementPlus = buttonPlus.click(function() {
    var $n = $(this)
    .parent(".qty-container")
    .find(".input-qty");
    $n.val(Number($n.val())+1 );
  });

  var incrementMinus = buttonMinus.click(function() {
    var $n = $(this)
    .parent(".qty-container")
    .find(".input-qty");
    var amount = Number($n.val());
    if (amount > 0) {
      $n.val(amount-1);
    }
  });
  //minus

  var buttonPlus  = $(".qty-btn-plus");
  var buttonMinus = $(".qty-btn-minus");

  var incrementPlus = buttonPlus.click(function() {
    var $n = $(this)
    .parent(".qty-container-1")
    .find(".input-qty");
    $n.val(Number($n.val())+1 );
  });

  var incrementMinus = buttonMinus.click(function() {
    var $n = $(this)
    .parent(".qty-container-1")
    .find(".input-qty");
    var amount = Number($n.val());
    if (amount > 0) {
      $n.val(amount-1);
    }
  });
  $('.testimonial-text-area').owlCarousel({
       loop:true,
       margin:30,
       dots:false,
       nav:true,
       items: 1,
       smartSpeed:1000,
       navText:["<i class='fa-solid fa-angle-left'></i>","<i class='fa-solid fa-angle-right'></i>"],
       responsiveClass:true,
       responsive:{
           0:{
               items:1,
               dots:false,
               nav:true,
           },
           600:{
               items:1,
               nav:true,
               dots:false,
   
           },
           1000:{
               items:1,
               nav:true,
               dots:false,
           }
       }
   });
   

   $('.brand-images-area').owlCarousel({
       loop:true,
       margin:30,
       nav:false,
       dots:true,
       items: 10,
       smartSpeed:1000,
       responsiveClass:true,
       responsive:{
           0:{
               items:1,
               nav:false,
            
               
           },
           600:{
               items:3,
           },
           1000:{
               items:4,
           }
       }
   });
   $('.project-testimonial-area').owlCarousel({
     loop:true,
     margin:30,
     nav:true,
     dots:false,
     smartSpeed:1000,
     navText:["<i class='fa-solid fa-arrow-left'></i>","<i class='fa-solid fa-arrow-right'></i>"],
     items: 2,
     responsiveClass:true,
     responsive:{
         0:{
             items:1,
             nav:true,
          
             
         },
         600:{
             items:1,
         },
         1000:{
             items:2,
         }
     }
 });
 $('.testimonial-3-area').owlCarousel({
     loop:true,
     margin:30,
     nav:true,
     dots:false,
     smartSpeed:1000,
     navText:["<i class='fa-solid fa-arrow-left'></i>","<i class='fa-solid fa-arrow-right'></i>"],
     items: 1,
     responsiveClass:true,
     responsive:{
         0:{
             items:1,
             nav:true,
          
             
         },
         600:{
             items:1,
         },
         1000:{
             items:1,
         }
     }
 });
 $('.service-carousel-area').owlCarousel({
     loop:true,
     margin:30,
     nav:true,
     dots:false,
     smartSpeed:1000,
     navText:["<i class='fa-solid fa-arrow-left'></i>","<i class='fa-solid fa-arrow-right'></i>"],
     items: 3,
     responsiveClass:true,
     responsive:{
         0:{
             items:1,
             nav:true,
          
             
         },
         600:{
             items:2,
         },
         1000:{
             items:3,
         }
     }
 });
 $('.testimonial-words-quito').owlCarousel({
     loop:true,
     margin:30,
     nav:true,
     dots:false,
     smartSpeed:1000,
     navText:["<i class='fa-solid fa-arrow-left'></i>","<i class='fa-solid fa-arrow-right'></i>"],
     items: 2,
     responsiveClass:true,
     responsive:{
         0:{
             items:1,
             nav:true,
          
             
         },
         600:{
             items:2,
         },
         1000:{
             items:2,
         }
     }
 });
 $('.team-carousel-area').owlCarousel({
     loop:true,
     margin:30,
     nav:true,
     dots:false,
     smartSpeed:1000,
     navText:["<i class='fa-solid fa-arrow-left'></i>","<i class='fa-solid fa-arrow-right'></i>"],
     items: 5,
     responsiveClass:true,
     responsive:{
         0:{
             items:1,
             nav:true,
          
             
         },
         600:{
             items:3,
         },
         1000:{
             items:4,
             nav:true,
         }
     }
 });





  $(window).on('load', function(event) {

       setTimeout(function () {
            $("#preloader").fadeToggle();
          }, 500);
          AOS.init();
   });


})(jQuery);
