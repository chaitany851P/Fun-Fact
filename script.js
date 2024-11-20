// script.js
const facts = [
    {
        icon: "❤️",
        title: "Programming Passion",
        description: "I absolutely love programming! It's not just a skill, it's my passion. I enjoy creating solutions and bringing ideas to life through code."
    },
    {
        icon: "💻",
        title: "Coding Enthusiasm",
        description: "Coding is my favorite activity. I love the challenge of solving problems and the satisfaction of writing clean, efficient code."
    },
    {
        icon: "🎵",
        title: "Music Love",
        description: "Music is an essential part of my life! Whether I'm coding or relaxing, good music always keeps me company and helps me stay focused."
    }
];

function displayFact(fact) {
    const factContainer = document.getElementById('fact-container');
    factContainer.innerHTML = `
        <div class="fact">
            <h3><i>${fact.icon} ${fact.title}</i></h3>
            <p>${fact.description}</p>
        </div>
    `;
}

function getRandomFact() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    return facts[randomIndex];
}

// Initial fact display
displayFact(getRandomFact());

// Event listener for button click
document.getElementById('generate-fact').addEventListener('click', () => {
    displayFact(getRandomFact());
});
