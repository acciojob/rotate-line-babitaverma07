//your JS code here. If required.
document.addEventListener('DOMContentLoaded', () => {
    const line = document.getElementById('line');
    let angle = 0;

    function rotateLine() {
        angle = (angle + 2) % 360; // Increment angle and ensure it stays within 0-359 degrees
        line.style.transform = `rotate(${angle}deg)`;
    }

    // Rotate the line every 20 milliseconds
    setInterval(rotateLine, 20);
});
