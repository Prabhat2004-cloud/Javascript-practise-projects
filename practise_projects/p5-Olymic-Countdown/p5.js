function countdown(){

    const current= Date.now();
    const olymic= new Date(2028,6,14).getTime()

    let timer=(olymic-current)

    const days= Math.floor(timer/(1000*60*60*24))
    timer%= 1000*60*60*24

    const hours=Math.floor(timer/(1000*60*60))
    timer%= 1000*60*60

    const minutes= Math.floor(timer/(1000*60))
    timer%= 1000*60

    const second= Math.floor(timer/(1000))
    timer%= 1000
    const milisec= timer

    const result=document.getElementById("result")
    result.textContent=`${days}:DAYS ${hours}:hours ${minutes}:minutes ${second}:second ${milisec}milisecond`

}
setInterval(countdown,15)
