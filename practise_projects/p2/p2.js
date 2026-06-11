const parent =document.getElementById("parent");
const body=document.querySelector("body")

parent.addEventListener('click',(e)=>{
    const child=e.target;
    body.style.backgroundColor=e.target.id
})