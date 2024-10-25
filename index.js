#!/usr/bin/env node

// Sha-bang line (above) to tell the shell how to execute the file
const pkgJSON = require("./package.json");
const welcome = require("cli-welcome");

welcome({
  title: pkgJSON.name,
  tagLine: `Howdy, nice to meet ya!`,
  description: pkgJSON.description,
  version: pkgJSON.version,
  bgColor: `#FADC00`,
  color: `#000000`,
  bold: true,
  clear: true,
}); // Welcome message

console.log(` 
 🇦 🇭 🇲 🇪 🇩 
                                   
Just a life long learner, with a love-hate relationship with coding and solving problems :D. 
Worked on several different applications, ranging from web to mobile.

Github: https://github.com/Shah-Sahab
Landscapes: https://www.aj-inc.us

`);
