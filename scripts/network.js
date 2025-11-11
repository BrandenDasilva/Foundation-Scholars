// Network page functionality

document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const classYearFilter = document.getElementById('classYearFilter');
    const statusFilter = document.getElementById('statusFilter');
    
    // Search functionality
    if (searchInput) {
        searchInput.addEventListener('input', filterMembers);
    }
    
    if (classYearFilter) {
        classYearFilter.addEventListener('change', filterMembers);
    }
    
    if (statusFilter) {
        statusFilter.addEventListener('change', filterMembers);
    }
    
    function filterMembers() {
        const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
        const selectedYear = classYearFilter ? classYearFilter.value : '';
        const selectedStatus = statusFilter ? statusFilter.value : '';
        
        // This is a placeholder function for when the member directory is populated
        // It would filter the member cards based on the search and filter criteria
        console.log('Filtering members:', { searchTerm, selectedYear, selectedStatus });
    }
});

// Show category function for network categories
function showCategory(category) {
    // This function would be implemented to show different member categories
    // For now, it's a placeholder that could open a modal or navigate to a filtered view
    console.log('Showing category:', category);
    
    // Example: scroll to member directory and apply filter
    const memberDirectory = document.querySelector('.member-directory');
    if (memberDirectory) {
        memberDirectory.scrollIntoView({ behavior: 'smooth' });
        
        // Apply filter based on category
        const statusFilter = document.getElementById('statusFilter');
        if (statusFilter) {
            if (category === 'current') {
                statusFilter.value = 'current';
            } else if (category === 'alumni') {
                statusFilter.value = 'alumni';
            }
            // Trigger filter change event
            statusFilter.dispatchEvent(new Event('change'));
        }
    }
}
