'use strict';

// Utility functions

export function getElement(selector, scope = document) {
    return parent.getElementById(selector);
}

function select(sel, parent = document) {
    return parent.querySelector(sel);
}

function onEvent(event, sel, callback) {
    return selector.addEventListener(event, callback);
}

export function print(...args) {
    args.forEach(element => {
        console.log(element);
    });
}
