const readline = require("readline-sync");

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

// Countries Data
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

// Helper Functions
function converter(user, op1, op2) {
  if (user === "a") return op1;
  if (user === "b") return op2;
}

function checker(userChoice, correctChoice, score) {
  if (userChoice === correctChoice) {
    score++;
    console.log(`You Got it! | Current score ${score}`);
    return { game: true, score };
  } else {
    console.log(`Sorry that's not right! | Final score ${score}`);
    return { game: false, score };
  }
}

function getHigher(first, second) {
  return first.extention > second.extention ? first : second;
}

function getRandomCountry(exclude = null) {
  let random;
  do {
    random = countries[Math.floor(Math.random() * countries.length)];
  } while (random === exclude);
  return random;
}

// Game Logic
let sample1 = getRandomCountry();
let sample2 = getRandomCountry(sample1);
let score = 0;
let game = true;

while (game) {
  console.clear();
  console.log(logo);

  const guessInput = readline
    .question(
      `Compare A: ${sample1.country}, a country in ${sample1.region} | population: ${sample1.population.toLocaleString()}
${vs}
With B: ${sample2.country}, a country in ${sample2.region} | population: ${sample2.population.toLocaleString()}
Type 'A' or 'B': `
    )
    .toLowerCase();

  const guess = converter(guessInput, sample1, sample2);
  const higher = getHigher(sample1, sample2);

  const result = checker(guess, higher, score);
  game = result.game;
  score = result.score;

  sample1 = sample2;
  sample2 = getRandomCountry(sample1);
}