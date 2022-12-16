/**
 * sainternet.xyz - resources/javascript/random_phrase.js
 * Copyright 2022 saint-lascivious (Hayden Pearce). All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License
 */

// declare phrases
var phrases = [
  "…breaking the Internet, since 2016.",
  "…DNS over HTTPS, HTTP/3, TLS and QUIC.",
  "…filtered DNS at <b>dns.sainternet.xyz</b>.",
  "…have <b>YOU</b> broken <b>YOUR</b> Internet today?",
  "…is <b>mostly</b> specification compliant.",
  "…more ARM than a polydactyl octopus.",
  "…noun: /seɪntənɛt/, <b>saint</b>ernet.",
  "…sucks less than some other things do.",
  "…where ARM cores go to <s>die</s> fry.",
  "…where every day is ARM day.",
  "…world's first National Pokédex over DNS.",
  "…<b>.xyz</b>, a TLD no one's heard of."
];

// pick one
function getphrase() {
  var randomphrase= Math.floor(Math.random()*phrases.length);
  document.getElementById('sainternet-phrases').innerHTML=phrases[randomphrase];
}

// get phrase on load
onload = function() { getphrase(); }

// update phrase every 10 seconds
var inter = setInterval(function() { getphrase(); }, 10000);
