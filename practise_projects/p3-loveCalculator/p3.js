const boy=document.getElementById("boy")
const girl=document.getElementById("girl")

const form=document.querySelector("form")

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const l1=(boy.value).length
    const l2=(boy.value).length

    const result=Math.pow(l1+l2,3)%101
    document.querySelector("h2").textContent = `RESULT: ${result}%`


})
