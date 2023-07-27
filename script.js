// Get references to the elements
const bodyColorSelect = document.getElementById('body-color');
const lidColorSelect = document.getElementById('lid-color');
const inscriptionInput = document.getElementById('inscription');
const waterBottlePreview = document.getElementById('water-bottle');
const orderButton = document.getElementById('order-button');

// Default values
let selectedBodyColor = 'blue';
let selectedLidColor = 'white';
let inscriptionText = '';

// Function to update the water bottle preview
function updatePreview() {
  waterBottlePreview.style.backgroundColor = selectedBodyColor;
}

// Set up color options using Array.map()
const bodyColorOptions = ['blue', 'green', 'pink'];
const lidColorOptions = ['white', 'black', 'silver'];

function populateColorOptions(selectElement, colorOptions) {
  selectElement.innerHTML = colorOptions.map(color => `<option value="${color}">${color}</option>`).join('');
}

populateColorOptions(bodyColorSelect, bodyColorOptions);
populateColorOptions(lidColorSelect, lidColorOptions);

// Event listeners for color and inscription changes
bodyColorSelect.addEventListener('change', function() {
  selectedBodyColor = bodyColorSelect.value;
  updatePreview();
});

lidColorSelect.addEventListener('change', function() {
  selectedLidColor = lidColorSelect.value;
  updatePreview();
});

inscriptionInput.addEventListener('input', function() {
  inscriptionText = inscriptionInput.value;
});

// Event listener for the "Order" button
orderButton.addEventListener('click', function() {
  // Here you can process the order data
  // For demonstration purposes, we'll just display the chosen options in the console
  console.log('Body Color:', selectedBodyColor);
  console.log('Lid Color:', selectedLidColor);
  console.log('Inscription:', inscriptionText);
  alert('Your order has been placed!'); // Display a confirmation message
});
