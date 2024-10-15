// Fetch keywords from the JSON file and populate the grid
fetch('/keywords.json')
    .then(response => response.json())
    .then(data => {
        const keywordsGrid = document.getElementById('keywords-grid');
        const keywords = data.keywords;

        keywords.forEach(keyword => {
            const keywordDiv = document.createElement('div');
            keywordDiv.textContent = keyword;
            keywordsGrid.appendChild(keywordDiv);
        });
    })
    .catch(error => console.error('Error fetching keywords:', error));
