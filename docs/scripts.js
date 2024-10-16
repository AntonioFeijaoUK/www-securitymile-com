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
            
            // Randomly adjust font size and color
            const fontSize = Math.floor(Math.random() * 25) + 12; // Between 12px and 37px
            keywordSpan.style.fontSize = fontSize + 'px';
            keywordSpan.style.margin = '10px';
            keywordSpan.style.display = 'inline-block';
            keywordSpan.style.color = randomColor(); // Assign random color
            
            wordCloudContainer.appendChild(keywordSpan);
        });
    })
    .catch(error => console.error('Error fetching keywords:', error));

// Helper function to generate random colors
function randomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
