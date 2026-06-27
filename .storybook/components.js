import { createElement } from 'lwc';
import Button from 'c/button';

const registry = {
  'c-button': Button,
};

window.__lwcCreateElement = function (tagName) {
  const Ctor = registry[tagName];
  if (Ctor) {
    return createElement(tagName, { is: Ctor });
  }
  return document.createElement(tagName);
};
