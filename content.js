var darkened = false;
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.please != 0 && !darkened){
        createOverlay();
        darkened = true;
        minutes = parseInt(request.please / 60, 10);
        seconds = parseInt(request.please % 60, 10);
        sendResponse({confirmation: "Successfully created div"});
    } else if (request.please == "0" && darkened){
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
    iElement.id='PictureTitle'
   
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

function editOverlay(objId,attri,new_def){
    document.getElementById(objId).setAttribute(attri,new_def);
}
