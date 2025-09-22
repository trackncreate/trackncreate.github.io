// theme.js
(function() {
  // Apply theme immediately to prevent flash
  const savedTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
    document.documentElement.classList.add('dark-theme-init');
  }
})();

document.addEventListener('DOMContentLoaded', function() {
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;
  
  // Transfer the initial theme class to body
  if (document.documentElement.classList.contains('dark-theme-init')) {
    body.classList.add('dark-theme');
    document.documentElement.classList.remove('dark-theme-init');
  }
  
  // Apply saved theme
  const applyTheme = () => {
    const storedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (storedTheme === 'dark' || (!storedTheme && systemPrefersDark)) {
      body.classList.add('dark-theme');
    } else {
      body.classList.remove('dark-theme');
    }
  };
  
  // Toggle theme
  const toggleTheme = () => {
    body.classList.toggle('dark-theme');
    const isDark = body.classList.contains('dark-theme');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  };
  
  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }
  
  // Apply theme on load
  applyTheme();
});
