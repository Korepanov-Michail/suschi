
window.onload = function(){
	var inp_email = document.querySelector('input[name=email]');
	var inp_name = document.querySelector('input[name=name]');
	//var textarea_text = document.querySelector('textarea[name=text]');
  var params  ;
  
		$('.btn_email').click(function(){
			  params ='email='+inp_email.value + '&' + 'name='+inp_name.value;// + '&' + 'text='+textarea_text.value;
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

//http://localhost/mysite/ajax2/index.html
}

