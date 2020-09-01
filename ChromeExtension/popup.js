$(function(){
    // This runs a function when a button is clicked
    $('#paste').click(function(){pasteSelection();});
  });

  function pasteSelection() {
    var text = document.getElementById('text');
    //text.innerHTML = "hello";
    doSomethingWithSelection( (rd) => {
          var text = document.getElementById('text'); 
          text.innerHTML = rd;
    });
  }

  // Use send-message functionality to retrieve the selected text, and then call our own function with that text 
  function doSomethingWithSelection(myOwnFunction) {
    chrome.tabs.query({active:true, windowId: chrome.windows.WINDOW_ID_CURRENT}, 
      function(tab) {
        chrome.tabs.sendMessage(tab[0].id, {method: "getSelection"}, 
        function(response){
          myOwnFunction(response.data);
        });
    });
  }
