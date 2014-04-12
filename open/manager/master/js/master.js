//global variable for js
var gAlertStartT= 200; //time fade in
var gAlertCloseT = 400; //time fade out
var gAlertDelayT = 10000; //time before auto close
var UNABLE_ACCESS = 'Không thể tải trang'; //lỗi khi load html bằng ajax
var UNABLE_SETCONTENT = 'Không thể nạp trang';

var myApp;
myApp = myApp || (function () {
	var pleaseWaitDiv = $('#pleaseWaitDialog');
	return {
		showPleaseWait: function () {
			pleaseWaitDiv.modal();
		},
		hidePleaseWait: function () {
			pleaseWaitDiv.modal('hide');
		},

	};
})();

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

$(document).ready(function () {
    //nap thong tin trang mac dinh
    showWating();
    $('#contentPlaceHolder').load('Content1.html', '',
        function (responseText, textStatus) {
            if (textStatus == "error") {
                displayAnAlert('alert-danger', 0, UNABLE_ACCESS);
            }
        });
    hideWating();

    //thiet lap thuoc tinh modal


    //click to display popup modal
    $('#btnThemKho').click(function () {
        closeAllAlert();
        showWating();
        $('#customModal').modal({
            backdrop: 'static',
            keyboard: false
        });
        loadModal(0, '../inventory/advance/add-inv.html');
    }); //end button click event

    $('#btnBangTinh').click(function () {
        closeAllAlert();
        showWating();
        $('#customModal').modal({
            backdrop: 'static',
            keyboard: false
        });
        loadModal(0, 'handsontable.html');
    }); //end button click event
});
//ham load trang web tu server va hien thi dang modal popup
function loadModal(width, htmlPath) {
    $.ajax({
        url: htmlPath,
        type: 'GET',
        dataType: "html",
        success: function (results) {
            $('#customModal').empty();
            $('#customModal').html($(results).filter('#all').html());
            //$('#customModalFooter').html($(results).filter('#footer').html());
            hideWating();
            $('#customModal').modal('show');
        },
        error: function (a) {
            hideWating();
            displayAnAlert('alert-danger', 0, UNABLE_ACCESS); //ko thể truy cập máy chủ
            alert(a.responseText);
        }
    }); //end call ajax
}

//XU LY MAIN ALERT
//Hien thi alert, type la alert-info, alert-warning, alert-danger hay alert-success
function displayAnAlert(type, isAutoClose, msg) {
    $('#alertContainer').empty();
    $('#alertContainer').append('<div class="alert ' + type + ' alert-dismissable">' +
        '<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' +
        '<span>' + msg + '</span>' +
        '</div>');
    //$('#alertContainer .alert .close').click(function () {
    //    closeAllAlert();
    //});
    $('#alertContainer').fadeIn(gAlertStartT);
}

//hide alert programming
function closeAllAlert() {
    $('#alertContainer').fadeOut(gAlertCloseT);
}

//PROGRESS BAR
//display progress bar
function showWating() {
    //myApp.showPleaseWait();
    //$('#progressBar').show();
}
//close progress bar
function hideWating() {
    //myApp.hidePleaseWait();
    //$('#progressBar').hide();
}
