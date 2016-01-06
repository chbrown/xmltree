import React from 'react';
import ReactDOM from 'react-dom';
import {XMLTree} from '../../react';

var input = document.getElementById('input');
var render = document.getElementById('render');
var output = document.getElementById('output');

render.addEventListener('click', () => {
  console.time('ReactDOM.render');
  ReactDOM.render(<XMLTree xml={input.value} />, output);
  console.timeEnd('ReactDOM.render');
});
