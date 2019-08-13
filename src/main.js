import {renderSearch} from './components/search.js';
import {renderProfile} from './components/profile.js';
import {renderMenu} from './components/menu.js';
import {renderSort} from './components/sort.js';
import {renderContent} from './components/content.js';

const headContainer = document.querySelector('.header');
headContainer.insertAdjacentHTML('beforeend', renderSearch());
headContainer.insertAdjacentHTML('beforeend', renderProfile());

const mainContainer = document.querySelector('.main');
mainContainer.insertAdjacentHTML('beforeend', renderMenu());
mainContainer.insertAdjacentHTML('beforeend', renderSort());
mainContainer.insertAdjacentHTML('beforeend', renderContent());
