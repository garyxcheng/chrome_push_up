var darkened = false;
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    minutes = parseInt(request.please / 60, 10);
    seconds = parseInt(request.please % 60, 10);
    if (request.please != 0 && !darkened){
        createOverlay();
        darkened = true;
        sendResponse({confirmation: "Successfully created div"});
    } else if (request.please == "0" && darkened){
        removeOverlay();
        darkened = false;
        sendResponse({confirmation: "Successfully removed div"});
    }/*else if (request.please!=0){
	big_string=String(minutes)+":"+String(seconds);
	editOverlay("timer","innerHTML",big_string);
	}*/

});

function createOverlay(){
    
    var pElement=document.createElement('h1');
    pElement.id='MainTitle';
    pElement.innerHTML = "Go do some pushups";
    pElement.className="pElementClass";
    /*
    var p2Element=document.createElement('h1');
    p2Element.id='timer';
    p2Element.innerHTML = "00:00";
    p2Element.className-"p2ElementClass";
    */
    var iElement=document.createElement('img');
    iElement.src="http://i.imgur.com/gZydMTQ.gif";
    iElement.className="iElementClass";
    iElement.id='PictureTitle';
   
    overlay = document.createElement('div');
    overlay.id = 'div';
    overlay.appendChild(pElement);
    //overlay.appendChile(p2Element);
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
