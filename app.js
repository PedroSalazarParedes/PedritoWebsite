"use strict";

function indexLoader() {
  const msg1 = document.getElementById("msg1");
  const msg2 = document.getElementById("msg2");
  const uniandes = document.getElementById("uniandes");
  const message1 = "I'm an engineering student at ";
  const message2 = " and I'm interested in various topics. Among my interests are literature, liguistics, music, information theory, generative grammars, 3d printing, and the list keeps growing...";
  const uniandesLink = "uniandes";

  let i1 = 0;
  let i2 = 0;
  let i3 = 0;

  function ghostWriter() {
    if (i1 < message1.length) {
      msg1.appendChild(document.createTextNode(message1.charAt(i1)));
      i1++;
    }
    else if (i2 < uniandesLink.length){
      uniandes.appendChild(document.createTextNode(uniandesLink.charAt(i2)));
      i2++;
    }
    else if (i3 < message2.length) {
      msg2.appendChild(document.createTextNode(message2.charAt(i3)));
      i3++;
    }
    if(i1 < message1.length || i2 < uniandesLink.length || i3 < message2.length){
      setTimeout(ghostWriter, 15);
    }
  }
  if(localStorage && localStorage.getItem("visitedIndex") == null) {
    localStorage.setItem("visitedIndex", 1);
    ghostWriter();
  }
  else{
    //ghostWriter();
    msg1.appendChild(document.createTextNode(message1));
    uniandes.appendChild(document.createTextNode(uniandesLink));
    msg2.appendChild(document.createTextNode(message2));
  }
}

function projectsLoader() {

  const msg1 = document.getElementById("msg1");
  const msg2 = document.getElementById("msg2");
  const msg3 = document.getElementById("msg3");
  const uniandes = document.getElementById("uniandes");
  const senecode = document.getElementById("senecode");
  const message1 = "At the moment I'm working on an autonomous program grading tool called ";
  const senecodeLink = "senecode";
  const message2 = " which is to be used in the new Intro to Programming course at ";
  const uniandesLink = "uniandes";

  let i1 = 0;
  let i2 = 0;
  let i3 = 0;
  let i4 = 0;

  function ghostWriter() {
    if (i1 < message1.length) {
      msg1.appendChild(document.createTextNode(message1.charAt(i1)));
      i1++;
    }
    else if (i2 < senecodeLink.length){
      senecode.appendChild(document.createTextNode(senecodeLink.charAt(i2)));
      i2++;
    }
    else if (i3 < message2.length) {
      msg2.appendChild(document.createTextNode(message2.charAt(i3)));
      i3++;
    }
    else if (i4 < uniandesLink.length) {
      uniandes.appendChild(document.createTextNode(uniandesLink.charAt(i4)));
      i4++;
    }

    if(i1 < message1.length || i2 < senecodeLink.length || i3 < message2.length || i4 < uniandesLink.length){
      setTimeout(ghostWriter, 15);
    }
    else {
      msg3.appendChild(document.createTextNode("."));
    }

  }
  if(localStorage && localStorage.getItem("visitedProjects") == null) {
    localStorage.setItem("visitedProjects", 1);
    ghostWriter();
  }
  else{
    //ghostWriter();
    msg1.appendChild(document.createTextNode(message1));
    senecode.appendChild(document.createTextNode(senecodeLink));
    msg2.appendChild(document.createTextNode(message2));
    uniandes.appendChild(document.createTextNode(uniandesLink));
    msg3.appendChild(document.createTextNode("."));
  }
}

function contactLoader() {

  const msg1 = document.getElementById("msg1");
  const twitter = document.getElementById("twitter");
  const msg2 = document.getElementById("msg2");
  const message1 = "You can find me at p.salazar12[at]uniandes.edu.co and @pedrito8472 on ";
  const twitterLink = "twitter";

  let i1 = 0;
  let i2 = 0;

  function ghostWriter() {
    if (i1 < message1.length) {
      msg1.appendChild(document.createTextNode(message1.charAt(i1)));
      i1++;
    }
    else if (i2 < twitterLink.length){
      twitter.appendChild(document.createTextNode(twitterLink.charAt(i2)));
      i2++;
    }

    if(i1 < message1.length || i2 < twitterLink.length){
      setTimeout(ghostWriter, 15);
    }
    else {
      msg2.appendChild(document.createTextNode("."));
    }

  }
  if(localStorage && localStorage.getItem("visitedContact") == null) {
    localStorage.setItem("visitedContact", 1);
    ghostWriter();
  }
  else{
    //ghostWriter();
    msg1.appendChild(document.createTextNode(message1));
    twitter.appendChild(document.createTextNode(twitterLink));
    msg2.appendChild(document.createTextNode("."));
  }
}



