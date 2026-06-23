function login(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if(username === "raj" && password ==="1234"){
        sessionStorage.setItem("username",username);
        window.location.href ="./admin.html";
    }
    else{
        alert("Invalid credentials! Please try again.");
    }
}