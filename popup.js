// popup.js

document.getElementById('open-link').addEventListener('click', () => {
    const link = document.getElementById('excel-link').value.trim();
    
    if (link) {
        // Validate URL format (basic check)
        try {
            new URL(link);
            chrome.tabs.create({ url: link });
        } catch (e) {
            alert('Please enter a valid URL.');
        }
    } else {
        alert('Please enter a link.');
    }
});