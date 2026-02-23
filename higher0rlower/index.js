// ASCII Art
const vs = `
 _    __    
| |  / /____
| | / / ___/
| |/ (__  ) 
|___/____(_)
`;

const logo = `
    __  ___       __             
   / / / (_)___ _/ /_  ___  _____
  / /_/ / / __ \`/ __ \\/ _ \\/ ___/
 / __  / / /_/ / / / /  __/ /    
/_/ ///_/\\__, /_/ /_/\\___/_/     
   / /  /____/_      _____  _____
  / /   / __ \\ | /| / / _ \\/ ___/
 / /___/ /_/ / |/ |/ /  __/ /    
/_____/\\____/|__/|__/\\___/_/      
`;

const countries = [
  { country: "Canada", region: "North America", extention: 9984670, population: 41575585 },
  { country: "Vatican City State", region: "Southern Europe", extention: 0.49, population: 882 },
  { country: "United States", region: "North America", extention: 9525067, population: 341784857 },
  { country: "Brazil", region: "South America", extention: 8510346, population: 213421037 },
  { country: "Australia", region: "Oceania", extention: 7741220, population: 27840775 },
  { country: "India", region: "South Asia", extention: 3287263, population: 1428627663 },
  { country: "Argentina", region: "South America", extention: 2780400, population: 46735004 },
  { country: "Kazakhstan", region: "Central Asia", extention: 2724910, population: 20495975 },
  { country: "Algeria", region: "North Africa", extention: 2381741, population: 47400000 },
  { country: "Democratic R. Congo", region: "Central Africa", extention: 2344858, population: 114388160 },
  { country: "Saudi Arabia", region: "West Asia", extention: 2149690, population: 33702731 },
  { country: "Mexico", region: "North America", extention: 1964375, population: 131946900 },
  { country: "Indonesia", region: "Southeast Asia", extention: 1904569, population: 284438782 }
];

const content = document.getElementById("Content");
const runButton = document.getElementById("run-button");

let sample1;
let sample2;
let score;
let game;

function getRandomCountry(exclude = null) {
  let random;
  do {
    random = countries[Math.floor(Math.random() * countries.length)];
  } while (random === exclude);
  return random;
}

function getHigher(first, second) {
  return first.extention > second.extention ? first : second;
}

function renderRound() {
  content.innerHTML = `
${logo}

Compare A: ${sample1.country}, a country in ${sample1.region}
Population: ${sample1.population.toLocaleString()}

${vs}

With B: ${sample2.country}, a country in ${sample2.region}
Population: ${sample2.population.toLocaleString()}

Choose:
<button onclick="handleGuess('a')">A</button>
<button onclick="handleGuess('b')">B</button>
`;
}

function handleGuess(choice) {
  if (!game) return;

  const guess = choice === "a" ? sample1 : sample2;
  const higher = getHigher(sample1, sample2);

  if (guess === higher) {
    score++;
    content.innerHTML += `\n\nYou got it! Current score: ${score}\n`;
    
    sample1 = sample2;
    sample2 = getRandomCountry(sample1);

    setTimeout(renderRound, 1500);
  } else {
    game = false;
    content.innerHTML += `\n\nGame Over! Final score: ${score}\n`;
    content.innerHTML += `<br><br><button onclick="startGame()">Play Again</button>`;
  }
}

function startGame() {
  score = 0;
  game = true;
  sample1 = getRandomCountry();
  sample2 = getRandomCountry(sample1);
  renderRound();
}

runButton.addEventListener("click", startGame);
