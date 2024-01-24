#!/usr/bin/env node

// Sha-bang line (above) to tell the shell how to execute the file
const pkgJSON = require('./package.json');
const welcome = require('cli-welcome');

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

console.log(`Syed Ahmed Hussain 

Just a life long learner, who loves to code and solve problems. 
Worked on several different applications, ranging from web to mobile.
A day dreamer, who wants to make this world a better place to live in. 
A landscape photographer, who loves to capture the beauty of nature.
Overall, a simple human being, who wants to live a happy, yet meaningful life.

Twitter: https://twitter.com/Ahmedhussain82
Github: https://github.com/Shah-Sahab
Landscapes: https://www.aj-inc.us

`);