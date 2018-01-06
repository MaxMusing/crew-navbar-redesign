$navbarContentDesktop = $('.navbar-content--desktop');
$hamburgerMenuButton = $('.hamburger-menu-button');
$navbarItemDropdown = $('.navbar-item--dropdown');
$navbarDropdown = $('.navbar-dropdown');

$hamburgerMenuButton.click(function() {
	$hamburgerMenuButton.toggleClass('active');
	$navbarContentDesktop.toggleClass('active');
	$navbarContentDesktop.attr('aria-hidden', !$('.navbar-content--desktop').hasClass('active'));
});

$navbarItemDropdown.on('mouseover mouseleave focus blur', function() {
	const $dropdown = $(this).siblings('.navbar-dropdown');
	updateDropdown($dropdown);
});

$navbarDropdown.on('mouseover mouseleave focusin focusout', function() {
	updateDropdown($(this));
});

function dropdownHovered($dropdown) {
	return (
		($dropdown.is('.active') && $dropdown.is(':hover')) ||
		$dropdown.siblings('.navbar-item--dropdown').is(':hover')
	);
}

function dropdownFocused($dropdown) {
	return (
		$dropdown.find('.navbar-dropdown-item').is(':focus') ||
		$dropdown.siblings('.navbar-item--dropdown').is(':focus')
	);
}

function updateDropdown($dropdown) {
	if (dropdownHovered($dropdown) || dropdownFocused($dropdown)) {
		showDropdown($dropdown);
	} else {
		hideDropdown($dropdown);
	}
}

function showDropdown($dropdown) {
	$dropdown.addClass('active');
	$dropdown.attr('aria-hidden', false);
}

function hideDropdown($dropdown) {
	$dropdown.removeClass('active');
	$dropdown.attr('aria-hidden', true);
}
