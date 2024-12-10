document.addEventListener('turbolinks:load', function() {
    M.Tooltip.init(document.querySelectorAll('.tooltipped'));
  });