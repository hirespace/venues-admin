
// Mobile device side nav magic
$(document).on("click", ".side-nav li.active", function() {
	$('.side-nav li:not(.active)').removeClass('hide-sm');
});

$(document).on("click", ".side-nav li:not(.active)", function() {
	$(this).removeClass('hide-sm');
	$('.side-nav li:not(.active)').addClass('hide-sm');
});