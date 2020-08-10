console.log("hello frmo popup.js");

$(function(){
    $('#paste').click(function(){pasteSelection();});
    console.log("hello frmo popup.js");

  });
  function pasteSelection() {
    var text = document.getElementById('text');
    text.innerHTML = "hello";

    console.log("pasteSelection");
    chrome.tabs.query({active:true, windowId: chrome.windows.WINDOW_ID_CURRENT}, 
    function(tab) {
      chrome.tabs.sendMessage(tab[0].id, {method: "getSelection"}, 
      function(response){
        var text = document.getElementById('text'); 
        text.innerHTML = response.data;
      });
    });
  }