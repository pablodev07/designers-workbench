import { createElement } from 'lwc';
import Button from 'c/button';
import DataTable from 'c/dataTable';

const registry = {
  'c-button': Button,
  'c-data-table': DataTable,
};

window.__lwcCreateElement = function (tagName) {
  const Ctor = registry[tagName];
  if (Ctor) {
    return createElement(tagName, { is: Ctor });
  }
  return document.createElement(tagName);
};
