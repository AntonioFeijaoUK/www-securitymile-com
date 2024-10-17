// Fetch keywords from the JSON file
fetch('/keywords.json')
    .then(response => response.json())
    .then(data => {
        const keywords = data.keywords;

        // Get the word cloud container
        const wordCloudContainer = document.getElementById('word-cloud');

        // Create each keyword as a span with varying sizes
        keywords.forEach(keyword => {
            const keywordSpan = document.createElement('span');
            keywordSpan.textContent = keyword;
            keywordSpan.setAttribute('aria-label', keyword); // Accessibility

            // Adjust font size between 12px and 24px
            const fontSize = Math.floor(Math.random() * 22) + 12; // Between 12px and 44px
            keywordSpan.style.fontSize = fontSize + 'px';
            keywordSpan.style.color = getDarkThemeColor(); // Use dark theme colours

            keywordSpan.classList.add('keyword'); // Add CSS class for other styles

            wordCloudContainer.appendChild(keywordSpan);
        });
    })
    .catch(error => console.error('Error fetching keywords:', error));

// Helper function to generate suitable colours for dark themes
function getDarkThemeColor() {
    const darkThemeColors = [
        '#4682B4', // Steel Blue
        '#00BFFF', // Deep Sky Blue
        '#32CD32', // Lime Green
        '#66CDAA', // Medium Aquamarine
        '#20B2AA', // Light Sea Green
        '#5F9EA0', // Cadet Blue
        '#008080', // Teal
        '#3CB371', // Medium Sea Green
        '#1E90FF', // Dodger Blue
        '#2E8B57'  // Sea Green
    ];
    return darkThemeColors[Math.floor(Math.random() * darkThemeColors.length)];
}
