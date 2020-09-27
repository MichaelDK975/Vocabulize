window.onload = function (event) {
    window.alert("hello");
    let db = initializeDatabase();
    saveDefinition("hello", "k", 12, db);
};  
function saveDefinition(word, definition, date, database){
    db.wordlist.put({Word: word, Definition: definition, Date_Added : date});




}
function initializeDatabase () {
    var db = new Dexie("word_database");
    db.version(1).stores({
        wordlist: 'word'
    });
    return db;

}