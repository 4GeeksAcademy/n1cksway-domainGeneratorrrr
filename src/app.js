/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let pronouns = ["the", "our", "he", "she", "it", "some", "any", "every"];
  let adjs = ["great", "big", "only", "small", "hairy"];
  let nouns = [
    "bodybuilder",
    "moole",
    "asphalt",
    "disel",
    "ham",
    "dawg",
    "cashier",
    "player",
    "dork"
  ];
  let Tlds = [
    ".com",
    ".org",
    ".us",
    ".wow",
    ".lol",
    ".pimp",
    ".ty",
    ".geek",
    ".cap"
  ];

  let domainNames = [];

  for (let pronoun of pronouns) {
    for (let adj of adjs) {
      for (let noun of nouns) {
        for (let Tld of Tlds) {
          domainNames.push(`${pronoun}${adj}${noun}${Tld}`);
        }
      }
    }
  }
  document.body.innerHTML = `<ul>${domainNames
    .map(domainNames => `<li>${domainNames}</li>`)
    .join(" ")}</ul>`;
};
