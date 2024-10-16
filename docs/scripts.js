const keywordsList = document.getElementById('keywords-list');

// Fetch keywords from the JSON file and populate the list
fetch('/keywords.json')
    .then(response => response.json())
    .then(data => {
        const keywords = data.keywords;

        // Loop through the keywords and append them to the list
        keywords.forEach(keyword => {
            const listItem = document.createElement('li');
            listItem.textContent = keyword;
            keywordsList.appendChild(listItem);
        });
    })
    .catch(error => console.error('Error fetching keywords:', error));
