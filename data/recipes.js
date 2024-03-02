// placeholder in case I need it.
// TODO: Add rendomise button to select a recipe
// TODO: Add named timer/s (if useful) 

// Basic script for any dynamic functionality you might add later
document.addEventListener('DOMContentLoaded', () => {
  console.log('Document is ready!');
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err))
  })
}