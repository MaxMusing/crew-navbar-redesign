const dropdownTriggers = document.querySelectorAll('.navbar-item--dropdown');
const dropdowns = document.querySelectorAll('.navbar-dropdown');

dropdownTriggers.forEach(function(dropdownTrigger) {
	const dropdown = dropdownTrigger.nextElementSibling;

	dropdownTrigger.addEventListener('mouseover', function(event) {
		dropdown.classList.add('active');
	});

	dropdownTrigger.addEventListener('mouseleave', function(event) {
		dropdown.classList.remove('active');
	});
});

dropdowns.forEach(function(dropdown) {
	dropdown.addEventListener('mouseover', function(event) {
		dropdown.classList.add('active');
	});

	dropdown.addEventListener('mouseleave', function(event) {
		dropdown.classList.remove('active');
	});
});
