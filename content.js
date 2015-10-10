chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.please == "createDiv"){
        createOverlay();
        sendResponse({confirmation: "Successfully created div"});
    } else if (request.please == "removeDiv"){
        removeOverlay();
        sendResponse({confirmation: "Successfully created div"});
    }
});

function createOverlay(){
    overlay = document.createElement('div');
    overlay.id = 'div';
    overlay.className="overlayClass";
    overlay.opacity = 1;
    document.body.appendChild(overlay);
}

function removeOverlay(){
    document.body.removeChild(document.getElementById('div'));
}
