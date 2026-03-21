import './styles.css';
import { greeting } from './greeting.js';
import template from './template.html';
import odinImage from './odin.png';

const image = document.createElement('img');
image.src = odinImage;
document.body.appendChild(image);

document.body.innerHTML = template;


console.log(greeting);