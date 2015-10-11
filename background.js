// Conditionally initialize the options.
if (!localStorage.isInitialized) {
  localStorage.isActivated = true;   // The display activation.
  localStorage.light = 3;        
  localStorage.dark = 2;
  localStorage.isInitialized = true; // The option initialization.
}
var timer = 0, minutes, seconds;
setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    if(JSON.parse(localStorage.isActivated)){
        console.log(timer);
        duration = parseInt(localStorage.dark) + parseInt(localStorage.light);
        dark = parseInt(localStorage.dark);
        if (--timer < 0) {
            timer = duration;
            createOverlay();
        } else if (timer == dark){
            removeOverlay();
        }
    }
}, 1000);
/*
window.onload = function () {
    var time = 5;
    var dark = 2;
    startTimer(time, dark);
};
function startTimer(duration, dark) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        if JSON.parse(localStorage.isActivated){
            if (--timer < 0) {
                timer = duration;
                createOverlay();
            } else if (timer == dark){
                removeOverlay();
            }
        }
    }, 1000);
}*/

function createOverlay(){
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {please: "createDiv"}, function(response) {
      
    });
  });
}

function removeOverlay(){
   chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {please: "removeDiv"}, function(response) {
      
    });
  });
}
