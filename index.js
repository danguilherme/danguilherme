#!/usr/bin/env node

// https://stackoverflow.com/a/41407246/1574059
var colors = {
  reset: "\x1b[0m",
  cyan: "\x1b[36m"
};

var color = color => text => `${color}${text}${colors.reset}`;
var link = color(colors.cyan);

var website = "https://danguilherme.github.io/en/";

console.log(`\n\tAccess ${link(website)} to know more :)\n`);
