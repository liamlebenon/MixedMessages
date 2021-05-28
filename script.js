// Script for Mixed Messages Project

//defining variables for ease of use
let wordSpace = document.getElementById("quote");

/* Random quote will be made up of 3 bits of data.
    1. A character
    2. A sentence
    3. A word to fit in
*/

//creating array of characters for 1.
let characters = ["Darth Vader", "Snake Pliscin", "Mad Max", "Jack Torrence", "Man With No Name", "Kilgore", "Braveheart", "Gollum", "Forrest Gump"];
let sentences = ["I am your ", "Here's ", "I love the smell of ", "They may take our lives, but they will never take our ", "My ", "Life is like a ", "I'm the king of the "];


function randomQuote(){
    let randomNumber1 = Math.floor(Math.random() * characters.length);
    let randomNumber2 = Math.floor(Math.random() * sentences.length);
    let character = characters[randomNumber1];
    let sentence = sentences[randomNumber2];
    wordSpace.innerHTML = character + " said: " + sentence;
}