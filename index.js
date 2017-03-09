'use strict';
var Alexa = require('alexa-sdk');

//=========================================================================================================================================
//TODO: The items below this comment need your attention.
//=========================================================================================================================================

//Replace with your app ID (OPTIONAL).  You can find this value at the top of your skill's page on http://developer.amazon.com.  
//Make sure to enclose your value in quotes, like this: var APP_ID = "amzn1.ask.skill.bb4045e6-b3e8-4133-b650-72923c5980f1";
var APP_ID = undefined;

var SKILL_NAME = "Happy Facts";
var GET_FACT_MESSAGE = "Here's your fact: ";
var HELP_MESSAGE = "You can say tell me a happy fact, or, you can say exit... What can I help you with?";
var HELP_REPROMPT = "What can I help you with?";
var STOP_MESSAGE = "Goodbye!";

//=========================================================================================================================================
//TODO: Replace this data with your own.  You can find translations of this data at http://github.com/alexa/skill-sample-node-js-fact/data
//=========================================================================================================================================
var data = [
    "Sea otters hold hands when they sleep to keep from drifting apart.",
    "When you were born, you were, for a moment, the youngest person on earth.",
    "The elements that we are composed of were formed in the interiors of collapsing stars. We are all made of star dust.",
    "Cows have best friends.",
    "A prison in Washington pairs up death row shelter cats with select inmates as part of a rehabilitation program. It seems to be a pretty wonderful thing for both the inmates and the cats.",
    "Blind people smile even though they’ve never seen anyone else smile.",
    "Turtles can breathe through their butts.",
    "The Beatles used the word love 613 times in their songs.",
    "Squirrels plant thousands of new trees each year simply by forgetting where they put their acorns.",
    "Macaques in Japan use coins to buy vending machine snacks.",
    "Norway knighted a penguin.",
    "In China, killing a Panda is punishable by death.",
    "Rats laugh when tickled.",
    "The voices of Mickey Mouse and Minnie Mouse got married in real life.",
    "Spiders can’t fly.",
    "Sweden has a rabbit show jumping competition called Kaninhoppning.",
    "Gentoo penguins propose to their lifemates with a pebble.",
    "Dolphins have names for each other.",
    "Kissing burns 2 calories a minute. ",
    "Puffins mate for life. They make their homes on cliff sides and even leave some separate room for their toilet.",
    "The Kingdom of Bhutan uses Gross National Happiness as an important national measurement.",
    "When playing with female puppies, male puppies will often let them win, even if they have a physical advantage.",
    "A study measuring the effects of music found that cows produce more milk when listening to soothing music. They produce the most when listening to R.E.M’s Everybody Hurts.",
    "Google, the periodic table, the structure of our DNA, and Yesterday by the Beatles are all ideas that were conceived in dreams.",
    "There’s a superhero with a hearing aid called ‘Blue Ear’. He was created by Marvel Comics to encourage a little boy to wear his own!"
];

//=========================================================================================================================================
//Editing anything below this line might break your skill.  
//=========================================================================================================================================
exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetFact');
    },
    'GetNewFactIntent': function () {
        this.emit('GetFact');
    },
    'GetFact': function () {
        var factArr = data;
        var factIndex = Math.floor(Math.random() * factArr.length);
        var randomFact = factArr[factIndex];
        var speechOutput = GET_FACT_MESSAGE + randomFact;
        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomFact)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = HELP_MESSAGE;
        var reprompt = HELP_REPROMPT;
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    }
};