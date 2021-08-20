const readlineSync = require("readline-sync");
const chalk = require("chalk");
console.log("Behold, " + chalk.cyan.bold("THE MARVEL QUIZ"));

let quizNumber;
let score2 = 0;

const quiz1 = [
  {
    question:`What is Spider-Man\'s real name? 
1)Bruce Wayne 
2)Peter Parker
3)Bruce Banner
4)Clark Kent
`,
    answer:"2"
  },
  {
    question : `Which city does Spider-Man protect from crime?
1)London
2)Los Angeles
3)Gotham City
4)New York City
`,
    answer : "4"
  },
  {
    question : `Who wrote the original Spider-Man comics? 
1)J.K. Rowling
2)Walt Disney
3)Stan Lee
4)Matt Groening 
`,
    answer : "3"
  },
  {
    question : `Where does Spider-Man shoot his webs from? 
1)His wrists
2)His head
3)His feet
4)His eyes 
`,
    answer : "1"
  },
  {
    question : `Which newspaper did Peter Parker work for in the 2002 film Spider-Man? 
1)Daily Planet
2)Daily Bugle
3)Sunday Post
4)The New York Daily
`,
    answer : "2"
  },
  {
    question : `How did Peter Parker get his special powers? 
1)He drank a special potion
2)He was bitten by a radioactive spider
3)From a fairground machine
4)He was struck by lightning
`,
    answer : "2"
  },
  {
    question : `What were the names of Peter Parker\'s parents? 
1)Homer and Marge
2)Richard and Mary
3)Peter and Lois
4)Han and Leia
`,
    answer : "2"
  }
]

let quiz2 = [
  {
    question: `What is Iron Man\'s alter ego?
1)Tony Tiger
2)Tony Hart
3)Tony Stark
4)Tony Bogtrotter
`,
    answer:"3"
  },
  {
    question: `What actor lends his trademark swagger to the Iron Man role?
1)Robert Downey Junior
2)Robert Downey Senior
3)Robert Downey the third
4)Ian McKellen
`,
    answer:"1"
  },
  {
    question: `What is Tony Stark\'s business empire called?
1)Stark Limited
2)Starkcom
3)Stark Industries
4)Stark Corp
`,
    answer:"3"
  },
  {
    question: `Who plays Obidiah Stane?
1)James Tunnelles
2)Jeff Bridges
3)James Rhodes
4)Jeff Flyover
`,
    answer:"2"
  },
  {
    question: `What\'s Obidiah Stanes called when he is suited up?
1)War Monger
2)Iron Monger
3)Fish Monger
4)War Machine
`,
    answer:"2"
  },
  {
    question: `What is Pepper full name?
1)"Virginia Potts"
2)"Lucky Potts"
3)"Pans Potss"
4)"Nonstick potts"
`,
    answer:"1"
  },
  {
    question: `Who plays Virginia?
1)Gwyneth Paltrow
2)Leslie Bibb
3)Ghostface Killah
4)I did. I am a famous Hollywood actor who writes these quizzes for fun
`,
    answer:"1"
  }
]

let quiz3 = [
  {
    question : `What's Thor\'s hammer's name?
1)Melbö
2)Morgöt
3)Mjölnir 
4)Mönty
`,
    answer : "3"
  },
  {
    question : `As well as being a famous movie star, Thor was one of the Gods of which real-life ancient civilization?
1)The Romans
2)The Vikings
3)The Phoenicians
4)The Incans
`,
    answer : "1"
  },
  {
    question : `Who is Thor\'s dad?
1)Loki
2)Odin
3)Thanos
4)Frigg
`,
    answer : "2"
  },
  {
    question : `Where does Thor live?
1)Yggdrasil
2)Asgard
3)Ragnarok
4)In a caravan 4 miles outside of Batley
`,
    answer : "2"
  },
  {
    question : `Thor\'s daughter is called ?
Bella
Stella
Bobby
Hela
`,
    answer : "4"
  },
  {
    question : `Can Thor fly?
1)Yes of course he can
2)No - his hammer can fly and he just holds on
`,
    answer : "2"
  },
  {
    question : `What is thor\'s mother name
1)Fandral
2)Laufy
3)Frigga
4)Volstagg
`,
    answer : "3"
  }
]
let quiz4 = [
  {
    question : `What symbol is on Captain America\'s shield?
1)A dollar sign
2)A stripe
3)A star
4)A dot  
`,
    answer : "3"
  },
  {
    question : `What's Captain America\'s real name?
1)Roger Stevenson
2)Raoul Stevie
3)Steve Rogers
4)Reginald Nation
`,
    answer : "3"
  },
  {
    question : `In Avengers: Civil War, who does Captain America fight?
1)Thor
2)Spider-man
3)Iron Man
4)Captain China
`,
    answer : "3"
  },
  {
    question : `Which of these things turned Steve Rogers into Captain America?
1)Mega Fighter Juice
2)Turbo Warrior Potion
3)Super Soldier Serum
4)Hyper Hero Ointment
`,
    answer : "3"
  },
  {
    question : `What is Captain America\'s shield made out of?
1)Plastic and bits of cardboard
2)Adamantium
3)Vibranium
4)Titanium alloy
`,
    answer : "3"
  },
  {
    question : `Which one of these is NOT a Captain America movie?
1)Captain America: The Winter Soldier
2)Captain America: The First Avenger 
3)Captain America: Civil War 
4)Captain America: Homecoming
`,
    answer : "4"
  },
  {
    question : `Who is Captain America\'s best friend?
1)Iron Man
2)Black Panther
3)Bucky Barnes
4)Wolverine from X-Men
`,
    answer : "3"
  }
]

let yourName = readlineSync.question("Please enter your name : ");

console.log("");
console.log("Welcome " + yourName + "."); 
console.log("");

console.log("Let\'s get started.... ");
console.log("");


const selectQuiz = () => {
  console.log(`  1) Spider Man
  2) Iron Man
  3) Thor
  4) Captain America
  `);
  let quizSelection = readlineSync.question("Please select the number of the quiz you want to play : ");

  console.log("You selected : " + chalk.green(quizSelection));
  console.log("");

  if(quizSelection === "1"){
    quizNumber = quiz1;
  } else if(quizSelection === "2"){
    quizNumber = quiz2;
  } else if(quizSelection === "3"){
    quizNumber = quiz3;
  } else if(quizSelection === "4"){
    quizNumber = quiz4;
  } else {
    console.log(chalk.red("Invalid Selection. Select again!!"));
    console.log("");
    selectQuiz();
  }
}

selectQuiz();

readlineSync.question(chalk.yellow("Press any key to begin..."));
console.log("");


let score = 0;

const  QnA = (question,answer) => {
  // console.log("press e to exit");
  let ans = readlineSync.question(question);
  // console.log("press e to exit");
  if (ans === answer){
    console.log("");
    console.log(chalk.green("You're absolutely correct!!"));
    score = score + 1;
    console.log(chalk.green("Your current score is " + score));
    console.log("");
  } else{
    console.log("");
    console.log(chalk.yellow("Oops! Looks like you didn't know the character well..."));
    console.log(chalk.yellow("Your current score is " + score));
    console.log(""); 
  }
  
}

const playAgain = () => {
  for(let i = 0 ; i < quizNumber.length ; i++){ 
      QnA(quizNumber[i].question,quizNumber[i].answer);
  }

  let Pagain = readlineSync.question("Do you want to continue? Y or N : ");
  if(Pagain.toUpperCase() === "Y"){
    console.clear();
    if(score > score2){
      score2 = score;
    }
    // console.log(chalk.yellow("Your score " + score2));
    console.log("");
    score = 0;
    selectQuiz();
    playAgain();
  }
}

playAgain();



console.log(" ");
console.log(chalk.yellow.bold("Your score current is " + score));
console.log(" ");
console.log(chalk.green.bold("Personal best : " + score2));
console.log("");
console.log(chalk.black.bold.bgWhite("Thanks For Playing..."));