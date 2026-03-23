const btnDarkMode = document.querySelector('.dark-mode-btn');

// 1. Проверка темной темы на уровне системных настроек
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add('dark');
    btnDarkMode.classList.add('dark-mode-btn--active');
}

// 2. Проверка темной темы в Local storage
if (localStorage.getItem('darkMode') === 'dark') {
    document.body.classList.add('dark');
    btnDarkMode.classList.add('dark-mode-btn--active');
} else if (localStorage.getItem('darkMode') === 'light') {
    document.body.classList.remove('dark');
    btnDarkMode.classList.remove('dark-mode-btn--active');
}

// Eсли пользователь изменил системные настройки, то меняем тему сайта
window
    .matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', event => {
    const newColorScheme = event.matches ? 'dark' : 'light';
    if (newColorScheme === 'dark') {
        document.body.classList.add('dark');
        btnDarkMode.classList.add('dark-mode-btn--active');
        localStorage.setItem('darkMode', 'dark');
        localStorage.setItem('systemDarkMode', 'dark');
    } else {
        document.body.classList.remove('dark');
        btnDarkMode.classList.remove('dark-mode-btn--active');
        localStorage.setItem('darkMode', 'light');
    }
});

// Включение ночного режима по кнопке
btnDarkMode.onclick = function () {
    btnDarkMode.classList.toggle('dark-mode-btn--active');
    const isDark = document.body.classList.toggle('dark');

if (isDark) {
    localStorage.setItem('darkMode', 'dark');
} else {
    localStorage.setItem('darkMode', 'light');
}
}