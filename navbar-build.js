#!/usr/bin/env node
// Stamps shared blocks (navbar, footer) into every *.html page in this folder.
// navbar.html -> between <!-- NAVBAR:START --> and <!-- NAVBAR:END -->
// footer.html -> between <!-- FOOTER:START --> and <!-- FOOTER:END -->
// Pages without markers are skipped and never touched.

// Usage: node navbar-build.js

// Requires: Node.js only, no npm packages.

const fs = require("fs");
const path = require("path");

const SITE_DIR = __dirname;

const PARTS = [
  { src: "navbar.html", start: "<!-- NAVBAR:START -->", end: "<!-- NAVBAR:END -->" },
  { src: "footer.html", start: "<!-- FOOTER:START -->", end: "<!-- FOOTER:END -->" },
];

// load block sources
for (const p of PARTS) {
  p.block = `${p.start}\n${fs.readFileSync(path.join(SITE_DIR, p.src), "utf8").trim()}\n${p.end}`;
}

const sources = PARTS.map((p) => p.src);
const pages = fs.readdirSync(SITE_DIR).filter(
  (f) => f.endsWith(".html") && !sources.includes(f)
);

let updated = 0;
for (const file of pages) {
  const full = path.join(SITE_DIR, file);
  const html = fs.readFileSync(full, "utf8");
  let newHtml = html;
  const stamped = [];

  for (const p of PARTS) {
    const start = newHtml.indexOf(p.start);
    const end = newHtml.indexOf(p.end);
    if (start === -1 || end === -1) continue; // no markers, leave alone
    newHtml = newHtml.slice(0, start) + p.block + newHtml.slice(end + p.end.length);
    stamped.push(p.src.replace(".html", ""));
  }

  if (stamped.length === 0) continue;

  if (newHtml !== html) {
    fs.writeFileSync(full, newHtml);
    console.log(`update ${file} (${stamped.join(", ")})`);
    updated++;
  } else {
    console.log(`ok     ${file} (already current)`);
  }
}

console.log(`\nDone. ${updated} file(s) updated.`);
