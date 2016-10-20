function storeLocalTextArea () {
  let input = {key: 0, text: document.getElementById("inputTextArea").value};
  localStorage.setItem("inputTextStored", input.text);
  document.getElementById("a").innerHTML = localStorage.getItem("inputTextStored");
}

function createIDBTextArea () {
  let IDB = window.indexedDB;
  db = IDB.open("textIndexDataBase", 1);

  db.onupgradeneeded = function (event) {
    let dataBase = event.target.result;
    textObject = dataBase.createObjectStore("textDataBase", { keyPath : 'text' });
    textObject.createIndex('Text', 'text', { unique : false });
  }

  db.onerror = function (event) {
    alert("Indexed Data Base not allowed, please enable it");
  }

  db.onsuccess = function (event){
    //alert("Indexed Data Base create successfully");
  }
}

function saveIDBTextArea () {
  let result = db.result;
  let textDataBaseTransaction = result.transaction("textDataBase", "readwrite").objectStore("textDataBase");
  let textArea = document.getElementById("inputTextArea").value;
  let request = textDataBaseTransaction.put( {
    keyPath: 1,
    text: textArea
  });

  request.onsuccess = function (event) {
    alert("Text added");
    textArea = "";
  }

  request.onerror = function(event) {
    alert("Something went wrong");
  }
}

function deleteLocalTextArea () {
  localStorage.clear();
}

function deleteIDBTextArea () {
  let result = db.result;
  var request = result.transaction("textDataBase", "readwrite").objectStore("textDataBase").clear();

  request.onsuccess = function (event) {
    alert("Remove");
  }
}
