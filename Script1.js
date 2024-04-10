let profilepic=document.getElementById("profile-pic");
let inputfile=document.getElementById("input-image");
inputfile.onchange=function(){
    profilepic.src = URL.createObjectURL(inputfile.files[0]);
}
// const location=document.getElementById("location");
// const next=document.getElementById("Next");
// profilepic.addEventListener("keyup",()=>{
    
// })
const next=document.getElementById("Next");
const location=document.getElementById("location");
if(location.innertext==="hello")
{
    next.disabled="false";
}
// setInterval(() => {
//     const location=document.getElementById("location").value;
//     if(location!=null || location!="")
//     {
//         next.disabled="false";
//     }
// }, 1000);

