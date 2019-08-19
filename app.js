"use strict";



//This is how we acccess the container that we will 'type' into.
var container = document.getElementById("content");

//The different messages.
var intro_message = "I'm an engineering student at "
  .split("")
  .concat(["<a class=\"uniandes\" href=\"https://uniandes.edu.co/en\" target=\"_blank\">uniandes</a>"])
  .concat(" and I'm interested in various topics. Among my interests are literature, liguistics, music, information theory, generative grammars, 3d printing, and the list keeps growing..."
    .split(""));
var contact_info = "You can find me at p.salazar12[at]uniandes.edu.co and @pedrito8472 on "
  .concat(["<a class=\"twitter\" href=\"twitter.com/pedrito8472\" target=\"_blank\">twitter</a>"])
  .concat(".".split(""));
var projects = "At the moment I'm working on an autonomous program grading tool called "
  .split("")
  .concat(["<a class=\"senecode\" href=\"#\">Senecode</a>"])
  .concat(" (link will be made public soon) which is to be used in the new Intro to Programming course at ".split(""))
  .concat(["<a class=\"uniandes\" href=\"https://uniandes.edu.co/en\" target=\"_blank\">uniandes</a>"])
  .concat(".".split(""));

//this is the function that gets called when the different pages load.
function ghostSummoner(id) {
  var i = 0;
  var message = undefined;
  switch (id) {
  case 1:
    message = intro_message;
    break;
  case 2:
    message = contact_info;
    break;
  case 3:
    message = projects;
    break;
  }

//this function is called by the summoner
  function ghostWriter() {
    if (i < message.length) {
      container.innerHTML += message[i];
      i++;
      setTimeout(ghostWriter, 15);
    }
  }
  ghostWriter();
}





