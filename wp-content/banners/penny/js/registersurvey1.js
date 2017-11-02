
$(document).ready(function () {

	$('#frmsubmit1').prop('disabled', false);
		
	$('#phoneid1').keyboard({
	  layout : 'number',
      preventPaste: true,
      autoAccept: true
    })
    .addTyping();
	
	
	$.keyboard.layouts = {
		'alpha' : {
			'default': [
				'q w e r t y u i o p ',
				'a s d f g h j k l',
				'{s} z x c v b n m {b}',
				'{cancel} {space}  {accept}'
			],
			'shift': [
				'Q W E R T Y U I O P',
				'A S D F G H J K L',
				'{s} Z X C V B N M {b}',
				'{cancel} {space}  {accept}'
			]
		},
			'number' : {
			'default' : [
				
				'1 2 3 ' ,
				'4 5 6 ' ,
				'7 8 9 ' ,
				'{b} 0 {a}',
								
				
			]
		}
	};
	
	
	
	$('#keyboardmain').draggable({ containment: 'parent' });
	
	$( "input[name='phone1']").change(function()  {
		
   var nw = formatPh(document.forms[0].phoneid1.value);
   if(nw != undefined){
		document.forms[0].phoneid1.value =nw;
	}
	});
	
	
	
	
	$('#22inch').click(function(){
		
		$('#homePage').hide();
		$('#PennySkate22').show();
		
	});
	
	
	$(".borderover").click(function() {				
		$('.borderover').removeClass('selected');
        $(this).addClass('selected');
		$('#career').val($(this).attr("value"));
		
	});

	$('#frmsubmit1').click(function(){
		
		$('#frmsubmit1').prop('disabled', true);
		
		var p=$("#phoneid1").val();
		var board=$("#career").val();
		var c=$("#client").val();
		var cam=$("#campaign").val();		
		var flag = true;
		
		p =  p.replace('-', '');
		p =  p.replace('(', '');
		p =  p.replace(')', '');
			  
		var phoneno = /^\d{10}$/;	
	
		if( board == '')
		{
			$('#errorMsg').css("display","block");
			$('#errorMsg').html("Please select a board first");
			$('#frmsubmit1').prop('disabled', false);
			return false;
			
		}
		if( p == '')
		{
				
			$('#errorMsg').css("display","block");
			$('#errorMsg').html("Enter a valid US number");
			$('#frmsubmit1').prop('disabled', false);
			return false;
			 
			
		} else if(!(p.length == 10)) {
			
			$('#errorMsg').css("display","block");
			$('#errorMsg').html("Enter a valid US number");
			$('#frmsubmit1').prop('disabled', false);
			return false;
        }
		else{
				
			$('#errorMsg').css("display","none");
			$('#frmsubmit1').prop('disabled', false);
			}
		
			
		
		if(flag){
			
			submit();
		}
		
		
	function submit() {

			var i = new Image();
			i.src = 'http://www.google-analytics.com/__utm.gif';
            i.onload = onLine;
            i.onerror = chkLine;          
                
       }
          

	function chkLine() {
		
		var i = new Image();
			i.src = 'https://skoollive.revelive.com/FileConsolidate/images/__utm.gif';
            i.onload = onLine;
            i.onerror = offLine;   
	}	
			
			
		function onLine() {
			
			var aesUtil = new AesUtil(128, 1000);
			var chkArr = {};                                                                                                                  
            var val = "";
			chkArr["State"] = "unknown";
            chkArr["District Name"] = "unknown";
			chkArr["School Info"] ="unknown";
			chkArr["Kiosk No"] = "unknown";			
            chkArr["Computer No"] = "unknown";
			chkArr["Client"] = c ;
			chkArr["Campaign Name"] = cam;
			chkArr["Sms Id"] = "Penny Contest";		
			val = aesUtil.encrypt("4d1b6c1cb48f469ee02bfdafea254cb7", "9939b016bed8699f9f59b69645755f48", "SecKey", p);	
			val = val.replace(/[=]/g, "~");
			val = val.replace(/[+]/g, "-");
			val = val.replace("/", "^");	
			var phonenum = aesUtil.encrypt("4d1b6c1cb48f469ee02bfdafea254cb7", "9939b016bed8699f9f59b69645755f48", "SecKey", "phone");	
			phonenum = phonenum.replace(/[=]/g, "~");
			phonenum = phonenum.replace(/[+]/g, "-");
			phonenum = phonenum.replace("/", "^");
			chkArr[phonenum] =val;
			val="";
			val = aesUtil.encrypt("4d1b6c1cb48f469ee02bfdafea254cb7", "9939b016bed8699f9f59b69645755f48", "SecKey", board);	
			val = val.replace(/[=]/g, "~");
			val = val.replace(/[+]/g, "-");
			val = val.replace("/", "^");	
			var sboard = aesUtil.encrypt("4d1b6c1cb48f469ee02bfdafea254cb7", "9939b016bed8699f9f59b69645755f48", "SecKey", "Board");	
			sboard = sboard.replace(/[=]/g, "~");
			sboard = sboard.replace(/[+]/g, "-");
			sboard = sboard.replace("/", "^");
			chkArr[sboard] =val;
			val="";
			chkArr["Sms Status"] = "unknown";
			chkArr["enc"] = "yes";
		
		
			var quiz=JSON.stringify(chkArr);
			$.post('../AutoFormServlet',{q:quiz,client:c,campaign:cam,onlinecheck:"true"},function(dd) {
			
			if(dd!=""){
			
			chkArr = {};
			chkArr["State"] = "unknown";
			chkArr["District Name"] = "unknown";
			chkArr["School Info"] ="unknown";
			chkArr["Kiosk No"] = "unknown";			
			chkArr["Computer No"] = "unknown";
			chkArr["Client"] = c ;
			chkArr["Campaign Name"] = cam;
			chkArr["Sms Id"] = "Penny Contest";
			 if (p!=''){ 
			
			val =val.concat(p);
				
			}
			chkArr["phone"] =val;	
			val ="";
			chkArr["Board"] =board;	
			val ="";
			chkArr["Sms Status"] = "unknown";
			var quiz=JSON.stringify(chkArr);
			
			smsOnlineProcess(quiz,c,cam,p,dd);
		
			}else{
					
			$.post('../AutoFormServlet',{q:quiz,client:c,campaign:cam,onlinecheck:"false"},function(dd1) {
			});
			$("#phoneid1").val('');
		}			
					
		});
		
		
		}
		
		
		
		
		function offLine() {
			var aesUtil = new AesUtil(128, 1000);
			var chkArr = {};                                                                                                                  
            var val = "";
			chkArr["State"] = "unknown";
            chkArr["District Name"] = "unknown";
			chkArr["School Info"] ="unknown";
			chkArr["Kiosk No"] = "unknown";			
            chkArr["Computer No"] = "unknown";
			chkArr["Client"] = c ;
			chkArr["Campaign Name"] = cam;
			chkArr["Sms Id"] = "Penny Contest";
			val = aesUtil.encrypt("4d1b6c1cb48f469ee02bfdafea254cb7", "9939b016bed8699f9f59b69645755f48", "SecKey", p);	
			val = val.replace(/[=]/g, "~");
			val = val.replace(/[+]/g, "-");
			val = val.replace("/", "^");	
			var phonenum = aesUtil.encrypt("4d1b6c1cb48f469ee02bfdafea254cb7", "9939b016bed8699f9f59b69645755f48", "SecKey", "phone");	
			phonenum = phonenum.replace(/[=]/g, "~");
			phonenum = phonenum.replace(/[+]/g, "-");
			phonenum = phonenum.replace("/", "^");
			chkArr[phonenum] =val;
			val="";
			val = aesUtil.encrypt("4d1b6c1cb48f469ee02bfdafea254cb7", "9939b016bed8699f9f59b69645755f48", "SecKey", board);	
			val = val.replace(/[=]/g, "~");
			val = val.replace(/[+]/g, "-");
			val = val.replace("/", "^");	
			var sboard = aesUtil.encrypt("4d1b6c1cb48f469ee02bfdafea254cb7", "9939b016bed8699f9f59b69645755f48", "SecKey", "Board");	
			sboard = sboard.replace(/[=]/g, "~");
			sboard = sboard.replace(/[+]/g, "-");
			sboard = sboard.replace("/", "^");
			chkArr[sboard] =val;
			val="";
			chkArr["Sms Status"] = "unknown";	
			chkArr["enc"] = "yes";
			var quiz=JSON.stringify(chkArr);
			
			$.post('../AutoFormServlet',{q:quiz,client:c,campaign:cam,onlinecheck:"false"},function(dd1) {
				});
		  $("#phoneid1").val('');
		  
		}
		if( p.length == 10 && board!='')
		{
		$("#phoneid1").val('');
		$("#career").val('');
		$('.borderover').removeClass('selected');
		$('#homePage').show();
		$('#PennySkate22').hide();
		
		}
		
			
		});	
	
    });
	

	

function smsOnlineProcess(a,b,c,d,e){	
	sendOnlineSms(a,b,c,d,e);
}


function formatPh(val){

var nums=new Array('document.forms[0].phoneid1');

var re= /\D/;
var re2 = /^\({1}\d{3}\)\d{3}-\d{4}/; 
var num = val;


var newNum;
 if (num != "" && re2.test(num)!=true){
   if (num != ""){
     while (re.test(num)){
     num = num.replace(re,"");
     }
   }

  if (num.length != 10){
    
	$('#errorMsg').css("display","block");
	$('#errorMsg').html("Enter a valid US number");
    eval(nums[0]).select();
    return num;
    }
   else {
    
     newNum = '(' + num.substring(0,3) + ')' + num.substring(3,6) + '-' + num.substring(6,10);
    $('#errorMsg').css("display","none");
	return newNum;
	 
     }
   }

}



/*mouse draggable */	
$('html').click(function() {
	$('#keyboardmain').draggable({ containment: 'parent' });
});



