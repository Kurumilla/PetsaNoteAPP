document.addEventListener('turbolinks:load', function() {
  const sidenavElems = document.querySelectorAll('.sidenav');
  M.Sidenav.getInstance(sidenavElems[0])?.destroy();
  const sidenavInstances = M.Sidenav.init(sidenavElems);

  document.querySelectorAll('.sidenav a').forEach(link => {
    link.addEventListener('click', () => {
        sidenavInstances[0].close();
    });
  });
});

document.addEventListener('turbolinks:visit', function() {
  var elems = document.querySelectorAll('.sidenav');
  elems.forEach(elem => {
      var instance = M.Sidenav.getInstance(elem);
      if (instance) instance.destroy();
  });
});