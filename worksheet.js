let dayOfWeek = 'Monday';
console.log(dayOfWeek);

dayOfWeek = 'Friday';
console.log(`I can't wait for ${dayOfWeek}`);

let animalInput = prompt('What is your favorite animal?')
let colorInput = prompt('What is your favorite color?')
let coloredAnimal = (`I've never seen a ${colorInput} ${animalInput}!`)
alert(coloredAnimal)

//my favorite breakfast...Reeses Puffs
//my favorite lunch...Peanutbutter and Jelly
//my favorite dinner...Pizza

let timeOfDay = 1300
let mealChoice;

if(timeOfDay < 1200){
    mealChoice = 'Reeses Puffs!'
}
else if(timeOfDay > 1200 && timeOfDay < 1700){
    mealChoice = 'PB&J!'
}
else{
    mealChoice = 'Pizza!'
}

console.log(mealChoice)

function getRandomInt(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
}

let randomInt;
randomInt = getRandomInt(0,10)

if(randomInt > 0 && randomInt < 2){
    console.log('Beatles')
}
if(randomInt > 3 && randomInt < 5){
    console.log('Stones')
}
if(randomInt > 6 && randomInt < 8){
    console.log('Floyd')
}
if(randomInt === 9 || randomInt === 10){
    console.log('Hendrix')
}

for(i=0; i < 7; i++){
    console.log('JavaScript is Cool!');
}

for(i=1; i <= 10; i++){
    console.log(i);
}

for(i=0; i < 5; i++){
    console.log('hello');
    console.log('goodbye');
}

let day = new Date();
let instructorIsAwesome = true;
let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let dayIndex = day.getDay();
let today = days[dayIndex];
while(instructorIsAwesome){
    if(today == 'Friday' || today == 'Saturday' || today == 'Sunday'){
        instructorIsAwesome = false;
        console.log("It's the weekend!");        
    }
    else{
        instructorIsAwesome = true;
        console.log("Eat, Sleep, Code, Repeat!");
    }
}

function printMovieName(){
    let favoriteMovie = 'The Batman';
    console.log(favoriteMovie);
}
printMovieName()

function getFavoriteBand(){
    userInput = prompt('What is your favorite band?');
    return userInput;
}

favoriteBand = getFavoriteBand();
console.log(favoriteBand);

function concertDisplay(musicalAct){
    myStreet = prompt('What street do you live on?');
    console.log(`It would be greate if ${musicalAct} played on ${myStreet}`);
}

concertDisplay(favoriteBand);

let desktopItems = ['phone', 'cup', 'mouse'];
console.log(desktopItems[1]);
desktopItems.push('Infinity Guantlet');
for(i = 0; i < desktopItems.length; i++){
    console.log(desktopItems[i]);
}

let magicNumber = getRandomInt(0, 100);
let guess = 0;

while(guess != magicNumber){
    guess = prompt('Guess the magic number!?!');
    if(guess < magicNumber){
        alert('Too low!');
    }
    else if(guess > magicNumber){
        alert('Too high!');
    }
    let difference = Math.abs(guess - magicNumber);
    if (guess == magicNumber){
        alert(`You guessed ${guess} and the magic number is ${magicNumber}. CONGRATULATIONS.`);
    }
    else if(difference <= 10){
        alert('Getting Warmer!');
    }
}