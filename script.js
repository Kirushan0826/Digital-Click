let hrsDiv = document.getElementById('hrs')
let minsDiv = document.getElementById('mins')
let secDiv = document.getElementById('sec')


setInterval (() => {
    let currentTime = new Date();
// console.log(currentTime.getHours());

hrsDiv.innerHTML = (currentTime.getHours()<10?'0':'') + currentTime.getHours();
minsDiv.innerHTML = (currentTime.getMinutes()<10?'0':'') + currentTime.getMinutes();
secDiv.innerHTML = (currentTime.getSeconds()<10?'0':'') + currentTime.getSeconds();
}, 1000 )

