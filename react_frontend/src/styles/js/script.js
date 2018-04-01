
/*Loading Page
============================*/
$(window).load(function () {
    
    "use strict";
    
    $(".loading").fadeOut(500, function () {
        
        $("body").css({
            
            position: "static",
            
            top: "auto",
            
            bottom: "auto",
            
            height: "auto"
            
        });
        
        $(this).parent().fadeOut(500, function () {
            
            $(this).remove();
            
        });
    });
});

$(document).ready(function(){
    var rtl = false;
    if($("html").attr("lang") == 'ar'){
         rtl = true;
    }
    $('.dropdown-submenu a.test').on("click", function(e){
        $(this).next('ul').toggle();
        e.stopPropagation();
        e.preventDefault();
    });
    
    $('[data-toggle="tooltip"]').tooltip();
    // --- menu mobile
    // $("#menu").mmenu();
    // $('.side-filter > h2').click(function(){
    //     $('.filter-block-content').slideToggle(500);
    // })
    // $('.color-choose input').on('click', function() {
    //   var headphonesColor = $(this).attr('data-image');
 
    //   $('.active').removeClass('active');
    //   $('.pro-resThumb img[data-image = ' + headphonesColor + ']').addClass('active');
    //   $(this).addClass('active');
    // });
    /*open menu*/
        $(".hamburger").click(function(){
            $("body,html").addClass('menu-toggle');
            $(".hamburger").addClass('active');
        });
        $(".m-overlay").click(function(){
            $("body,html").removeClass('menu-toggle');
            $(".hamburger").removeClass('active');
        });


	var owl = $('#homeSlider');

        owl.on('initialized.owl.carousel change.owl.carousel',function(elem){
            var current = elem.item.index;
            $(elem.target).find(".owl-item").eq(current).find(".to-animate").removeClass('fadeInUp animated');
        });
       
        owl.on('initialized.owl.carousel changed.owl.carousel',function(elem){
            window.setTimeout(function(){
                var current = elem.item.index;
                $(elem.target).find(".owl-item").eq(current).find(".to-animate").addClass('fadeInUp animated');
            }, 400);
        });
	    owl.owlCarousel({
	            items: 1,
	            loop: true,
	            margin: 0,
	            responsiveClass: true,
	            nav: true,
	            dots: true,
                rtl:rtl,
	            smartSpeed: 500,
	            autoplay: true,
	            autoplayTimeout: 5000,
	            autoplayHoverPause: true,
	            // animateOut: 'fadeOut',
	            // animateIn: 'fadeIn',
	            navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
	    });



	    $("#recent-slider").owlCarousel({
 
            // Most important owl features
            loop:true,
            margin:25,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                },
                992:{
                    items:1,
                },
                1199:{
                    items:2,
                }

            },
            dots:true,
            nav:true,
            rtl:rtl,
            navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
            autoplay:false
        })
        $("#arrivals-slider").owlCarousel({
 
            // Most important owl features
            loop:true,
            margin:10,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                },
                470:{
                    items:2,
                },
                650:{
                    items:3,
                },
                767:{
                    items:2,
                },
                991:{
                    items:3,
                },
                1199:{
                    items:4,
                }

            },
            dots:true,
            nav:false,
            rtl:rtl,
            autoplay:false
        })
        $("#offers-slider").owlCarousel({
 
            // Most important owl features
            loop:true,
            margin:0,
            items:1,
            responsiveClass:true,
            dots:false,
            nav:true,
            rtl:rtl,
            navText:['next <i class="fa fa-angle-right"></i>','<i class="fa fa-angle-left"></i> Previous'],
            autoplay:false
        })

        $("#like-product-slider").owlCarousel({
 
            // Most important owl features
            loop:true,
            margin:10,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                },
                600:{
                    items:2,
                },
                767:{
                    items:2,
                },
                991:{
                    items:3,
                }

            },
            dots:true,
            nav:true,
            rtl:rtl,
            navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
            autoplay:false
        })

     //    $(function() {
	    //   $('a[href*=#]').on('click', function(e) {
	    //     e.preventDefault();
	    //     $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
	    //   });
	    // });
        
        $(".scroll").on('click', function (event) {
            event.preventDefault();
            $('html,body').animate({scrollTop: $(this.hash).offset().top}, 1000);
        });
})



/*Decrease & Increase*/    
var minimum_quanitiy=$(".jsQuantityDecrease").attr("minimum"),
productQuantity=minimum_quanitiy;
$(document).on("click",".jsQuantityDecrease",function(){
    var quantity = $(this).parent().find('input[name="count-quat1"]').val();
    quantity = quantity * 1;
    var newQuantity = quantity - 1;
    $(this).parent().find('input[name="count-quat1"]').val(newQuantity);
    if (newQuantity <2) {
        $(this).parent().find(".jsQuantityDecrease").addClass("disabled");
    } else{
         $(this).parent().find(".jsQuantityDecrease").removeClass("disabled");
    }
}),

$(document).on("click",".jsQuantityIncrease",function(){
    var quantity = $(this).parent().find('input[name="count-quat1"]').val();
    quantity = quantity * 1;
    var newQuantity = quantity + 1;
    $(this).parent().find('input[name="count-quat1"]').val(newQuantity);
    if (newQuantity >=2) {
        $(this).parent().find(".jsQuantityDecrease").removeClass("disabled");
    } else{
         $(this).parent().find(".jsQuantityDecrease").addClass("disabled");
    }
    
})
