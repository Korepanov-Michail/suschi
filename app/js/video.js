window.onload = function() {

  var inp_email = document.querySelector('input[name=email]');
  var inp_phone = document.querySelector('input[name=phone]');
  var inp_text = document.querySelector('textarea[name=text]');
  var params  ;
  
    $('.btn_email').click(function(){
        params ='email='+inp_email.value + '&' + 'phone='+inp_phone.value + '&' + 'text='+inp_text.value;
        //document.querySelector('#result2').innerHTML = params;
        ajaxPost(params);
    })


         function ajaxPost(params){

            var request = new XMLHttpRequest();

              request.onreadystatechange = function(){

                if(request.readyState == 4 && request.status == 200 ){ 
                    document.querySelector('#result').innerHTML =request.responseText;
        
                }
              }
            request.open('POST','index.php');
            request.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
            request.send(params);
         }




  $(".video_span_1").click(function(){
      $(".relation_content").attr('src','https://www.youtube.com/embed/Hw89cwVW_Lo?autoplay=1');
  })
  $(".video_span_2").click(function(){
      $(".relation_content").attr('src','https://www.youtube.com/embed/j3qnXFN6Or8?autoplay=1');
  })
  $(".video_span_3").click(function(){
      $(".relation_content").attr('src','https://www.youtube.com/embed/fpViZkhpPHk?autoplay=1');
  })
  $(".video_span_4").click(function(){
      $(".relation_content").attr('src','https://www.youtube.com/embed/gNbSjMFd7j4?autoplay=1');
  })
  $(".video_span_5").click(function(){
      $(".relation_content").attr('src','https://www.youtube.com/embed/JHRiaKEYeis?autoplay=1');
  })
  $(".video_span_6").click(function(){
      $(".relation_content").attr('src','https://www.youtube.com/embed/BmBh0NNEm00?autoplay=1');
  })
  $(".video_selekt_buton span").click(function(){
      $(this).addClass('border_radius_nan');
  })
  $(".video_animation").hover(
  function(){//функция возникающая при входе мыши на элемент 
      $(".video_animation").addClass('video_animation_hover');
  },
    function(){//функция возникающая при выходе мыши с элемента 
     // $(".video_animation").removeClass('video_animation_hover');
  })
  $(".portfolio").hover(
  function(){//функция возникающая при входе мыши на элемент 
      $(".portfolio_1 button").addClass('portfolio_hover_1');
      $(".portfolio_2 button").addClass('portfolio_hover_2');
      $(".portfolio_3 button").addClass('portfolio_hover_3');
      $(".portfolio_4 button").addClass('portfolio_hover_4');
      $(".portfolio_5 button").addClass('portfolio_hover_5');
  },
    function(){//функция возникающая при выходе мыши с элемента 
     // $(".video_animation").removeClass('video_animation_hover');
  })
  $(".mail").hover(
  function(){//функция возникающая при входе мыши на элемент 
      $(".mail fieldset").addClass('mail_fieldset_hover');
  },
    function(){//функция возникающая при выходе мыши с элемента 
     $('.mail fieldset').removeClass('mail_fieldset_hover');
  })
  $(".slider").hover(
  function(){//функция возникающая при входе мыши на элемент 
      $(".slider_title").addClass('slider_title_hover');
  },
    function(){//функция возникающая при выходе мыши с элемента ".video_animation"
     // $(".video_animation").removeClass('video_animation_hover');
  })

  //калькулятор	
  $(".i").hover(
  function(){//функция возникающая при входе мыши на элемент 
      $(".kalkulator_h2").removeClass('video_animation_hover');
  },
    function(){//функция возникающая при выходе мыши с элемента ".video_animation"

  })
   var z_1600 = 1000
   var z_list = 1
   var z_1 = 0
   var z_2 = 0
   var z_3 = 0
   var z_4 = 0
   var z_5 = 0
   var z_21 = 0
   var z_22 = 0
   var z_23 = 0
   var z_24 = 0
   var z_25 = 0
   var z_31 = 0
   var z_32 = 0
   var z_33 = 0

   $('#select').change(function(){//получаем значение списка при его изменении
        z_list = $('#select option:selected').val();
        kalkulator()
   });

   function kalkulator(){ //формула подсчёта цены
     $(".cena").text((z_list*z_1600+z_1+z_2+z_3+z_4+z_5+z_21+z_22+z_23+z_24+z_25+z_31+z_32+z_33)+" р");  
   };

document.getElementById('i_1').onclick = function() {
    if ( this.checked ) {
    	 z_1 = 0
       kalkulator()
       $(".kalkulator_h2").addClass('video_animation_hover');
    } else {
    	z_1 = 0
    	kalkulator()
    }
};
document.getElementById('i_2').onclick = function() {
    if ( this.checked ) {
    	 z_2 = 0
       kalkulator()
       $(".kalkulator_h2").addClass('video_animation_hover');
    } else {
    	z_2 = 0
    	kalkulator()
    }
};
document.getElementById('i_3').onclick = function() {
    if ( this.checked ) {
    	 z_3 = 0
       kalkulator()
       $(".kalkulator_h2").addClass('video_animation_hover');
    } else {
    	z_3 = 0
    	kalkulator()
    }
};
document.getElementById('i_4').onclick = function() {
    if ( this.checked ) {
    	 z_4 = 500
       kalkulator()
    } else {
    	z_4 = 0
    	kalkulator()
    }
};

document.getElementById('i_21').onclick = function() {
    if ( this.checked ) {
    	 z_21 = 2000
       kalkulator()
    } else {
    	z_21 = 0
    	kalkulator()
    }
};
document.getElementById('i_22').onclick = function() {
    if ( this.checked ) {
    	 z_22 = 1
       kalkulator()
    } else {
    	z_22 = 0
    	kalkulator()
    }
};
document.getElementById('i_23').onclick = function() {
    if ( this.checked ) {
    	 z_23 = 1
       kalkulator()
    } else {
    	z_23 = 0
    	kalkulator()
    }
};
document.getElementById('i_24').onclick = function() {
    if ( this.checked ) {
    	 z_24 = 2000
       kalkulator()
    } else {
    	z_24 = 0
    	kalkulator()
    }
};
document.getElementById('i_41').onclick = function() {
    if ( this.checked ) {
    	 z_31 = 5000
       kalkulator()
    } else {
    	z_31 = 0
    	kalkulator()
    }
};
document.getElementById('i_42').onclick = function() {
    if ( this.checked ) {
    	 z_32 = 1
       kalkulator()
    } else {
    	z_32 = 0
    	kalkulator()
    }
};
// portfolio

 $('.portfolio_btn_1').click(function() {
     window.open("http://stomatologicheskiy-matras.ru/", "_blank");
 })
  $('.portfolio_btn_2').click(function() {
     window.open("http://doma.kirovkluch.ru/", "_blank");
 })
  $('.portfolio_btn_3').click(function() {
     window.open("http://manigor-stroy.ru/", "_blank");
 })
  $('.portfolio_btn_4').click(function() {
     window.open("http://zavodmetallokonstrukcii.ru/", "_blank");
 })
  $('.portfolio_btn_5').click(function() {
     window.open("http://domstroymsk.ru/", "_blank");
 })
  $('.portfolio_btn_6').click(function() {
     window.open("http://metallogranit.ru/", "_blank");
 })
  $('.portfolio_btn_7').click(function() {
     window.open("http://rusdiagnostika.ru/", "_blank");
 })
  $('.portfolio_btn_8').click(function() {
     window.open("http://johniphone.ru/", "_blank");
 })
  $('.portfolio_btn_9').click(function() {
     window.open("http://partner.antica.su/", "_blank");
 })
  $('.portfolio_btn_10').click(function() {
     window.open("http://apple-life.ru/", "_blank");
 })
  $('.portfolio_btn_11').click(function() {
     window.open("https://miele-official.ru/", "_blank");
 })
}; //window.onload = function()