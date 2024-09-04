function myClock() {
    const clockElement = document.getElementById('clock');
    const date = new Date();

    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    hours = String(hours).padStart(2, '0');

    clockElement.textContent = `${hours}:${minutes}:${seconds} ${ampm}`;
}

// Update the clock every second
setInterval(myClock, 1000);

// Initialize the clock immediately
myClock();
















// const hours = document.querySelector(".hours")
// const minutes = document.querySelector(".minutes")
// const seconds = document.querySelector(".seconds")
// const ampm = document.querySelector(".ampm")

// function init(){
//     const date= new Date();
//     let hourTime= date.getHours();
//     let minTime= date.getMinutes();
//     let secTime= date.getSeconds();

//     if (hourTime>12){
//         hourTime -=12;
//         ampm.innerHTML= "PM"
//     }else{
//         ampm.innerHTML= "AM"
//     }

//     if (hourTime<10){
//         hourTime = "0" + hourTime;
//     }
//     if (minTime<10){
//         minTime = "0" + minTime;
//     }
//     if (secTime<10){
//         secTime = "0" + secTime;
//     }

//     console.log(date.getHours());

//     hours.innerHTML= hourTime;
//     minutes.innerHTML= minTime;
//     seconds.innerHTML= secTime;

//     requestAnimationFrame(init);
// }

// requestAnimationFrame(init);