'use strict';

// Utility functions

export function getElementById(sel, scope = document) {
    return scope.getElementById(sel);
}

function select(sel, parent = document) {
    return parent.querySelector(sel);
}

function onEvent(event, sel, callback) {
    return selector.addEventListener(event, callback);
}

export function print(...args) {
    args.forEach(element => {(
        console.log(element);
    });
}
