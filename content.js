var darkened = false;
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    minutes = parseInt(request.please / 60, 10);
    seconds = parseInt(request.please % 60, 10);
    if (request.please != 0 && !darkened){
        createOverlay();
        darkened = true;
        sendResponse({confirmation: "Successfully created div"});
    }else if (request.please == "0" && darkened){
        removeOverlay();
        darkened = false;
        sendResponse({confirmation: "Successfully removed div"});
    }if (request.please!=0){
	if (minutes<10)
	    minutes="0"+String(minutes);
	else
	    minutes=String(minutes);
	if (seconds<10)
	    seconds="0"+String(seconds);
	else
	    seconds=String(seconds);

	big_string=minutes+":"+seconds;
	document.getElementById('timer').innerHTML=big_string;
	//editOverlay("timer","innerHTML",big_string);
    }

});

function createOverlay(){
    
    var pElement=document.createElement('h1');
    pElement.id='MainTitle';
    pElement.innerHTML = "Go do some pushups";
    pElement.className="pElementClass";
    
    var p2Element=document.createElement('h1');
    p2Element.id='timer';
    p2Element.innerHTML = "";
    p2Element.className="pElementClass";
    
    var iElement=document.createElement('img');
    iElement.src="http://i.imgur.com/gZydMTQ.gif";
    iElement.className="iElementClass";
    iElement.id='PictureTitle';
   
    overlay = document.createElement('div');
    overlay.id = 'div';
    overlay.appendChild(pElement);
    overlay.appendChild(p2Element);
    overlay.appendChild(iElement);
    overlay.className="overlayClass";
    document.body.appendChild(overlay);
}

function removeOverlay(){
    document.body.removeChild(document.getElementById('div'));
}

//VVVVV this doesn't work the way it should
function editOverlay(objId,attri,new_def){
    document.getElementById(objId).setAttribute(attri,new_def);
}
