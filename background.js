
function startTimer(duration) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        if (--timer < 0) {
            timer = duration;
            createOverlay();
        }
	/*
	else if (timer==3){
	    removeOverlay();
	    }*/

    }, 1000);
}

window.onload = function () {
    var time = 5;
    startTimer(time);
};

function createOverlay(){
    chrome.tabs.query({active.true,currentWindow:true}, function(tabs){
	    chrome.tabs.sendMessage(tabs[0].id,{please:"createDiv"}, function(respons){
		    console.log(respons.farewell);
		});
	});
}

function removeOverlay(){
    chrome.tabs.query({active.true,currentWindow:true}, function(tabs){
            chrome.tabs.sendMessage(tabs[0].id,{please:"removeDiv"}, function(respons){
                    console.log(respons.farewell);
                });
        });
}