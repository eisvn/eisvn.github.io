//Navigate
function homeClick(){
	loadHtml("home/index.html");
}

function aboutClick(){
	loadHtml("about/index.html");
}

function helpClick(){
	loadHtml("help/index.html");
}

function testClick(){
	appendJS('_script/DateExt.js?v=1');
	appendJS('test/_script/p_test.js?v=1');
	loadHtml("test/index.html");
}

function encClick(){
	appendJS('_library/CryptoJS/rollups/aes.js?v=1');
	appendJS('enc/_script/p_enc.js');
	
	loadHtml("enc/index.html");
}

//share function
function appendJS(src){
	var head= document.getElementsByTagName('head')[0];
	var script= document.createElement('script');
	script.type= 'text/javascript';
	script.src= src;
	head.appendChild(script);
}

function loadHtml(location) {
    var xmlhttp;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
	
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4) {
            if (xmlhttp.status == 200) {
                alert('success');
				document.getElementById("m-section").innerHTML=xmlhttp.responseText;
            } else {
				//alert(xmlhttp.status);
                //alert(xmlhttp.statusMessage + ':error: ' + xmlhttp.responseText);
				document.getElementById("m-section").innerHTML=xmlhttp.responseText;
            }
        }
    };
	
    xmlhttp.open("GET", location, true);
    xmlhttp.send();
}

//begin
document.addEventListener("DOMContentLoaded", function() {
	homeClick();
});