document.addEventListener('turbolinks:load', function() {
  const themeToggles = document.querySelectorAll("#theme-toggle"); 

  const isDarkMode = localStorage.getItem("darkMode") === "true";
  if (isDarkMode) {
    document.body.classList.add("dark-mode");
    themeToggles.forEach((toggle) => {
      toggle.textContent = window.translations.light_mode;
    });
  }

  themeToggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const isDarkMode = document.body.classList.toggle("dark-mode");
      themeToggles.forEach((btn) => {
        btn.textContent = isDarkMode
          ? window.translations.light_mode
          : window.translations.dark_mode;
      });
      localStorage.setItem("darkMode", isDarkMode);
    });
  });
});