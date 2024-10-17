const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  document.body.setAttribute('data-theme', savedTheme);
}

const toggleButton = document.getElementById('darkModeToggle');

toggleButton.addEventListener('click', () => {
  const currentTheme = document.body.getAttribute('data-theme');
  
  if (currentTheme === 'dark') {
    document.body.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');  // Save preference
  } else {
    document.body.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');  // Save preference
  }
});
