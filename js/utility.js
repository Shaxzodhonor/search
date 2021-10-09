var $_ = function (selector, node = document) {
    return node.querySelector(selector);
} 
var $$_ = function (selector, node = document) {
    return node.querySelectorAll(selector);
}

var createElement = function (element, elClass, content, node = null) {
    var element = document.createElement(element);
    element.setAttribute('class', elClass);
    if (content) {
        element.textContent = content;
    }
    if (node !== null ) {
        node.appendChild(element);
    }
    return element;
}