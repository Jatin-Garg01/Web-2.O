// Function to dynamically show/hide payment method details based on the selected option
function showPaymentMethod(paymentMethodId) {
    // Hide all payment detail sections
    const paymentDetails = document.querySelectorAll('.payment-details');
    paymentDetails.forEach(detail => detail.classList.add('hidden'));

    // Show the selected payment method details
    document.getElementById(paymentMethodId).classList.remove('hidden');

    // Show the PAY NOW button if a payment option is selected
    const payNowButton = document.getElementById('payNowButton');
    payNowButton.classList.remove('hidden');
}

// Initialize to show the first payment method details
showPaymentMethod('googlePayDetails');
document.getElementById('payNowButton').addEventListener('click', function() {
    // Perform payment validation or redirect to a confirmation page
    window.location.href = "confirmation.html"; // Example: redirect after successful payment
});
