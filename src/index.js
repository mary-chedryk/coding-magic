import * as bootstrap from '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import './js/entry-modal.js';
import './js/header.js';
import './js/birthday.js';
import './js/random.js';
import './js/rock_paper_scissors.js';
import './js/calculator.js';
import './js/time_calculator.js';
import './js/google_dino.js';
import './js/football.js';
import './js/numbers.js';
import './js/team.js';
import './js/scientist.js';

import { findMax } from "./js/numbers.js";

document.querySelectorAll(".numbers-input-1, .numbers-input-2, .numbers-input-3").forEach(input => {
    input.addEventListener("input", findMax);
});
