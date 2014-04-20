//global variable for js
var gAlertStartT= 200; //time fade in
var gAlertCloseT = 400; //time fade out
var gAlertDelayT = 10000; //time before auto close
var UNABLE_ACCESS = 'Không thể tải trang'; //unable load html by ajax
var UNABLE_SETCONTENT = 'Không thể nạp trang'; //error load var (html) into div
var HOSTNAME = 'localhost:29967';

//config menu
$(function() {
    $('#side-menu').metisMenu();
});

//Loads the correct sidebar on window load,
//collapses the sidebar on window resize.
$(function() {
    $(window).bind("load resize", function() {
        width = (this.window.innerWidth > 0) ? this.window.innerWidth : this.screen.width;
        if (width < 768) {
            $('div.sidebar-collapse').addClass('collapse');
        } else {
            $('div.sidebar-collapse').removeClass('collapse');
        }
    });
});

//load any page as modal
function loadModal(width, htmlPath) {
    showWating();
    closeAllAlert();
    $('#customModal').modal({
        backdrop: 'static',
        keyboard: false
    });
    $('#customModal').empty();
    $.ajax({
        url: htmlPath,
        type: 'GET',
        dataType: "html",
        success: function (results) {
            $('#customModal').html($(results).filter('#all').html());
            hideWating();
            $('#customModal').modal('show');
        },
        error: function (a) {
            hideWating();
            displayAnAlert('alert-danger', 0, UNABLE_ACCESS);
        }
    });
}

//Display custom alert
//type la alert-info, alert-warning, alert-danger or alert-success
function displayAnAlert(type, isAutoClose, msg) {
    $('#alertContainer').empty();
    $('#alertContainer').append('<div class="alert ' + type + ' alert-dismissable">' +
        '<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' +
        '<span>' + msg + '</span>' +
        '</div>');
    $('#alertContainer').fadeIn(gAlertStartT);
}

//hide alert on master
function closeAllAlert() {
    $('#alertContainer').fadeOut(gAlertCloseT);
}

//show wating
function showWating() {
    $('#waitingNotify').show();
}
//hide wating
function hideWating() {
    $('#waitingNotify').hide();
}


$(document).ready(function () {
    //load default page
    //showWating();
    //$('#contentPlaceHolder').load('/response/test.txt', '',
    //    function (responseText, textStatus) {
    //        if (textStatus == "error") {
    //            displayAnAlert('alert-danger', 0, UNABLE_ACCESS);
    //        }
    //    });
    //hideWating();

    //click to display popup modal
    //tao vi tri
    $('#lkNewLoc').click(function () {
        loadModal(0, '/open/manager/inventory/advance/add-loc.html');
    });

    //tao kho
    $('#lkNewInv').click(function () {
        loadModal(0, '/open/manager/inventory/advance/add-inv.html');
    });
});

