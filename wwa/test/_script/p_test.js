function btnCountDaysClick() {
	var startDate = new Date(document.getElementsByName('txtDateStart')[0].value);
	var endDate = new Date(document.getElementsByName('txtDateEnd')[0].value);
	var result = workingDaysBetweenDates(startDate, endDate);
	var content = "Results: " + result;
	document.getElementsByName('lblResult')[0].innerText  = content;
}