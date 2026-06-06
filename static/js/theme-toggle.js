document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('[data-theme-toggle]');
  const label = document.querySelector('[data-theme-label]');
  const icon = toggle ? toggle.querySelector('i') : null;
  const storageKey = 'anyviewdex-theme';

  if (!toggle) {
    return;
  }

  const setTheme = (theme) => {
    const nextTheme = theme === 'dark' ? 'dark' : 'light';
    const isDark = nextTheme === 'dark';

    document.body.dataset.theme = nextTheme;
    toggle.setAttribute('aria-pressed', String(isDark));
    toggle.setAttribute('aria-label', isDark ? 'Switch to light view' : 'Switch to night view');

    if (label) {
      label.textContent = isDark ? 'Light view' : 'Night view';
    }

    if (icon) {
      icon.className = isDark ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
    }

    try {
      localStorage.setItem(storageKey, nextTheme);
    } catch (error) {
      // Local storage can be unavailable in private browsing modes.
    }
  };

  let preferredTheme = 'light';
  try {
    preferredTheme = localStorage.getItem(storageKey) || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  } catch (error) {
    preferredTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  setTheme(preferredTheme);

  toggle.addEventListener('click', () => {
    const nextTheme = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
  });
});