$(function() {
	console.log("yeehaw");

	var grid = $('.grid');

	grid.isotope({
		// options
		itemSelector: '.tile',
		layoutMode: 'fitRows',
		getSortData: {
			name: function(element) {
				return $(element).find('.name').text().toLowerCase();
			}
		}
	});

	$('.filter-button-group').on( 'click', 'button', function() {
		var filterValue = $(this).attr('data-filter');
		grid.isotope({ filter: filterValue });
	});

	$('.alphabetical-sort').on('click', function() {
		grid.isotope({ sortBy: 'name' });
	})

	$('.search-name').on('input', function() {
		var text = $(this).val();
		grid.isotope({filter: function() {
			window.scrollTo(0, 0);
			var name = $(this).find('.name').text();
			return name.match(new RegExp(text, 'i'));
		}});
	});
});
