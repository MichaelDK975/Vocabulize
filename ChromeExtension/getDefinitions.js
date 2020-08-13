// This block of code executes something when the window is loaded. ON_LOAD!
$(window).on('load', function() {
    // this is how you call an API
    //fetch('https://jsonplaceholder.typicode.com/todos/1')
     //   .then(response => response.json())
     //   .then(json => {
            // After the API is called and data is returned, the following code is executed:
     //       let myDiv = document.getElementById("message");
            //myDiv.innerHTML = JSON.stringify(json);
    //        myDiv.innerHTML = json.title;        
      //  })  
    //text.innerHTML = "herllo";
    //var text = document.getElementById('text');
    
    let chosenWord = "";
    chrome.tabs.query({active:true, windowId: chrome.windows.WINDOW_ID_CURRENT}, 
    function(tab) {
      chrome.tabs.sendMessage(tab[0].id, {method: "getSelection"}, 
      function(response){
        //var text = document.getElementById('text'); 
        text.innerHTML = response.data;
        //myAwesomeFancyFunction(response.data);
      });
    });
    
    chosenWord = "virtuoso";
    //chosenWord = text.innerHTML;
    //text.innerHTML = chosenWord;

    fetch(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${chosenWord}?key=fa5c828f-849a-4617-a2f7-654b10474848`)
        .then(response => response.json())
        .then(json => {
            // After the API is called and data is returned, the following code is executed:
            let myDiv = document.getElementById("message");
            //myDiv.innerHTML = JSON.stringify(json);
            myDiv.innerHTML = json[0].shortdef;        
        })   


    
});


function MyAwesomeFancyFunction(word) {
    let myDiv = document.getElementById("message");
    myDiv.innerHTML = JSON.stringify(json);
    myDiv.innerHTML = word;
};