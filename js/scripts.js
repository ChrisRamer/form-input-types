$(document).ready(function () {

	$("form#beverageForm").submit(function (e) { 
		e.preventDefault();
		const beverage = $("#beverageOpts").val();
		alert("You've chosen " + beverage + "!");
	});

	$("form#icecreamFlavor").submit(function (e) { 
		e.preventDefault();
		
		const iceCream = $("input:radio[name=flavor]:checked").val();
		alert("You've chosen " + iceCream + "!");
	});

});