

var firebaseConfig = {
      apiKey: "AIzaSyDOQuwirJbOkQoqSUqH5d8eI0J--10H6Oc",
      authDomain: "kwitter-27752.firebaseapp.com",
      databaseURL: "https://kwitter-27752-default-rtdb.firebaseio.com",
      projectId: "kwitter-27752",
      storageBucket: "kwitter-27752.appspot.com",
      messagingSenderId: "665743570418",
      appId: "1:665743570418:web:b176ca30f2c7fe3f57676b"
    };
    
  firebase.initializeApp(firebaseConfig);
  
  
  
  
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
