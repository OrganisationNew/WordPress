
function sendOnlineSms(quiz,c,cam,p,dd)
{
		
	var salt = CryptoJS.lib.WordArray.random(128/8).toString(CryptoJS.enc.Hex);
	var iv = CryptoJS.lib.WordArray.random(128/8).toString(CryptoJS.enc.Hex);
    var aesUtil = new AesUtil(128, 1000);
    var smsdt = aesUtil.encrypt(salt, iv, "SmsSecKey", p);	
	smsdt = smsdt.replace(/[+]/g, "-");
    smsdt = smsdt.replace(/[/]/g, "_");	
	var date = new Date();				
	var dformat = [(date.getMonth()+1).padLeft(),
               date.getDate().padLeft(),
               date.getFullYear()].join('-') +' ' +
              [date.getHours().padLeft(),
               date.getMinutes().padLeft(),
               date.getSeconds().padLeft()].join(':');
	
	var resultMessage = "Click the link to finalize your Penny Contest Entry and receive your 15percentage OFF discount code! bit.ly/2fMopdw";	                           	
	var url3 =  'https://skoollive.revelive.com/FileConsolidate/admin/processCsv?resultMessage=' + resultMessage+ '&smsdt=' + smsdt + '&first=' + salt+ '&second=' + iv + '&q=' + quiz + '&client=' + c + '&campaign=' + cam+ '&serNo=' + dd+ '&kioskdt=' + dformat+'&callback=?';	
	$.getJSON(url3,onSendCommand2);  

    function onSendCommand2(myData)
	  {
		
	  }
}
Number.prototype.padLeft = function(base,chr){
    var  len = (String(base || 10).length - String(this).length)+1;
    return len > 0? new Array(len).join(chr || '0')+this : this;
}