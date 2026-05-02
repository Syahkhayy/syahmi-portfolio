/**
 * script.js — Portfolio interactions
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Select the theme toggle elements
  const themeToggleBtn = document.getElementById('theme-toggle');
  const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
  const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

  // 2. Determine the initial theme
  // We check localStorage first, then fallback to system preference
  if (
    localStorage.getItem('color-theme') === 'dark' ||
    (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    // Show the Sun icon because we are in Dark mode
    themeToggleLightIcon.classList.remove('hidden');
    document.documentElement.classList.add('dark');
  } else {
    // Show the Moon icon because we are in Light mode
    themeToggleDarkIcon.classList.remove('hidden');
    document.documentElement.classList.remove('dark');
  }

  // 3. Handle the click event
  themeToggleBtn.addEventListener('click', function () {
    // Toggle icons inside button
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');

    // If is currently in dark mode (has .dark class)
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('color-theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('color-theme', 'dark');
    }
  });

  // 4. Project Card Expansion
  const projectCards = document.querySelectorAll('.project-card.active');
  projectCards.forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('expanded');
    });
  });

  console.log('Interactions initialized ✓');
});
