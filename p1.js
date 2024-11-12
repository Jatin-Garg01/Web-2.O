const continueBtn = document.querySelector('.continue-btn');
const showFormBtn = document.getElementById('show-form-btn');
const modal = document.getElementById('modal');
const closeModalBtn = document.getElementById('close-btn');
const newAddressForm = document.getElementById('new-address-form');
const addressList = document.getElementById('address-list');
const pinCodeInput = document.getElementById('pinCode');
const stateSelect = document.getElementById('state');
const manualCityInput = document.getElementById('manualLocation');
document.addEventListener('change', function(event) {
    if (event.target.name === 'address') {
        continueBtn.disabled = false;
    }
});
continueBtn.addEventListener('click', function() {
    const selectedAddress = document.querySelector('input[name="address"]:checked');
    if (selectedAddress) {
        window.location.href = "p2.html";
    } else {
        alert("Please select an address before continuing."); 
    }
});
showFormBtn.addEventListener('click', function() {
    modal.style.display = 'block';
    modal.scrollIntoView(); 
});
closeModalBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});
pinCodeInput.addEventListener('blur', function() {
    const pincode = pinCodeInput.value;
    fetch(`/api/getLocationByPincode?pincode=${pincode}`)
        .then(response => response.json())
        .then(data => {
            stateSelect.value = data.state; 
        })
        .catch(err => {
            console.error('Error fetching location:', err);
        });
});
newAddressForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const houseNo = document.getElementById('houseNo').value;
    const pinCode = document.getElementById('pinCode').value;
    const streetAddress = document.getElementById('address').value;
    const city = manualCityInput.value; 
    const state = stateSelect.value;
    const newAddress = `
        <div class="address-item">
            <input type="radio" id="address${addressList.children.length + 1}" name="address">
            <label for="address${addressList.children.length + 1}">
                <strong>${name}</strong><br>
                ${houseNo}, ${streetAddress}, ${city}, ${state} - ${pinCode}
            </label>
        </div>
    `;
    addressList.insertAdjacentHTML('beforeend', newAddress);
    newAddressForm.reset();
    modal.style.display = 'none';
    continueBtn.disabled = false;
});function updateCities(state) {
    fetch(`/api/getCitiesByState?state=${state}`)
        .then(response => response.json())
        .then(cities => {
        })
        .catch(err => {
            console.error('Error fetching cities:', err);
        });
}
