const quotes = [
    "The only limit to our realization of tomorrow is our doubts of today.",
    "Life is 10% what happens to us and 90% how we react to it.",
    "Good, better, best. Never let it rest. 'Til your good is better and your better is best.",
    "Do not watch the clock. Do what it does. Keep going.",
    "Keep your face always toward the sunshine—and shadows will fall behind you."
];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').innerText = quotes[randomIndex];
}
