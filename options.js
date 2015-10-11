/*function ghost(isDeactivated) {
  options.style.color = isDeactivated ? 'graytext' : 'black';
                                              // The label color.
  options.frequency.disabled = isDeactivated; // The control manipulability.
}*/

window.addEventListener('load', function() {
  // Initialize the option controls.
  options.isActivated.checked = JSON.parse(localStorage.isActivated);
                                         // The display activation.
  options.dark.value = localStorage.dark;
  options.total.value = localStorage.total;
  
  // Set the display activation and frequency.
  options.isActivated.onchange = function() {
    localStorage.isActivated = options.isActivated.checked;
  };
  options.dark.onchange = function() {
    localStorage.dark = options.dark.value;
  };
  options.total.onchange = function() {
    localStorage.total = options.total.value;
  };
});
