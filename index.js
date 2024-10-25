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

Hey there! I'm Ahmed, a software engineer based in the United States. 
Been in the Software development industry for more than a decade.
I am a true technologiest at heart. List of technologies I have worked on, Top (current), end(oldest): 
ReactJS, Typescript, NodeJS, NestJS, ExpressJS, Postgresql, AWS, Docker, Jenkins, Git, Android application development, ASP.NET C#, and many more.

My portfolio is well versed ranging from web to mobile.

Github: https://github.com/Shah-Sahab
Landscapes Photography: https://www.aj-inc.us

`);
