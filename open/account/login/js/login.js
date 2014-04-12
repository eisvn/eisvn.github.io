window.onload = function () {
    document.getElementById('txtUserName').focus();
};

//start process login
function login() {
    var state = document.getElementById('btnLogin').disabled;
    if (state != true) { //neu dang enable
        document.getElementById('btnLogin').disabled = true;
        document.getElementById('imgProgress').style.visibility = 'visible';
        //call ajax kiem tra quyen va xu ly du lieu tra ve
        callAjax();
    }
    return false;
}

//Check username and pass that user input
function callAjax() {
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
                //document.getElementById("lblInfo").innerHTML = xmlhttp.responseText;
            } else {
                alert(xmlhttp.statusMessage + ':error: ' + xmlhttp.responseText);
            }
            document.getElementById('btnLogin').disabled = false;
            document.getElementById('imgProgress').style.visibility = 'hidden';
        }
    };
    xmlhttp.open("POST", "http://eisvn.github.io/index.html", true);
    xmlhttp.send();
}