// THEME
const toggle = document.getElementById("themeToggle");
if (localStorage.getItem("theme") === "dark") document.body.classList.add("dark");
toggle.onclick = () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
};

// ELEMENTS
const startBtn = document.getElementById("startBtn");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const goNext = document.getElementById("goNext");
const music = document.getElementById("bgMusic");

const yourName = document.getElementById("yourName");
const crushName = document.getElementById("crushName");
const questionBox = document.getElementById("questionBox");
const result = document.getElementById("result");
const finalMsg = document.getElementById("finalMsg");

// SLIDESHOW
const slideshow = document.getElementById("slideshow");
const slideImage = document.getElementById("slideImage");
const images = ["img1.jpg","img2.jpg","img3.jpg"];
let i = 0;

// START
startBtn.onclick = () => {
  if (!yourName.value || !crushName.value) return alert("Enter names ❤️");
  localStorage.setItem("yourName", yourName.value);
  localStorage.setItem("crushName", crushName.value);
  questionBox.style.display = "block";
  slideshow.style.display = "block";
  music.play();
  setInterval(()=> {
    i=(i+1)%images.length;
    slideImage.src = images[i];
  },2000);
};

// YES
yesBtn.onclick = () => {
  result.style.display = "block";
  typeText(`💞 ${yourName.value} + ${crushName.value} = Forever 💞`);
  fireworks();
  confetti();
};

// NO
noBtn.onmouseover = () => {
  noBtn.style.transform = `translate(${Math.random()*200-100}px,${Math.random()*200-100}px)`;
};

// NEXT
goNext.onclick = ()=> location.href="proposal.html";

// TYPE EFFECT
function typeText(text){
  finalMsg.innerHTML="";
  let i=0;
  let t=setInterval(()=>{
    finalMsg.innerHTML+=text[i++];
    if(i>=text.length) clearInterval(t);
  },70);
}

// HEARTS
setInterval(()=>{
  let h=document.createElement("span");
  h.innerHTML="💖";
  h.style.left=Math.random()*100+"vw";
  document.querySelector(".hearts").appendChild(h);
  setTimeout(()=>h.remove(),6000);
},250);

// FIREWORKS
const canvas=document.getElementById("fireworks");
const ctx=canvas.getContext("2d");
canvas.width=innerWidth;
canvas.height=innerHeight;
let p=[];
function fireworks(){
  setInterval(()=>{
    for(let i=0;i<20;i++){
      p.push({x:Math.random()*canvas.width,y:Math.random()*canvas.height/2,dx:(Math.random()-.5)*6,dy:(Math.random()-.5)*6,l:80});
    }
  },400);
}
(function anim(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  p.forEach((a,i)=>{
    ctx.fillStyle="white";
    ctx.fillRect(a.x,a.y,2,2);
    a.x+=a.dx;a.y+=a.dy;a.l--;
    if(a.l<=0)p.splice(i,1);
  });
  requestAnimationFrame(anim);
})();

// CONFETTI
function confetti(){
  for(let i=0;i<100;i++){
    let c=document.createElement("div");
    c.innerHTML="🎊";
    c.style.position="fixed";
    c.style.left=Math.random()*100+"vw";
    c.style.top="-10px";
    document.body.appendChild(c);
    setTimeout(()=>c.remove(),3000);
  }
}