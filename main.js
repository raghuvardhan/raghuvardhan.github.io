// Initial setup: Check if user has a preferred theme in local storage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  document.body.setAttribute('data-theme', savedTheme);
}

// Reference to the toggle button
const toggleButton = document.getElementById('theme-toggle');

// Event listener for button click
toggleButton.addEventListener('click', () => {
  // Check current theme
  const currentTheme = document.body.getAttribute('data-theme');
  
  // Toggle theme and update the attribute
  if (currentTheme === 'dark') {
    document.body.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');  // Save preference
  } else {
    document.body.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');  // Save preference
  }
});
