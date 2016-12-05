$(function() {
	console.log("yeehaw");

	var grid = $('.grid');

	grid.isotope({
		// options
		itemSelector: '.tile',
		layoutMode: 'fitRows'
	});

	$('.filter-button-group').on( 'click', 'button', function() {
		var filterValue = $(this).attr('data-filter');
		grid.isotope({ filter: filterValue });
		console.log("clicked it " + filterValue);
	});
});
