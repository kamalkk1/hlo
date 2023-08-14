// Get references to DOM elements
const itemList = document.getElementById('itemList');
const categoryFilter = document.getElementById('category');
const availabilityFilter = document.getElementById('available'); // Add reference for availability filter

// Populate category and availability filter options
const uniqueCategories = [...new Set(items.map(item => item.category))];
categoryFilter.innerHTML += uniqueCategories.map(category => `<option value="${category}">${category}</option>`).join('');

const uniqueAvailability = [...new Set(items.map(item => item.available))];
availabilityFilter.innerHTML += uniqueAvailability.map(availability => `<option value="${availability}">${availability ? 'Available' : 'Not Available'}</option>`).join('');

// Display items based on selected filters
function displayItems() {
    const selectedCategory = categoryFilter.value;
    const selectedAvailability = availabilityFilter.value; // Get selected availability value

    // Filter items based on selected category and availability
    const filteredItems = items.filter(item => {
        return (!selectedCategory || item.category === selectedCategory) &&
               (!selectedAvailability || item.available === (selectedAvailability === 'true'));
    });

    // Display filtered items
    itemList.innerHTML = filteredItems.map(item => `<li>${item.name} - ${item.category} - ${item.available ? 'Available' : 'Not Available'}</li>`).join('');
}

// Event listeners for filter changes
categoryFilter.addEventListener('change', displayItems);
availabilityFilter.addEventListener('change', displayItems); // Add event listener for availability filter

// Initial display
displayItems();
