const a=localStorage.getItem("yourName");
const b=localStorage.getItem("crushName");
document.getElementById("names").innerHTML=`💞 ${a} ❤️ ${b} 💞`;

document.getElementById("qr").src =
"https://scan.page/p/1G8ASz https://api.qrserver.com/v1/create-qr-code/?size=200x200&data= "+location.href;