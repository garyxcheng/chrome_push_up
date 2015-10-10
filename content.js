var overlay = document.createElement('div');
overlay.className="overlayClass";
document.body.appendChild(overlay);


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