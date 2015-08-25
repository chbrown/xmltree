/*jslint browser: true, esnext: true */
var xmltree = require('../../virtual-dom');

var input = document.getElementById('input');
var render = document.getElementById('render');
var output = document.getElementById('output');

var renderer = new xmltree.XMLRenderer();
var element;
var vtree;
render.addEventListener('click', function() {
  console.time('renderer.update');
  var new_state = renderer.update(input.value, output, element, vtree);
  element = new_state[0];
  vtree = new_state[1];
  console.timeEnd('renderer.update');
});
