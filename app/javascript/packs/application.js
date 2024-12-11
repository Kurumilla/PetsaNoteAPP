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
import './sidenav';
import './theme';

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

  const savedLocale = localStorage.getItem('language');
  if (savedLocale) {
    document.documentElement.lang = savedLocale;
  }
})




