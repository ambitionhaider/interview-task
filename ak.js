AOS.init({
    once: true
});
$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 100) {
        $("header").addClass("scroll");
    } else {
        $("header").removeClass("scroll");
    }
});


     
     
   $(".tbing li").click(function(){
         var target = $(this).attr("data-target");
         $(".tbing li").removeClass("current");
         $(this).addClass("current");
        $("#"+target).fadeIn('slow').siblings(".mytabs").hide();
		   	return false;
         
     })


    
 $('.testimonial-slide').slick({
  dots: true,
  arrows: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
   
  ]
});


 $(".ind-slider").slick({
            dots: false,
            arrows: true,
            autoplay: true,
            arrows: false,
            slidesToShow: 4,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: '15px',
            speed: 500,
            autoplaySpeed: 1000,
            responsive: [{
                    breakpoint: 1400,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 1100,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 900,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                         autoplay: false,
                    }
                },
                {
               breakpoint: 480,
             settings: {
             slidesToShow: 1,
             slidesToScroll: 1,
              autoplay: false,
      }
    }
                
            ]
        }); 


        