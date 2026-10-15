const themeStyles = {
  light: 'default.css',
  blue: 'themes/blue.css',
  green: 'themes/green.css',
  purple: 'themes/purple.css',
};

const themeDots = document.querySelectorAll('.theme-dot');
const savedTheme = localStorage.getItem('theme');
const initialTheme = savedTheme && themeStyles[savedTheme] ? savedTheme : 'light';

setTheme(initialTheme);

themeDots.forEach((button) => {
  button.addEventListener('click', () => {
    setTheme(button.dataset.mode);
  });
});

function setTheme(mode) {
  const stylesheet = themeStyles[mode];
  if (!stylesheet) {
    return;
  }

  document.getElementById('theme-style').href = stylesheet;
  themeDots.forEach((button) => {
    button.setAttribute('aria-pressed', String(button.dataset.mode === mode));
  });
  localStorage.setItem('theme', mode);
}