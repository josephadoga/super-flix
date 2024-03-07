'use strict';

// Utility functions

export function getElement(selector, scope = document) {
    return scope.getElementById(selector);
}

function select(selector, parent = document) {
    return parent.querySelector(selector);
}

function onEvent(event, selector, callback) {
    return selector.addEventListener(event, callback);
}