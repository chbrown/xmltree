/*jslint browser: true, esnext: true */
import React from 'react';
import {XMLTree} from '../../react';

var input = document.getElementById('input');
var render = document.getElementById('render');
var output = document.getElementById('output');

render.addEventListener('click', () => {
  console.time('React.render');
  React.render(<XMLTree xml={input.value} />, output);
  console.timeEnd('React.render');
});
