/**
 * sainternet.xyz - resources/javascript/scroll_listener.js
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

// Set button ID
let home_button = document.getElementById("button_home");

// Scroll listener toggling button display style
// Displays home button on (presumably) conscious scrolling
window.onscroll = function() {scroll_listener()};

function scroll_listener() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    home_button.style.display = "block";
  } else {
    home_button.style.display = "none";
  }
}
