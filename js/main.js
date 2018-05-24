/* eslint-env browser */

function scrollTo(ident) { // eslint-disable-line no-unused-vars
    "use strict";
    var elmnt = document.getElementById(ident);
    elmnt.scrollIntoView({
        behavior: 'smooth'
    });
}
