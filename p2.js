function showPaymentMethod(paymentMethodId) {
    const paymentDetails = document.querySelectorAll('.payment-details');
    paymentDetails.forEach(detail => detail.classList.add('hidden'));
    document.getElementById(paymentMethodId).classList.remove('hidden');
    const payNowButton = document.getElementById('payNowButton');
    payNowButton.classList.remove('hidden');
}
showPaymentMethod('googlePayDetails');
document.getElementById('payNowButton').addEventListener('click', function() {
    window.location.href = "order-placed.html"; });
