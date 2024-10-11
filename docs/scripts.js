let keywordIndex = 0;
const carouselList = document.getElementById('carousel-list');

// Fetch keywords from the JSON file
fetch('/keywords.json')
    .then(response => response.json())
    .then(data => {
        const keywords = data.keywords;
        updateCarousel(keywords);
        setInterval(() => updateCarousel(keywords), 2000);
    })
    .catch(error => console.error('Error fetching keywords:', error));

function updateCarousel(keywords) {
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
