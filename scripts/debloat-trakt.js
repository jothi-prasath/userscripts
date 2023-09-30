// ==UserScript==
// @name         Debloat Trakt
// @namespace    https://greasyfork.org/en/users/1169041-jothi-prasath
// @version      1.0
// @description  Removes Ads and banners
// @author       Jothi Prasath
// @homepage     https://github.com/jothi-prasath/userscripts
// @supportURL   https://github.com/jothi-prasath/userscripts/issues/new
// @match        https://trakt.tv/*
// @grant        none
// @license      MIT
// ==/UserScript==


(function() {
    'use strict';
    // List of div IDs to remove
    const divIdsToRemove = ['af1a979-be54078-wrapper'];

    while (document.getElementById(divId)) {
      divIdsToRemove.forEach((divId) => {
          const divToRemove = document.getElementById(divId);
          if (divToRemove) {
              divToRemove.parentNode.removeChild(divToRemove);
          }
      });
    }
})();