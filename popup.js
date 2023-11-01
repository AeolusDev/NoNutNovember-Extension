// // popup.js

// document.addEventListener('DOMContentLoaded', function () {
//     // Add a click event listener to the redirect button
//     document.getElementById('redirectButton').addEventListener('click', function () {
//         chrome.runtime.sendMessage({ action: "manualRedirect" });
//         console.log("redirect message sent")
//     });

//     document.getElementById('newUrl').addEventListener('click', function() {
//         const userInput = document.getElementById('userInputNewUrl');
//         console.log(userInput);
//         chrome.runtime.sendMessage({ action: "newUrlInput", msg: `${userInput.value}` });
//         console.log("Url Addition Request Sent")
//     });
// });
