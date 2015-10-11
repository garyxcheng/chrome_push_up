// Conditionally initialize the options.
if (!localStorage.isInitialized) {
  localStorage.isActivated = true;   // The display activation.
  localStorage.total = 3;        
  localStorage.dark = 2;
  localStorage.isInitialized = true; // The option initialization.
}
var timer = parseInt(localStorage.total), minutes, seconds;
var darkened = false;
console.log("abc");
setInterval(function () {
    duration = parseInt(localStorage.total);
    dark = parseInt(localStorage.dark);
    if(JSON.parse(localStorage.isActivated)){
        if(--timer < 0){
            darkened = false;
            timer = duration;
        }
        else if(timer == dark){
            darkened = true;
        }
        sendMsg(timer, darkened);
        /*
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        duration = parseInt(localStorage.total);
        dark = parseInt(localStorage.dark);
        if (--timer < 0) {
            timer = duration;
            createOverlay();
        } else if (timer == dark){
            removeOverlay();
        }*/
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
function sendMsg(time, darkened){
    if(darkened == true){
        chrome.tabs.query({}, function(tabs) {
	        for(var i = 0; i < tabs.length; i++){
		        chrome.tabs.sendMessage(tabs[i].id, {please: String(time)}, function(response) {

		        });
	        }
	    });
    } else {
        chrome.tabs.query({}, function(tabs) {
	        for(var i = 0; i < tabs.length; i++){
		        chrome.tabs.sendMessage(tabs[i].id, {please: "0"}, function(response) {

		        });
	        }
	    });
    }
}

/*
function createOverlay(){
  chrome.tabs.query({}, function(tabs) {
    for(var i = 0; i < tabs.length; i++){    
        chrome.tabs.sendMessage(tabs[i].id, {please: "createDiv"}, function(response) {
          
        });
    }
  });
}

function removeOverlay(){
   chrome.tabs.query({}, function(tabs) {
    for(var i = 0; i < tabs.length; i++){    
      chrome.tabs.sendMessage(tabs[i].id, {please: "removeDiv"}, function(response) {
      
      });
    }
  });
}
*/
