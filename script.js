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

// Function to fetch a cat fact from the API
function fetchCatFact() {
    console.log("Fetching cat fact...");
    
    fetch('https://catfact.ninja/fact')
        .then(response => {
            // Check if the request was successful
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Failed to fetch cat fact');
            }
        })
        .then(function(data) {
            // Display the cat fact on the page
            displayCatFact(data.fact);
        })
        .catch(function(error) {
            // Handle any errors that occurred
            console.error('Error:', error);
            displayError('Sorry, could not load a cat fact right now.');
        });
}

// Function to display the cat fact on the webpage
function displayCatFact(fact) {
    // Find the element where we want to display the fact
    const factContainer = document.getElementById('cat-fact-container');
    
    if (factContainer) {
        factContainer.innerHTML = '<h2>Cat Fact:</h2><p>' + fact + '</p>';
    } else {
        // If container doesn't exist, create one and add to body
        const newContainer = document.createElement('div');
        newContainer.id = 'cat-fact-container';
        newContainer.innerHTML = '<h2>Cat Fact:</h2><p>' + fact + '</p>';
        document.body.appendChild(newContainer);
    }
}

// Function to display error messages
function displayError(message) {
    const factContainer = document.getElementById('cat-fact-container');
    
    if (factContainer) {
        factContainer.innerHTML = '<h2>Oops!</h2><p>' + message + '</p>';
    } else {
        const newContainer = document.createElement('div');
        newContainer.id = 'cat-fact-container';
        newContainer.innerHTML = '<h2>Oops!</h2><p>' + message + '</p>';
        document.body.appendChild(newContainer);
    }
}

// Fetch a cat fact when the page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log("Page loaded, fetching cat fact...");
    fetchCatFact();
});

// Example placeholder:
console.log("Team activity starter code loaded.");