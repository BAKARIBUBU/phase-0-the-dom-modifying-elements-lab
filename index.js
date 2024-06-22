// in index.js
// Remove the <main> element with id 'main'
document.querySelector('main#main').remove();

// Create a new <h1> element and assign it to the newHeader variable
window.newHeader = document.createElement('h1');
window.newHeader.id = 'victory';
window.newHeader.innerHTML = 'YOUR-NAME is the champion'; // Replace YOUR-NAME with your actual name

// Add the newHeader element to the DOM
document.body.appendChild(window.newHeader);