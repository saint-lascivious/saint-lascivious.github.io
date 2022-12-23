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
// no limit, more would be preferable
// lower digit randomness appears...not great
var phrases = [
  "…",
  "…advertisers <b>HATE</b> this <b>ONE SIMPLE TRICK</b>!",
  "…Android, Chrome, Firefox, iOS, macOS &amp; more.",
  "…bless this <s>mess</s> DNS.",
  "…breaking the Internet, since 2016.",
  "…DNS over HTTPS, HTTP/3, TLS and QUIC.",
  "…filtered DNS at <b>dns.sainternet.xyz</b>.",
  "…have <b>YOU</b> broken <b>YOUR</b> Internet today?",
  "…<b>mostly</b> specification compliant.",
  "…more ARM than a polydactyl octopus.",
  "…/seɪntənɛt/ (<b>saint</b>-er-net) noun: filtered DNS.",
  "…sucks less than some other things do.",
  "…the FBI agent watching you <a href="https://www.ic3.gov/Media/Y2022/PSA221221">agrees</a>, use <b>dns.sainternet.xyz</b>.",
  "…where ARM cores go to <s>die</s> fry.",
  "…where every day is ARM day.",
  "…world's first National Pokédex over DNS!",
  "…<b>.xyz</b>, the TLD no one's heard of.",
  "…9/10 trackers <b>don't</b> recommend <b>dns.sainternet.xyz</b>."
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
