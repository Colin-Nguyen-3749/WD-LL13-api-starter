/*
🧠 Copilot Helper Notes – Please Follow These Guidelines:

This is a beginner-friendly project. Suggestions should:
- Use plain JavaScript (no frameworks, Canvas, or game libraries).
- Use `fetch()` with `.then()` syntax (not async/await unless requested).
- Prefer `const` and `let`, and keep variable/function names clear and descriptive.
- Use `||` and `&&` in conditionals only when needed – clarity first.
- Break logic into small, readable functions when appropriate.
- Avoid advanced ES6+ features (e.g., destructuring, optional chaining) unless scaffolded.
- Avoid arrow functions unless needed for clarity or brevity.
- Add helpful inline comments, especially around tricky logic or new patterns.

This helps students learn to read, debug, and extend code confidently.
*/

/*
Students — No need to worry about this block! 
It’s just here to help Copilot support you better. 
Start your code below 👇
*/

// Use this script to write your fetch logic
// You'll fetch data from your selected API and display it on the page

// Function to fetch a yes/no answer from the API
function fetchYesNoAnswer() {
    console.log("Fetching yes/no answer...");
    
    fetch('https://yesno.wtf/api')
        .then(function(response) {
            // Check if the request was successful
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Failed to fetch yes/no answer');
            }
        })
        .then(function(data) {
            // Display the answer and GIF on the page
            displayYesNoAnswer(data.answer, data.image);
        })
        .catch(function(error) {
            // Handle any errors that occurred
            console.error('Error:', error);
            displayError('Sorry, could not load a yes/no answer right now.');
        });
}

// Function to display the yes/no answer and GIF on the webpage
function displayYesNoAnswer(answer, imageUrl) {
    // Find the output container
    const outputContainer = document.getElementById('output');
    
    // Add some comic book flair to the answer
    let comicAnswer = answer.toUpperCase();
    if (answer.toLowerCase() === 'yes') {
        comicAnswer = '💥 YES! 💥';
    } else if (answer.toLowerCase() === 'no') {
        comicAnswer = '⚡ NO! ⚡';
    }
    
    if (outputContainer) {
        outputContainer.innerHTML = 
            '<div class="speech-bubble">' + comicAnswer + '</div>' +
            '<div class="gif-container">' +
            '<img src="' + imageUrl + '" alt="' + answer + ' GIF" style="max-width: 400px;">' +
            '</div>' +
            '<button class="refresh-button" onclick="fetchYesNoAnswer()">⚡ ZAP! Another Answer! ⚡</button>';
    }
}

// Function to display error messages
function displayError(message) {
    const outputContainer = document.getElementById('output');
    
    if (outputContainer) {
        outputContainer.innerHTML = '<h2>Oops!</h2><p>' + message + '</p>';
    }
}

// Fetch a yes/no answer when the page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log("Page loaded, fetching yes/no answer...");
    fetchYesNoAnswer();
});

// Example placeholder:
console.log("Team activity starter code loaded.");