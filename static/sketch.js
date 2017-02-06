
/*var p5 = require("libs/p5.min.js");
var p5DOM = require("libs/p5.dom.min.js");
var p5Sound = require("libs/p5.sound.min.js");*/

//import p5 from "libs/p5.min.js";

function setup() {
  var inp = createInput('');
  inp.input(myInputEvent);

}

function myInputEvent() {
  console.log('you are typing: ', this.value());
}

function draw() {
  ellipse(50, 50, 80, 80);
}