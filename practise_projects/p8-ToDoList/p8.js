const form=document.querySelector("form")
const alltask=document.querySelector("#alltask")
const input=document.querySelector("input")

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    const text=input.value.trim();
    if(text==""){
        return;
    }

    const parent=document.createElement("li")
    const task=document.createElement("span")
    task.textContent=text
    task.style.marginRight="5px"
    task.style.fontSize="20px"
    task.style.padding="1px"

    const donebutton=document.createElement("button")
    donebutton.textContent="Done"
    donebutton.style.width="50px"
    donebutton.style.backgroundColor="rgba(245, 245, 245, 0.801)"
    donebutton.style.marginRight="10px";
    donebutton.style.cursor="pointer"

    const deletebutton=document.createElement("button")
    deletebutton.textContent="Delete"
    deletebutton.style.width="50px"
    deletebutton.style.backgroundColor="rgba(245, 245, 245, 0.801)"
    deletebutton.style.cursor="pointer"

    parent.append(task,donebutton,deletebutton);
    alltask.append(parent);

    donebutton.addEventListener('click',(e)=>{
        e.preventDefault();
        task.style.textDecoration= 'line-through'
        task.style.color="grey"
    })

   deletebutton.addEventListener('click',(e)=>{
        e.preventDefault();
        parent.remove();
    })
    form.reset();
})