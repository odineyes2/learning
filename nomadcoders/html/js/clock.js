const clock = document.querySelector("#clock");

function getClock(){
    let date = new Date();
    
    let hh = String(date.getHours()).padStart(2,"0");
    let mm = String(date.getMinutes()).padStart(2,"0");
    let ss = String(date.getSeconds()).padStart(2,"0");

    clock.innerText = `${hh}:${mm}:${ss}`;
    
}

setInterval(getClock, 1000);