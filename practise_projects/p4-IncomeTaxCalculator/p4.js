const form=document.querySelector("form")
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const income=document.getElementById("amt")
    const amount=parseInt(income.value)
    let total=0;

    if(amount<=1200000){
        total=0;
    }
    else if(amount<=1600000){
        total=(amount-1200000)*0.15
    }
    else if(amount<=2000000){
        total=(amount-1600000)*0.20+60000
    }
    else if(amount<=2400000){
        total=(amount-2000000)*0.25+80000+60000
    }
    else{
        total=(amount-2400000)*0.30+100000+80000+60000
    }
    form.reset()

    document.querySelector("h2").textContent=`TOTAL TAX: ${total}`
})