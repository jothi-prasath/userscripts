// ==UserScript==
// @name         Debloat Letterboxd
// @namespace    https://greasyfork.org/en/users/1169041-jothi-prasath
// @version      1.0
// @description  Removes Ad and banners
// @author       Jothi Prasath
// @homepage     https://github.com/jothi-prasath/userscripts
// @supportURL   https://github.com/jothi-prasath/userscripts/issues/new
// @match        https://letterboxd.com/*
// @grant        none
// @license      MIT
// ==/UserScript==


// Rmoves Banner in home
var elements = document.getElementsByClassName("banner banner-950 js-hide-in-app");
while (elements.length > 0) {
  elements[0].parentNode.removeChild(elements[0]);
}

// Rmoves Banner under profile
var elements = document.getElementsByClassName("banner banner-250 js-hide-in-app");
while (elements.length > 0) {
  elements[0].parentNode.removeChild(elements[0]);
}

