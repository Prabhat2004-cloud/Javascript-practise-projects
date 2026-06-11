const body=document.querySelector("body")

body.addEventListener('click',(e)=>{
    console.log(e.clientX,e.clientY);

  const element=document.createElement("div")
  element.classList.add("circle");
  element.textContent="HI"
  
  element.style.top=`${e.clientY-25}px`
  element.style.left=`${e.clientX-25}px`

  const color=["red","pink","orange","purple","yellow","green"]
  element.style.backgroundColor=color[Math.floor(Math.random()*6)]

  body.append(element)
  setTimeout(() => {
    element.remove()
  },5000);

})