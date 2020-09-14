// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * 
 *  Counter 1 has a nested function within it. Counter2 is just incrimenting count. 
 * 2. Which of the two uses a closure? How can you tell?
 * Counter 1 is the closure because it is accessing the count value which is in the outer scope of the function counter.
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 * I guess counter 2 would be more benefical if we were keeping track of count somewhere else in the program. 
 * 
 * 
 *
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
    
    count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){
  
  return Math.floor(Math.random() * 3)
  
}

console.log("Points this inning:", inning())


//console.log("inning is ", inning())
/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(numOfInnings,inning){
  let homeTeam = 0
  let awayTeam = 0
  
  
  for(let i = 0; i < numOfInnings; i++) { 
    homeTeam = homeTeam + inning()
    awayTeam = awayTeam + inning()
  }

  let endScore = { 
    home: homeTeam, 
    away: awayTeam
  }

  return endScore

}
console.log(finalScore(9,inning))
/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam

Final Score: awayTeam - homeTeam */

function getInningScore() { 

}

function scoreboard(numOfInnings,inning,getInningScore) {
  // need to display score of every inning 
  // need to output the total score of the game. 
  let homeTeam = 0
  let awayTeam = 0
  
  
  
  for(let i = 1; i < numOfInnings + 1; i++) { 
    getInningScore =`Inning: ${i}: Away Team: ${awayTeam} - Home Team:${homeTeam}`
    homeTeam = homeTeam + inning()
    awayTeam = awayTeam + inning()
    console.log(getInningScore)
  }

    return `The final score is...  Away Team: ${awayTeam} - Home Team: ${homeTeam}`


}
console.log(scoreboard(9,inning, getInningScore))
