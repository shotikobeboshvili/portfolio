const toggleButton = document.getElementById('toggle');
const navMenu = document.getElementById('nav_menu');

// ღილაკზე click მოვლენაზე მოსმენა
toggleButton.addEventListener('click', () => {
  navMenu.classList.toggle('show-menu'); // კლასი "open"-ის დამატება ან მოხსნა
});