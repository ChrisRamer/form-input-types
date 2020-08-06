$(document).ready(function () {

	// Dropdown
	$("form#beverageForm").submit(function (e) { 
		e.preventDefault();
		const beverage = $("#beverageOpts").val();
		alert("You've chosen " + beverage + "!");
	});

	// Radio buttons
	$("form#icecreamFlavor").submit(function (e) { 
		e.preventDefault();
		
		const iceCream = $("input:radio[name=flavor]:checked").val();
		alert("You've chosen " + iceCream + "!");
	});

	// Date
	$("form#dateForm").submit(function (e) { 
		e.preventDefault();
		
		const dob = $("#born").val();
		alert("Your birthday is: " + dob + "!");
	});

});