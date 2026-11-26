(function () {
  var el = document.getElementById('currentYear');
  if (el) el.textContent = String(new Date().getFullYear());
})();