const quotes = [
    "\"It's gotta be better than wine tasting with Pierce. He refused to drink Pinot Noir because he thought it was french for black penis.\"",
    "\"Doing more than the minimum amount of work is my definition of failing.\"",
    "\"I don't have an ego. My Facebook photo is a landscape.\"",
    "\"I'm no politician. I'm just a fella. I think that beer should be cold and boots should be dusty. I think 9-11 was bad. And freedom? Well, I think that\'s just a little bit better.\"",
    "\"Cool cool cool.\"",
    "\"A passing grade? Like a C? Why don't I just get pregnant at a bus station?\"",
    "\"I'm going to eat spaceman paninis with black Hitler and there's nothing you can do about it!\"",
    "\"You can yell at me all you want! I've seen enough movies to know that popping the back of a raft makes it go faster!\"",
    "\"I had a couple of island girls over. One of them must have slipped me a mickey.\"",
    "\"I was never one to hold a grudge. My father held grudges. I'll always hate him for that.\"",
    "\"Blaming a bridge collapse on a school is like blaming owls for why I suck at analogies.\"",
    "\"I know what a metaphor is! It's like a thought with another thought's hat on.\"",
    "\"Frankly my dear - I don't give a dean!\"",
    "\"You know what they say - fives have lives, fours have chores, threes have fleas, twos have blues, and ones don't get a rhyme because they're garbage.\""
]

const characters = [
    'Jeff',
    'Jeff',
    'Jeff',
    'Jeff',
    'Abed',
    'Annie',
    'Troy',
    'Troy',
    'Pierce',
    'Pierce',
    'Britta',
    'Britta',
    'Dean',
    'Dean'
]

if(document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
} else {
    ready;
}

function ready() {
    const newQuoteButton = document.querySelector('.quote-button');
    newQuoteButton.addEventListener('click', newQuote);
}

function newQuote(event) {
    const buttonClicked = event.target;
    const quoteObject = buttonClicked.parentElement.parentElement.parentElement;
    const rand = Math.floor(Math.random() * quotes.length);
    const quote = quotes[rand];
    const character = characters[rand];
    quoteObject.querySelector('.side-default').textContent = quote;
    quoteObject.querySelector('.side-hover').textContent = character;
}