function login(){
    username = document.getElementById("log_in").value; 
    localStorage.setItem("adduser", username)
    window.location = "Room.html"
}