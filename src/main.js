import {renderSearch} from './components/search.js';
import {renderPrifile} from './components/profile.js';

const headContainer = document.querySelector('.header');
headContainer.insertAdjacentHTML('beforeend', renderSearch());
headContainer.insertAdjacentHTML('beforeend', renderPrifile());