// // background.js

// chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
//     console.log(changeInfo)
//     if (changeInfo.status === 'complete' && tab.url) {
//         if (tab.url.startsWith('https://in.mathworks.com')) {
//             chrome.action.enable(tabId);
//         } else {
//             chrome.action.disable(tabId);
//         }
//     }
//     chrome.scripting.addDivNextToH4({
//         target: { tabId: tab.id },
//         function: addDivNextToH4
//       });
// });
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete') {
        chrome.scripting.executeScript({
            target: { tabId: tabId },
            files: ['content.js']
          });
    }
});

// // Function to add a div next to every h4 element
// function addDivNextToH4() {
//     const headings = document.querySelectorAll('.question-landing-title h4');
  
//     headings.forEach((heading) => {
//       // Create a new div element
//       const newDiv = document.createElement('div');
//       newDiv.textContent = 'Additional Information';
//     //   newDiv.style.marginTop = '10px'; // Optional: Add some styling
  
//       // Insert the new div after the h4 element 
//       heading.parentNode.insertBefore(newDiv, heading.nextSibling);
//     });
//   }
