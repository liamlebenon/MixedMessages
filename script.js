// Script for Mixed Messages Project

//defining variables for ease of use
let wordSpace = document.getElementById("quote");

/* Random quote will be made up of 3 bits of data.
    1. A character
    2. A sentence
    3. A word to fit in
*/

//Creating the arrays
let characters = ["Darth Vader", "Snake Pliscin", "Mad Max", "Jack Torrence", "Man With No Name", "Kilgore", "Braveheart", "Gollum", "Forrest Gump"]; //creating array of characters for 1.
let sentences = ["I am your ", "Here's ", "I love the smell of ", "They may take our lives, but they will never take our ", "My ", "Life is like a ", "I'm the king of the ", "We're gonna need a bigger "];  //Array of sentences for 2
let words = ["father", "Johnny", "napalm", "freedom", "precious", "box of chocolates", "world", "boat"];  //Array of words for 3

//random number function
const randomNum = arr => {
    let rNum = Math.floor(Math.random() * arr.length);   //takes in an array and generates a random number based on its length
    return rNum;
}

//function for generating the random quote
function randomQuote(){
    let character = characters[randomNum(characters)];   //uses the random number function to get a random character
    let sentence = sentences[randomNum(sentences)];     //get random sentence
    let word = words[randomNum(words)];                 //get random word
    wordSpace.innerHTML = character + " said: " + sentence + word;      //adds the completed sentence to the area of the webpage

}