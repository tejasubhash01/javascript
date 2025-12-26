let btn=document.querySelector("button");
let p=document.getElementsByTagName("p");
p[0].style.color="blue";
btn.onclick=()=>{
    let textchange=document.getElementsByClassName("p");
    textchange[0].innerText="changed text";
    textchange[0].style.color="red";
    let body = document.getElementsByTagName("body")[0];
    body.style.backgroundColor = "pink";
}
let string="tejasubhash";
let pass="Satyam*143256";
let pa=document.getElementsByClassName("pa");
pa[0].innerText="new text";
let username=document.getElementById("username").value;
let passowrd=document.getElementById("pass").value;
let btn1=document.getElementById("submit");
btn1.onclick=()=>{
    if((username.value)===string && (passowrd.value)==pass){
        alert("passowrd correct"+pass);
    }
    else{
        alert("Invalid credentials");
    }
}
