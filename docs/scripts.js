const keywords = [
    "Cybersecurity Solutions", 
    "Penetration Testing", 
    "Cloud Security", 
    "Incident Response", 
    "Threat Intelligence", 
    "Zero Trust Architecture", 
    "Network Defence"
];
const carouselList = document.getElementById('carousel-list');
let keywordIndex = 0;

// Function to update the carousel effect
function updateCarousel() {
    const listItems = document.querySelectorAll('#carousel-list li');
    
    // Create a new list item for the current keyword
    const newItem = document.createElement('li');
    newItem.textContent = keywords[keywordIndex];
    newItem.classList.add('fade-in');

    // Insert the new item at the top
    carouselList.insertBefore(newItem, carouselList.firstChild);

    // If there are more than 5 items, remove the oldest one
    if (listItems.length >= 5) {
        listItems[listItems.length - 1].classList.add('fade-out');
        setTimeout(() => {
            carouselList.removeChild(listItems[listItems.length - 1]);
        }, 1000);  // 1 second to allow fade-out effect
    }

    // Update the index to cycle through the keywords
    keywordIndex = (keywordIndex + 1) % keywords.length;
}

// Update the carousel every 2 seconds
setInterval(updateCarousel, 2000);
