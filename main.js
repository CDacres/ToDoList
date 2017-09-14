

var myForm = $('#myForm');
myForm.submit(function (event){
	event.preventDefault();
	var submittedItem = $('#listAdd');
	var listItem = $("<li></li>");
	listItem.html(submittedItem.val());
	$('ul').append(listItem);
	submittedItem.val('');

});