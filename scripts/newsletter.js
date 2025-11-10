// Newsletter page functionality

document.addEventListener('DOMContentLoaded', function() {
    const subscribeForm = document.getElementById('subscribeForm');
    
    if (subscribeForm) {
        subscribeForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value;
            
            // In a real implementation, this would send the email to a backend service
            // For now, we'll just show a success message
            
            if (email && isValidEmail(email)) {
                // Simulate API call
                setTimeout(() => {
                    showMessage('subscribeMessage', 'Thank you for subscribing! You will receive our newsletter at ' + email, 'success');
                    emailInput.value = '';
                }, 500);
            } else {
                showMessage('subscribeMessage', 'Please enter a valid email address.', 'error');
            }
        });
    }
});

// Email validation helper
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
