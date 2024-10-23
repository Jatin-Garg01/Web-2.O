// Grab all necessary elements
const continueBtn = document.querySelector('.continue-btn');
const showFormBtn = document.getElementById('show-form-btn');
const modal = document.getElementById('modal');
const closeModalBtn = document.getElementById('close-btn');
const newAddressForm = document.getElementById('new-address-form');
const addressList = document.getElementById('address-list');
const pinCodeInput = document.getElementById('pinCode');
const stateSelect = document.getElementById('state');
const manualCityInput = document.getElementById('manualLocation');

// Enable Continue button when an address is selected
document.addEventListener('change', function(event) {
    if (event.target.name === 'address') {
        continueBtn.disabled = false; // Enable continue button if an address is selected
    }
});

// Redirect when the "Continue" button is clicked
continueBtn.addEventListener('click', function() {
    const selectedAddress = document.querySelector('input[name="address"]:checked');
    if (selectedAddress) {
        window.location.href = "payment.html"; // Navigate to the payment page
    } else {
        alert("Please select an address before continuing."); // Alert if no address is selected
    }
});

// Show the modal form when 'Add New Address' button is clicked
showFormBtn.addEventListener('click', function() {
    modal.style.display = 'block';
    modal.scrollIntoView(); // Scroll the modal into view
});

// Close modal when 'x' button is clicked
closeModalBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});

// Close modal when clicking outside of the modal content
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Fetch state and city based on the pincode (for demonstration, use your own API here)
pinCodeInput.addEventListener('blur', function() {
    const pincode = pinCodeInput.value;
    // Replace this with your API endpoint for getting location by pincode
    fetch(`/api/getLocationByPincode?pincode=${pincode}`)
        .then(response => response.json())
        .then(data => {
            stateSelect.value = data.state; // Autofill state
        })
        .catch(err => {
            console.error('Error fetching location:', err);
        });
});

// Handle form submission and close modal
newAddressForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const houseNo = document.getElementById('houseNo').value;
    const pinCode = document.getElementById('pinCode').value;
    const streetAddress = document.getElementById('address').value;
    const city = manualCityInput.value; // Manually entered city
    const state = stateSelect.value;

    // Create a new address block (HTML structure)
    const newAddress = `
        <div class="address-item">
            <input type="radio" id="address${addressList.children.length + 1}" name="address">
            <label for="address${addressList.children.length + 1}">
                <strong>${name}</strong><br>
                ${houseNo}, ${streetAddress}, ${city}, ${state} - ${pinCode}
            </label>
        </div>
    `;

    // Add the new address to the existing address list
    addressList.insertAdjacentHTML('beforeend', newAddress);

    // Reset the form and hide the modal
    newAddressForm.reset();
    modal.style.display = 'none';

    // Enable the continue button as an address is selected
    continueBtn.disabled = false;
});

// Example fetch function to update cities based on the selected state (replace with actual API)
function updateCities(state) {
    fetch(`/api/getCitiesByState?state=${state}`)
        .then(response => response.json())
        .then(cities => {
            // Example of filling a city dropdown (if needed)
        })
        .catch(err => {
            console.error('Error fetching cities:', err);
        });
}
