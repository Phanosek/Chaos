// do not remove, allowes autocomplete
/// <reference path="./../p5.global-mode.d.ts" />

function hiphop(tweet) {
  console.log(tweet.text,replace('rap));
}

function Hampl(tweet) {
  return tweet.text.match(/PetrHam/);
};

function setup() {
  var vysledek = tweets.filter(Hampl);
  
  console.log(vysledek);
}

function draw() {
  // put drawing code here
}
