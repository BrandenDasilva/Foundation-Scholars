// Contact page functionality

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                affiliation: document.getElementById('affiliation').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };
            
            // Validate form
            if (!formData.name || !formData.email || !formData.subject || !formData.message) {
                showMessage('contactMessage', 'Please fill in all required fields.', 'error');
                return;
            }
            
            if (!isValidEmail(formData.email)) {
                showMessage('contactMessage', 'Please enter a valid email address.', 'error');
                return;
            }
            
            // In a real implementation, this would send the form data to a backend service
            // For now, we'll just show a success message
            
            // Simulate API call
            setTimeout(() => {
                showMessage('contactMessage', 'Thank you for your message, ' + formData.name + '! We will get back to you soon at ' + formData.email + '.', 'success');
                
                // Reset form
                contactForm.reset();
            }, 500);
        });
    }
});

// Email validation helper
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
