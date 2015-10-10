chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	if (request.please == "createDiv"){
	    createOveral();
	    sendResponse({confirmation: "Successfully created div"});
	}
	else if (request.please=="removeDiv"){
	    removeOverlay();
	    sendResponse({confirmation: "Successfully removed div"});
	}
	
    });

function createOverlay(){
    var overlay = document.createElement('div');
    overlay.id='div1';
    overlay.className="overlayClass";
    document.body.appendChild(overlay);
}

function removeOverlay(){
    document.body.removeChild(document.getElementById('div1'));
}


    
/*
function startTimer(duration) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
	    minutes = parseInt(timer / 60, 10);
	    seconds = parseInt(timer % 60, 10);

	    minutes = minutes < 10 ? "0" + minutes : minutes;
	    seconds = seconds < 10 ? "0" + seconds : seconds;

	    if (--timer < 0) {
		timer = duration;
		var overlay = document.createElement('div');
		overlay.className="overlayClass";
		document.body.appendChild(overlay);

	    }
	}, 1000);
}


startTimer(3);
/*
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.please == "createDiv"){
        alert("123");
        createOverlay();
        //document.body.appendChild(div);
        sendResponse({confirmation: "Successfully created div"});
    }
});

function createOverlay(){
    alert("test");
}
/*
function createOverlay(){
    var overlay = document.createElement("div");
    overlay.display: none;
    overlay.background: #000;
    overlay.position: fixed;
    overlay.width: 100%;
    overlay.height: 100%;
    overlay.top: 0px;
    overlay.left: 0px;
    overlay.text-align: center;
    overlay.z-index: 1;
    overlay.opacity:0.5
}
*/