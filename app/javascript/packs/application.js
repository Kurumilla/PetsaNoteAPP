// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import 'materialize-css/dist/js/materialize'
import "./stylesheets/application.scss";

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

import './tooltips';
import './order';

Rails.start()
Turbolinks.start()
ActiveStorage.start()

console.log('Webpacker is working!');

document.addEventListener('turbolinks:load', function () {
  M.updateTextFields();

  console.log('Webpacker is working!');
  let elems = document.querySelectorAll('.materialize-textarea')
  if (elems.length) {
    elems.forEach(elem => M.textareaAutoResize(elem))
  }

  const themeToggle = document.getElementById("theme-toggle");

  const isDarkMode = localStorage.getItem("darkMode") === "true";
  if (isDarkMode) {
    document.body.classList.add("dark-mode");
    if (themeToggle) themeToggle.textContent = window.translations.dark_mode;
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const isDarkMode = document.body.classList.toggle("dark-mode");
      themeToggle.textContent = isDarkMode ? window.translations.light_mode : window.translations.dark_mode;
      localStorage.setItem("darkMode", isDarkMode);
    });
  }

  const savedLocale = localStorage.getItem('language');
  if (savedLocale) {
    document.documentElement.lang = savedLocale;
  }

  
})