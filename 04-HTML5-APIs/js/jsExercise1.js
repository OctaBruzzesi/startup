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

//Exercise 3 drop zone

function allowDrop(ev){
  ev.preventDefault();
  ev.dataTransfer.dropEffect = "copy";
}

var holder = document.getElementById('drop'),
    state = document.getElementById('status');

if (typeof window.FileReader === 'undefined') {
    state.className = 'fail';
} else {
    state.className = 'success';
    state.innerHTML = 'File API & FileReader available';
}

holder.ondragover = function() {
    this.className = 'hover';
    return false;
};
holder.ondragend = function() {
    this.className = '';
    return false;
};
holder.ondrop = function(e) {
    this.className = '';
    e.preventDefault();

    var file = e.dataTransfer.files,
        reader = new FileReader();
    reader.onload = function(event) {
      document.getElementById('drop').value = event.target.result;
        console.log(event.target);
    };
    reader.readAsText(file[0],"UTF-8");
}

// exercise 4 socket


  var wsUri = "ws://echo.websocket.org/";
  var output;

  function init()
  {
    output = document.getElementById("output");
    testWebSocket();
  }

  function testWebSocket()
  {
    websocket = new WebSocket(wsUri);
    websocket.onopen = function(evt) { onOpen(evt) };
    websocket.onclose = function(evt) { onClose(evt) };
    websocket.onmessage = function(evt) { onMessage(evt) };
    websocket.onerror = function(evt) { onError(evt) };
  }

  function onOpen(evt)
  {
    writeToScreen("CONNECTED");
    doSend("WebSocket rocks");
  }

  function onClose(evt)
  {
    writeToScreen("DISCONNECTED");
  }

  function onMessage(evt)
  {
    writeToScreen('<span style="color: blue;">RESPONSE: ' + evt.data+'</span>');
    websocket.close();
  }

  function onError(evt)
  {
    writeToScreen('<span style="color: red;">ERROR:</span> ' + evt.data);
  }

  function doSend(message)
  {
    writeToScreen("SENT: " + message);
    websocket.send(message);
  }

  function writeToScreen(message)
  {
    var pre = document.createElement("p");
    pre.style.wordWrap = "break-word";
    pre.innerHTML = message;
    output.appendChild(pre);
  }

  window.addEventListener("load", init, false);
