$(function(){
    // This runs a function when a button is clicked
    $('#paste').click(function(){pasteSelection();});
  });

  function pasteSelection() {
    var text = document.getElementById('text');
    //text.innerHTML = "hello";

    chrome.tabs.query({active:true, windowId: chrome.windows.WINDOW_ID_CURRENT}, 
    function(tab) {
      chrome.tabs.sendMessage(tab[0].id, {method: "getSelection"}, 
      function(response){
        var text = document.getElementById('text'); 
        text.innerHTML = response.data;
        //myAwesomeFancyFunction(response.data);
      });
    });
  }