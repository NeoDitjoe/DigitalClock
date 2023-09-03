const hour = document.getElementById
("hour");

const minutes = document.getElementById   /* document.queryselector ('p') *//*  >>>>used to fetch <p> from html */
("minutes");

const seconds = document.getElementById
("seconds");
let time = document.querySelector('[data-time]') ;

function updateClock(){
    let hours = new Date().getHours()
    let min = new Date().getMinutes()
    let sec = new Date().getSeconds()

    if (hours >= 12){
        time.innerText = "PM"   
    } else{
        time.innerText = 'AM'
    }
    
    min = min <10 ? "0" + min : min;
    hours = hours <10 ? "0" + hours : hours;
    sec = sec <10 ? "0" + sec : sec;
    
    hour.innerText = hours;
    minutes.innerText = min;
    seconds.innerText = sec;

    setTimeout (()=>{
        updateClock()
    })
}
 updateClock()