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

// the mdl-layout drawer component expects links to be external, so
// it doesn't bother closing after click
function close_drawer() {
  var d = document.querySelector('.mdl-layout');
  d.MaterialLayout.toggleDrawer();
}

document.querySelector('.mdl-layout__drawer').addEventListener('click', close_drawer);
