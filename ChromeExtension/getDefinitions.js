// This block of code executes something when the window is loaded. ON_LOAD!
window.onload = function (event) {
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

    //chosenWord = text.innerHTML;
    //text.innerHTML = chosenWord;
    doSomethingWithSelection(addsToDefinition);
    //doSomethingWithSelection(reWriteSelectedWord);    
};

function reWriteSelectedWord(selectedWord){
    let whereToPutWord = document.getElementById("theWord");
    whereToPutWord.innerHTML = selectedWord;
}

// Combines the dictionary API lookup with putting the output on the screen into a DIV
function addsToDefinition(selectedWord){
    if (!selectedWord) {
        //window.alert ("nnooooooot sleected");
        let myLabel = document.getElementById("labelForWord");
        myLabel.hidden = true;
    }
    else{
        reWriteSelectedWord(selectedWord);
        getTheDefinitionAndDoSomethingWithIt(selectedWord,putJSONIntoADiv);
    }
}

// Takes the JSON previously returned, and puts it on the screen - replacing a DIV, in button format
function putJSONIntoADiv(json) {
        // After the API is called and data is returned, the following code is executed:
    let myDiv = document.getElementById("message");
    //myDiv.innerHTML = JSON.stringify(json);

    let allTheDefinitions = "";
    let definitionCounter = 1;
    for (eachSingleThing of json) {
        if(eachSingleThing.shortdef!=""){
            allTheDefinitions = allTheDefinitions + "<button style='text-align:left;'>"+definitionCounter +". " + eachSingleThing.shortdef +"</button><br/>" ;
            definitionCounter +=1;
        }
    }
    allTheDefinitions += '<div><textarea placeholder = "Custom Definition"></textarea></div>';
    allTheDefinitions += "<button>Add Custom Definition</button>"
    myDiv.innerHTML = allTheDefinitions;        
}



// Calls the dictionary API with any given word, and then calls our function with the JSON result of that API call 
function getTheDefinitionAndDoSomethingWithIt(selectedWord, whatToDoWithTheJSON){
    fetch(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${selectedWord}?key=fa5c828f-849a-4617-a2f7-654b10474848`)
        .then(response => response.json())
        .then(json => {
            whatToDoWithTheJSON(json);
        })
}


// function MyAwesomeFancyFunction(word) {
//     let myDiv = document.getElementById("message");
//     myDiv.innerHTML = JSON.stringify(json);
//     myDiv.innerHTML = word;
// };
