var text = document.getElementById('watch')
var button = document.getElementById('btn')
var reset = document.getElementById('reset')
var timer;
var hours = 0
var minutes = 0
var milliSeconds = 0
var seconds = 0
var m = document.getElementById('min')
var s = document.getElementById('seconds')
var h = document.getElementById('hours')
button.addEventListener('click', () => {
    if (button.innerText == 'Start') {
        button.innerText = 'Stop'
        timer = setInterval(() => {
            milliSeconds++
            if (milliSeconds >= 100) {
                if (seconds < 9) {
                    milliSeconds = 0
                    seconds++
                s.innerText = `0${seconds}`
                }else{
                    milliSeconds = 0
                    seconds++
                    s.innerText = seconds
                }
            }
            if (seconds > 58) {
                if (minutes < 9) {
                    minutes++
                    seconds = 0
                    m.innerText = `0${minutes}:`   
                }else{
                    minutes++
                    seconds = 0
                    s.innerText = `${minutes}:` 
                }
            }
            if (minutes > 59) {
                if(hours < 9){
                    hours++
                    minutes = 0
                    h.innerText = `0${hours}:`
                }else{
                    hours++
                    minutes = 0
                    h.innerText = `${hours}:`
                }
            }
           }, 10);
    }else if(button.innerText == 'Stop'){
        button.innerText = 'Resume'
    clearInterval(timer);
       
    }else if(button.innerText == 'Resume'){
        button.innerText = 'Stop'
        timer = setInterval(() => {
            milliSeconds++
            if (milliSeconds >= 100) {
                if (seconds < 9) {
                    milliSeconds = 0
                    seconds++
                s.innerText = `0${seconds}`
                }else{
                    milliSeconds = 0
                    seconds++
                    s.innerText = seconds
                }
            }
            if (seconds > 58) {
                if (minutes < 9) {
                    minutes++
                    seconds = 0
                    m.innerText = `0${minutes}:`   
                }else{
                    minutes++
                    seconds = 0
                    s.innerText = `${minutes}:` 
                }
            }
            if (minutes > 59) {
                if(hours < 9){
                    hours++
                    minutes = 0
                    h.innerText = `0${hours}:`
                }else{
                    hours++
                    minutes = 0
                    h.innerText = `${hours}:`
                }
            }
           }, 10);
    }
    
})

reset.addEventListener('click', () => {
   clearInterval(timer)
   hours = 0
   minutes = 0
   seconds = 0
   s.innerText = `0${seconds}`
   m.innerText = `0${minutes}:` 
   h.innerText = `0${hours}:`
})