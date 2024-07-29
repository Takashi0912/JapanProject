


function SetCookies(){
    document.cookie = "email=" + document.getElementById("email").value +
    "|firstName=" + document.getElementById("firstName").value +
    "|lastName=" + document.getElementById("lastName").value +
    "|birthDay="  + document.getElementById("birthDay").value+ 
    "|query="  + document.getElementById("query").value; 
    alert(document.cookie);
}

function GetCookies(){
    var arr = document.cookie.split('|');
    alert(arr.length);
    var string;
    for (var i = 0; i < arr.length; i++) {
        var sarr = arr[i].split('=');
        document.getElementById(sarr[0]).innerText = sarr[1];
    }
}



function ClearAll(){
    document.getElementById("email").value = "";
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("birthDay").value = "";
    document.getElementById("query").value = "";
    
}













