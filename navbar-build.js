#!/usr/bin/env node
// Stamps the contents of navbar.html into every *.html page in this folder
// between <!-- NAVBAR:START --> and <!-- NAVBAR:END --> markers.
// Pages without markers are skipped and never touched.

// Usage: node navbar-build.js

// Requires: Node.js only, no npm packages.

const fs = require("fs");
const path = require("path");

const SITE_DIR = __dirname;
const NAVBAR_FILE = path.join(SITE_DIR, "navbar.html");
const START = "<!-- NAVBAR:START -->";
const END = "<!-- NAVBAR:END -->";

const navbar = fs.readFileSync(NAVBAR_FILE, "utf8").trim();
const block = `${START}\n${navbar}\n${END}`;

const pages = fs.readdirSync(SITE_DIR).filter(
  (f) => f.endsWith(".html") && f !== "navbar.html"
);

let updated = 0;
for (const file of pages) {
  const full = path.join(SITE_DIR, file);
  const html = fs.readFileSync(full, "utf8");

  const start = html.indexOf(START);
  const end = html.indexOf(END);

  if (start === -1 || end === -1) continue; // no markers, leave alone

  const newHtml = html.slice(0, start) + block + html.slice(end + END.length);
  if (newHtml !== html) {
    fs.writeFileSync(full, newHtml);
    console.log(`update ${file}`);
    updated++;
  } else {
    console.log(`ok     ${file} (already current)`);
  }
}

console.log(`\nDone. ${updated} file(s) updated.`);
