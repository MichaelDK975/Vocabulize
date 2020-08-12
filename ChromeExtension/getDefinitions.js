// This block of code executes something when the window is loaded. ON_LOAD!
$(window).on('load', function() {
    // this is how you call an API
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => {
            // After the API is called and data is returned, the following code is executed:
            let myDiv = document.getElementById("message");
            //myDiv.innerHTML = JSON.stringify(json);
            myDiv.innerHTML = json.title;        
        })   
});


function MyAwesomeFancyFunction(word) {
    let myDiv = document.getElementById("message");
    //myDiv.innerHTML = JSON.stringify(json);
    myDiv.innerHTML = word;
};