// Select the 3D text element
const nameElement = document.getElementById('name');

// Add mousemove event listener for dynamic 3D rotation
nameElement.addEventListener('mousemove', (e) => {
    const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    
    // Rotate the element based on mouse position
    nameElement.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// Reset the rotation when the mouse leaves the text
nameElement.addEventListener('mouseleave', () => {
    nameElement.style.transform = `rotateY(0deg) rotateX(0deg)`;
});
