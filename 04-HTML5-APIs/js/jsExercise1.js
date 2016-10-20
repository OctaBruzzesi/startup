function storeTextArea () {
  let input = {key: 0, text: document.getElementById("inputTextArea").value};
  localStorage.setItem("inputTextStored", input.text);
  document.getElementById("a").innerHTML = localStorage.getItem("inputTextStored");

  window.indexedDB = window.indexedDB
  let db;
  let request = indexedDB.open("MyDatabase", 3);
  request.onerror = function (event) {
    alert("Why didn't you allow my web app to use IndexedDB?!");
  }

  request.onsuccess = function (event) {
    console.log("a");
    db = event.target.result;
    alert(db.get(0));
  }

  request.onupgradeneeded = function (event) {
    console.log("e");
    var db = event.target.result;
    // Create an objectStore for this database
     var objectStore = db.createObjectStore("texts", { keyPath: "key" });
     objectStore.createIndex("name", "name", { unique: false });
     objectStore.transaction.oncomplete = function(event) {
    // Store values in the newly created objectStore.
      var customerObjectStore = db.transaction("texts", "readwrite").objectStore("texts");
      customerObjectStore.add(input)
    }
  }
  var transaction = db.transaction(["texts"]);
  var objectStore = transaction.objectStore("texts");
  var request3 = objectStore.get("0");
  request3.onerror = function(event) {
    // Handle errors!
  };
  request3.onsuccess = function(event) {
    // Do something with the request.result!
    alert("Input Text:  " + request.result.name);
  };
}
