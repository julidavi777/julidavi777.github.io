/*--------------- Blog Slider ---------------*/
var swiper = new Swiper(".blog-slider", { 

    spaceBetween: 20,
    loop: true,
    autoplay: {
        display: 2500,
        disableOnInteraction: false,
    },
    
    pagination: {
        el: ".swiper-pagination2",
        clickable:true,
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },

        768: {
            slidesPerView: 2,
        },

        1024: {
            slidesPerView: 3,
        },
    },

});
/*--------------- End Blog Slider ---------------*/
/*--------------- Counter up ---------------*/


$(document).ready(function(){
    
    $('.count').each(function() {
        var $this = $(this),
        countTo = $this.attr('data-count');
        $({ countNum: $this.text()}).animate({
            countNum: countTo
        },
        {
            duration: 5000,
            step: function() {
                $this.text(Math.floor(this.countNum));
            },
            complete: function() {
                $this.text(this.countNum + '+');
            }
        });
    });
    
});

/*--------------- End Counter up ---------------*/

/*--------------- portfolio ---------------*/

$(document).ready(function(){

    $(".button").click(function(){
        $(this).addClass("active").siblings().removeClass("active");

        var filter = $(this).attr("data-filter");
    
        if (filter == "all"){
            $(".gallery .image").show(400);
        }
        else{
            $(".gallery .image").not("."+filter).hide(200);
            $(".gallery .image").filter("."+filter).show(400);
        }
    })

    //MAGNIFIC-POPUP
    $(".gallery").magnificPopup({
        
        delegate: "a",
        type: "image",
        removalDelay: 500, //delay removal by X to allow out-animation
        gallery:{
            enabled: true
        },

        callbacks: {
            beforeOpen: function() {
              // just a hack that adds mfp-anim class to markup 
               this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
               this.st.mainClass = this.st.el.attr('data-effect');
            }
          },
          closeOnContentClick: true,
          midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.

    })


});
/*--------------- End portfolio ---------------*/


/*--------------- script ---------------*/

$(document).ready(function(){

    $('.scroll-top').hide();
  
    /*--------------- Navbar Toggler ---------------*/
    $('#menu-btn').click(function(){
      $(this).toggleClass('fa-times');
      $('.navbar').toggleClass('active');
    });
  
    /*--------------- Scroll-Top ---------------*/
    $(window).on('scroll',function(){
      
      $('#menu-btn').removeClass('fa-times');
      $('.navbar').removeClass('active');
  
      // STICKY HEADER
      if($(window).scrollTop() > 0){
        $(".header").addClass("sticky");
      }else{
        $(".header").removeClass("sticky");
      }
  
      $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
          $('.scroll-top').fadeIn();
        } else {
          $('.scroll-top').fadeOut();
        }
      });
  
    });
  
  });
  

/*--------------- End script ---------------*/


/*--------------- scroll-spy ---------------*/

var sections = $('section');

$(window).on('scroll',function(){

  sections.each(function(){
    
    let top = $(window).scrollTop();
    let offset = $(this).offset().top - 200;
    let id = $(this).attr('id');
    let height = $(this).height();

    if(top >= offset && top < offset + height){
      $('.navbar a').removeClass('active');
      $('.navbar').find(`[href="#${id}"]`).addClass('active');
    }
  })
});

/*--------------- scroll-spy ---------------*/


/*--------------- testi-slider ---------------*/

/*--------------- Testimonial Slider ---------------*/ 
var swiper = new Swiper(".testimonial-slider", {

    spaceBetween: 20,
    loop:true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false, 
    },

    pagination: {
      el: ".swiper-pagination1",
      clickable:true,
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },

        768: {
            slidesPerView: 2,
        },

        1024: {
            slidesPerView: 3,
        },
    },

}); 

/*--------------- End testi-slider ---------------*/
