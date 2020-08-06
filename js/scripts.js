$(document).ready(function () {

	$("form#beverageForm").submit(function (e) { 
		e.preventDefault();
		const beverage = $("#beverageOpts").val();
		alert("You've chosen " + beverage + "!");
	});

});