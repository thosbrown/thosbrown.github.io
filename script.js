function updateClock() {
    const timeHand = document.getElementById('time-hand');
    const now = new Date();
    
    // Get the current time in 24-hour format
    const hours = now.getHours();
    const minutes = now.getMinutes();
    
    // Calculate the angle for the hand (one full rotation is 24 hours)
    const handDeg = (360 / 24) * hours + (360 / 24) * (minutes / 60);

    // Update the rotation of the time hand
    timeHand.style.transform = `rotate(${handDeg}deg)`;
}

// Update the clock every minute
setInterval(updateClock, 60000); // 60,000 ms = 1 minute
updateClock();  // Initial call to set the clock right away


function updateTime() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12; // Convert '0' hour to '12'
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    const currentTime = `${hours}:${formattedMinutes} ${ampm}`;

    document.getElementById('timeDisplay').textContent = currentTime;
}

// Update the time immediately and set an interval to update every minute
updateTime();
setInterval(updateTime, 60000);