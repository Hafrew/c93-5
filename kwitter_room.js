var firebaseConfig = {
      apiKey: "AIzaSyBbqqu0FqwQAxhK7PsBpya7MMzdhtt5s98",
      authDomain: "kwitter-practice-6eabb.firebaseapp.com",
      databaseURL: "https://kwitter-practice-6eabb-default-rtdb.firebaseio.com",
      projectId: "kwitter-practice-6eabb",
      storageBucket: "kwitter-practice-6eabb.appspot.com",
      messagingSenderId: "592591866756",
      appId: "1:592591866756:web:8ecd7396b07f3e397c6bd1",
      measurementId: "G-8X8LJWQNY6"
    };
  
    // Initialize Firebase
    initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
 user_name = localStorage.getItem("user_name");
 document.getElementById("user_name").innerHTML = "welcome" + user_name+"!";

 function addRoom()
 {
 room_name=document.getElementById("room_name").value;

 firebase.database().ref("/").child(room_name).update({
     purpose:"adding room name"
 });



  localStorage.setItem("room_name", room_name);
  
 window.location="kwitter_page.html"
 }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     
      Room_names = childKey;

       console.log("Room name - "+Room_names);

       row = "<div class = 'room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
    
       document.getElementById("output").innerHTML +=row;

      });});}
getData();

function redirectToRoomName(name){

      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html"
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="kwitter.html";
}
function send(){
      msg= document.getElementById("msg").value
      firebase.database.ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = ";"

}