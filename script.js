function getTime() {
    time = new Date().toLocaleTimeString();
    day = new Date().toLocaleString('en-us', { weekday: 'long' }) + " " + new Date().toLocaleDateString('pt-PT');
    document.getElementById('clock').innerHTML = time + "<br> <br>" + day;
}
setInterval(getTime, 1000);