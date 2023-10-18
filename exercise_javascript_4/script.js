function updateGlobalTime() {

    let utcTime = document.getElementById("utc-time");

    const utcHours = new Date().getUTCHours();
    const utcMinutes = new Date().getUTCMinutes();
    const utcSeconds = new Date().getUTCSeconds();
  
    const utcAmPm = utcHours >= 12 ? 'PM' : 'AM';
  
    const utc12Hour = utcHours % 12 || 12;
  
    const utcTimeStr = `${utc12Hour}:${utcMinutes}:${utcSeconds} ${utcAmPm}`;
  
    utcTime.textContent = `UTC Time: ${utcTimeStr}`;
  }
  
function startGlobalTimer() {
      setInterval(updateGlobalTime, 1000);
  }
  
let button = document.getElementById("globalTimerButton");
  
button.addEventListener('click', startGlobalTimer);
  
function updateLocalTime() {
    let localTime = document.getElementById("local-time");
  
    const localHours = new Date().getHours();
    const localMinutes = new Date().getMinutes();
    const localSeconds = new Date().getSeconds();
  
    const localAmPm = localHours >= 12 ? 'PM' : 'AM';
  
    const local12Hour = localHours % 12 || 12;
  
    const localTimeStr = `${local12Hour}:${localMinutes}:${localSeconds} ${localAmPm}`;
  
    localTime.textContent =  `Local Time: ${localTimeStr}`;
  }
  
function startLocalTimer() {
    setInterval(updateLocalTime, 1000);
  }
  
let button2 = document.getElementById("localTimerButton");
  
button2.addEventListener('click', startLocalTimer);