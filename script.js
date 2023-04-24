"use strict";

const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.container');

left.addEventListener('mouseenter', () => container.classList.add('hover-left')
    /*Mouseenter event = hover*/
);

left.addEventListener('mouseleave', () => container.classList.remove('hover-left')
    /*Mouseleave event = end of hover*/
);

right.addEventListener('mouseenter', () => container.classList.add('hover-right')
    /*Mouseenter event = hover*/
);

right.addEventListener('mouseleave', () => container.classList.remove('hover-right')
    /*Mouseleave event = end of hover*/
);