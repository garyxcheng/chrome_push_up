var darkened = false;
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.please == "createDiv" && !darkened){
        createOverlay();
        darkened = true;
        sendResponse({confirmation: "Successfully created div"});
    } else if (request.please == "removeDiv" && darkened){
        removeOverlay();
        darkened = false;
        sendResponse({confirmation: "Successfully removed div"});
    }
});



function createOverlay(){
    var pElement=document.createElement('h1');
    pElement.id='MainTitle';
    pElement.innerHTML = "You need to do pushups";
    pElement.className="pElementClass";
    
    var iElement=document.createElement('img');
    iElement.src="http://i.imgur.com/gZydMTQ.gif";
    iElement.className="iElementClass";
    
    overlay = document.createElement('div');
    overlay.id = 'div';
    overlay.appendChild(pElement);
    overlay.appendChild(iElement);
    overlay.className="overlayClass";
    document.body.appendChild(overlay);
}

function removeOverlay(){
    document.body.removeChild(document.getElementById('div'));
}
