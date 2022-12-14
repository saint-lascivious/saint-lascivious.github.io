/**
 * sainternet.xyz - resources/javascript/load-fonts.js
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

function loadFonts() {
  if (sessionStorage.fontsLoaded) {
    document.documentElement.classList.add('fonts-loaded');
    return;
  }
  if ('fonts' in document) {
    Promise.all([
    document.fonts.load('1em Roboto'),
    document.fonts.load('500 1em Roboto'),
    document.fonts.load('700 1em Roboto'),
    document.fonts.load('900 1em Roboto'),
    document.fonts.load('italic 1em Roboto'),
    document.fonts.load('italic 500 1em Roboto'),
    document.fonts.load('italic 700 1em Roboto'),
    document.fonts.load('italic 900 1em Roboto')
    ]).then(_ => {
      document.documentElement.classList.add('fonts-loaded');
      sessionStorage.fontsLoaded = true;
    });
  }
}

loadFonts();
