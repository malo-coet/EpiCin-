document.addEventListener("DOMContentLoaded", function() {
    const rotatingImage = document.getElementById('rotating-image');

    rotatingImage.addEventListener('mouseover', function() {
        // Make sure to combine the rotate and scale transformations
        this.style.transform = 'rotate(' + this.dataset.angle + 'deg) scale(1.1)';
    });

    rotatingImage.addEventListener('mouseout', function() {
        // Remove the scale transformation while keeping the rotation
        this.style.transform = 'rotate(' + this.dataset.angle + 'deg)';
    });

    rotatingImage.addEventListener('click', function() {
        window.location.href = './page2/index.html';
    });

    // Update the rotation angle
    setInterval(function() {
        let currentAngle = rotatingImage.dataset.angle || 0;
        currentAngle = (parseFloat(currentAngle) + 360 / (10 * 60)) % 360; // 10s for a full rotation
        rotatingImage.dataset.angle = currentAngle;
        if (!rotatingImage.matches(':hover')) {
            rotatingImage.style.transform = 'rotate(' + currentAngle + 'deg)';
        }
    }, 1000 / 60); // 60 times per second
});