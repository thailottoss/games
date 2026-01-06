(function ($) {
 "use strict";

/*--------------------------
preloader
---------------------------- */	
	
	$(window).on('load',function(){
		var pre_loader = $('#preloader')
		pre_loader.fadeOut('slow',function(){$(this).remove();});
	});
    
	
/*---------------------
 TOP Menu Stick
--------------------- */
	
var windows = $(window);
var sticky = $('#sticker');

windows.on('scroll', function() {
    var scroll = windows.scrollTop();
    if (scroll < 300) {
        sticky.removeClass('stick');
    }else{
        sticky.addClass('stick');
    }
});   
    
    
/*----------------------------
 jQuery MeanMenu
------------------------------ */
	
    var mean_menu = $('nav#dropdown');
    mean_menu.meanmenu();
    
/*---------------------
 wow .js
--------------------- */
    function wowAnimation(){
        new WOW({
            offset: 100,          
            mobile: true
        }).init()
    }
    wowAnimation()	
    
/*--------------------------
 scrollUp
---------------------------- */
	
	// $.scrollUp({
	// 	scrollText: '<i class="ti-arrow-up"></i>',
	// 	easingType: 'linear',
	// 	scrollSpeed: 900,
	// 	animation: 'fade'
	// });
    
	
/*--------------------------
 collapse
---------------------------- */
	
	var panel_test = $('.panel-heading a');
	panel_test.on('click', function(){
		panel_test.removeClass('active');
		$(this).addClass('active');
	});




/*--------------------------
 MagnificPopup
---------------------------- */	
	
    $('.video-play').magnificPopup({
        type: 'iframe'
    });

/*--------------------------
     Project carousel
---------------------------- */
	$('.intro-carousel').owlCarousel({
	  autoplay: true,
	  center: true,
	  loop: true,
	  nav: true,
	  dots:false,
      navText: ["<i class='ti-angle-left'></i>","<i class='ti-angle-right'></i>"],
      responsive:{
	        0:{
	            items:1
	        },
	        700:{
	            items:1
	        },
	        1000:{
	            items:1
	        }
        }
	});
    


	var games_carousel = $('.games-carousel');
	games_carousel.owlCarousel({
        loop:true,
        nav:true,		
        autoplay:true,
        dots:false,
        navText: ["<i class='ti-angle-left'></i>","<i class='ti-angle-right'></i>"],
        responsive:{
            0:{
                items:1
            },
            700:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });
    

/*----------------------------
    Contact form
------------------------------ */
	$("#contactForm").on("submit", function (event) {
		if (event.isDefaultPrevented()) {
			formError();
			submitMSG(false, "Did you fill in the form properly?");
		} else {
			event.preventDefault();
			submitForm();
		}
	});
	function submitForm(){
		var name = $("#name").val();
		var email = $("#email").val();
		var msg_subject = $("#msg_subject").val();
		var message = $("#message").val();


		$.ajax({
			type: "POST",
			url: "assets/contact.php",
			data: "name=" + name + "&email=" + email + "&msg_subject=" + msg_subject + "&message=" + message,
			success : function(text){
				if (text === "success"){
					formSuccess();
				} else {
					formError();
					submitMSG(false,text);
				}
			}
		});
	}

	function formSuccess(){
		$("#contactForm")[0].reset();
		submitMSG(true, "Message Submitted!")
	}

	function formError(){
		$("#contactForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
			$(this).removeClass();
		});
	}

	function submitMSG(valid, msg){
		if(valid){
			var msgClasses = "h3 text-center tada animated text-success";
		} else {
			var msgClasses = "h3 text-center text-danger";
		}
		$("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
	}



            $(document).ready(function() {

               $('.table-responsive-stack').each(function (i) {
                  var id = $(this).attr('id');
                  //alert(id);
                  $(this).find("th").each(function(i) {
                     $('#'+id + ' td:nth-child(' + (i + 1) + ')').prepend('<span class="table-responsive-stack-thead">'+             $(this).text() + ':</span> ');
                     $('.table-responsive-stack-thead').hide();
                     
                  });
                  

                  
               });

               
               
               
               
            $( '.table-responsive-stack' ).each(function() {
              var thCount = $(this).find("th").length; 
               var rowGrow = 100 / thCount + '%';
               //console.log(rowGrow);
               $(this).find("th, td").css('flex-basis', rowGrow);   
            });
               
               
               
               
            function flexTable(){
               if ($(window).width() < 768) {
                  
               $(".table-responsive-stack").each(function (i) {
                  $(this).find(".table-responsive-stack-thead").show();
                  $(this).find('thead').hide();
               });
                  
                
               // window is less than 768px   
               } else {
                  
                  
               $(".table-responsive-stack").each(function (i) {
                  $(this).find(".table-responsive-stack-thead").hide();
                  $(this).find('thead').show();
               });
                  
                  

               }
            // flextable   
            }      
             
            flexTable();
               
            window.onresize = function(event) {
                flexTable();
            };
               
               
               
               

              
            // document ready  
            });
	    


})(jQuery); 