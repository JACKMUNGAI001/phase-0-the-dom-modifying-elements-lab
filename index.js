// Write your code here!
// Remove the 'main' element from the DOM
const main = document.getElementById('main');
if (main) {
  main.remove();
}

// Create a new <h1> element with id 'victory'
const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.textContent = "Jackson is the champion";

// Append the new header to the body
document.body.appendChild(newHeader);