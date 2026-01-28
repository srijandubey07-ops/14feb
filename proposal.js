const btn=document.getElementById("foreverBtn");
const txt=document.getElementById("finalText");
const a=localStorage.getItem("yourName");
const b=localStorage.getItem("crushName");

btn.onclick=()=>{
  txt.innerHTML=`💞 ${a} & ${b} forever 💞`;
  setTimeout(()=>location.href="final.html",2500);
};