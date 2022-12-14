/**
 * sainternet.xyz - resources/javascript/sainternet.js
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

// mdl-layout__drawer expects links to be external, so it doesn't  bother
// closing itself after click, leaving the drawer hanging open if a navigation
// is directed to an id on the same page
function close_drawer() {
  var d = document.querySelector('.mdl-layout');
  d.MaterialLayout.toggleDrawer();
}

// listen for clicks there and make sure it happens so that page content is
// never hidden by the drawer overlay after navigation
document.querySelector('.mdl-layout__drawer').addEventListener('click', close_drawer);
