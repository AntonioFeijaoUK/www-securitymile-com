let keywordIndex = 0;
const carouselList = document.getElementById('carousel-list');

// Fetch keywords from the JSON file
fetch('/keywords.json')
    .then(response => response.json())
    .then(data => {
        const keywords = data.keywords;
        
        // Populate carousel with all keywords at once
        keywords.forEach((keyword, index) => {
            const listItem = document.createElement('li');
            listItem.textContent = keyword;
            listItem.style.transform = `translateY(${index * 50}px)`;
            carouselList.appendChild(listItem);
        });
        
        // Start the scrolling effect
        setInterval(() => scrollCarousel(keywords), 100);
    })
    .catch(error => console.error('Error fetching keywords:', error));

function scrollCarousel(keywords) {
    const listItems = document.querySelectorAll('#carousel-list li');

    listItems.forEach((li, index) => {
        const currentY = parseFloat(li.style.transform.match(/translateY\((.*)px\)/)[1]);
        const newY = currentY - 1;  // Adjust this value for smoother or faster scrolling
        li.style.transform = `translateY(${newY}px)`;

        // Reset position when the item goes off-screen
        if (newY < -50) {
            const lastY = parseFloat(listItems[listItems.length - 1].style.transform.match(/translateY\((.*)px\)/)[1]);
            li.style.transform = `translateY(${lastY + 50}px)`;
        }
    });
}
