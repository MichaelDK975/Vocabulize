chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
    console.log("loaded extension...");
    if (request.method == "getSelection") {
      sendResponse({data: window.getSelection().toString()});
      console.log(window.getSelection().toString());
    }
    else {
      sendResponse({}); // snub them.
    }
  });