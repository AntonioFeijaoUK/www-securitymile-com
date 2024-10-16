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
            
            // Adjust font size between 18px and 32px
            const fontSize = Math.floor(Math.random() * 15) + 32; // Between 18px and 32px
            keywordSpan.style.fontSize = fontSize + 'px';
            keywordSpan.style.margin = '10px';
            keywordSpan.style.display = 'inline-block';
            keywordSpan.style.color = getDarkThemeColor(); // Use dark theme colours
            
            wordCloudContainer.appendChild(keywordSpan);
        });
    })
    .catch(error => console.error('Error fetching keywords:', error));

// Helper function to generate suitable colours for dark themes
function getDarkThemeColor() {
    const darkThemeColors = [
        '#FFD700', // Gold
        '#ADFF2F', // Green Yellow
        '#FF4500', // Orange Red
        '#1E90FF', // Dodger Blue
        '#7FFFD4', // Aquamarine
        '#FF69B4', // Hot Pink
        '#BA55D3', // Medium Orchid
        '#32CD32', // Lime Green
        '#FF8C00', // Dark Orange
        '#00CED1'  // Dark Turquoise
    ];
    return darkThemeColors[Math.floor(Math.random() * darkThemeColors.length)];
}
