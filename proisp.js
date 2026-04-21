// ==UserScript==
// @name         Proisp - Client List Expander
// @namespace    https://tind.it/
// @version      3.0
// @description  Adds multiple attribute to the client login select
// @author       Øystein Soteland Hegnander
// @match        https://www.proisp.no/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function () {
    'use strict';

    function tryApply() {
        const select = document.getElementById('client_list');
        console.log("client_list found:", select);
        if (select) {
            select.setAttribute('multiple', 'multiple');
            console.log("multiple applied!");
            return true;
        }
        return false;
    }

    if (tryApply()) return;

    const observer = new MutationObserver(function (_, obs) {
        if (tryApply()) obs.disconnect();
    });

    observer.observe(document.body, { childList: true, subtree: true });

})();
