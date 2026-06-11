const arr=["Dream big, start small.",
  "Consistency beats motivation.",
  "Learn, build, repeat.",
  "Your comfort zone will kill your dreams.",
  "Focus on progress, not perfection.",
  "Skills pay bills.",
  "Do it scared.",
  "Small steps every day matter.",
  "Discipline creates freedom.",
  "Hard work silently builds success.",
  "Don’t wait for opportunity, create it.",
  "Make yourself proud.",
  "Growth begins where comfort ends.",
  "Action turns dreams into reality.",
  "Your future needs your effort today.",
  "Stay curious, stay hungry.",
  "Results come from consistency.",
  "Learning never goes out of style.",
  "Code. Break. Fix. Learn.",
  "Believe in slow, steady growth."];

const button=document.querySelector("button")
const quote=document.querySelector("h1")

button.addEventListener('click',()=>{

    const index= Math.floor(Math.random()*20);

    quote.textContent=arr[index];

})