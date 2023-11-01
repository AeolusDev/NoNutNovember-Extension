let manualRequest = false;
let list = []; // Initialize the list of websites to redirect

// Fetch the list of websites to redirect when the extension is initialized
fetchList();

// Add an event listener for webNavigation.onCompleted outside of onInstalled
chrome.webNavigation.onCompleted.addListener(function (details) {
    const url = new URL(details.url);
    const hostname = url.hostname;

    if (list.includes(hostname)) {
        chrome.tabs.remove(details.tabId);
    } else {
        console.log("Link Safe");
    }
});

// Function to fetch the list of websites to redirect
function fetchList() {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImNhcHRhaW5jb29sNjMzMyIsImlhdCI6MTY5ODQ4NDc5M30.TzrNAy0qJb5faKAxHNm9WZkKMdWFzFKps7QOUJbw8g0'; // Replace with your actual token
    fetch('https://kill-switch-api-666ccaeac838.herokuapp.com/api/get', {
        headers: {
            'Authorization': token,
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        list = data.entries;
    })
    .catch(error => {
        console.error('An error has occurred:', error);
    });
}