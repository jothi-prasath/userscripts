// ==UserScript==
// @name         Debloat Letterboxd
// @namespace    https://github.com/jothi-prasath/Userscripts
// @version      0.1
// @description  Removes Ad and banners
// @author       Jothi Prasath
// @match        https://letterboxd.com/*
// @grant        none
// ==/UserScript==

(function() {
    // Rmoves Banner under profile
    var elements = document.getElementsByClassName("banner banner-250 js-hide-in-app");
    while (elements.length > 0) {
    elements[0].parentNode.removeChild(elements[0]);
  }
})();
