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

// ... (previous code)

// Define the image file mappings for each color combination
const imageMappings = {
  'blue_white': 'blue_white.jpg',
  'green_black': 'green_black.jpg',
  'pink_silver': 'pink_silver.jpg',
  // Add more mappings as needed for all possible combinations
};

// Function to update the water bottle preview image based on the selected color combination
function updatePreview() {
  const selectedCombination = `${selectedBodyColor}_${selectedLidColor}`;
  const imageFileName = imageMappings[selectedCombination];

  if (imageFileName) {
    // Set the background image of the preview div
    waterBottlePreview.style.backgroundImage = `url(${imageFileName})`;
  } else {
    // If no image mapping is found, show a default image or a blank background
    waterBottlePreview.style.backgroundImage = 'none';
  }
}

// ... (previous code)

