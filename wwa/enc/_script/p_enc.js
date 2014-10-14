function btnOpenClick(){
	var content = document.getElementsByName("encContent")[0].innerText;
	var password = document.getElementsByName("txtPassword")[0].innerText;
	var encrypted = CryptoJS.AES.encrypt(content, password);
	var decrypted = CryptoJS.AES.decrypt(encrypted, password);
	
	//document.getElementsByName("encContent")[0].innerText=encrypted;
	document.getElementsByName("encContent")[0].innerText=decrypted;
}