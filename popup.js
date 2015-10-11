window.addEventListener('load', function() {
  // Initialize the option controls.
  popup.isActivated.checked = JSON.parse(localStorage.isActivated);
                                         // The display activation.
  popup.dark.value = localStorage.dark;
  popup.total.value = localStorage.total;
  
  // Set the display activation and frequency.
  popup.isActivated.onchange = function() {
    localStorage.isActivated = popup.isActivated.checked;
  };
  popup.dark.onchange = function() {
    console.log(localStorage.dark);
    localStorage.dark = popup.dark.value;
  };
  popup.total.onchange = function() {
    localStorage.total = popup.total.value;
  };
});
