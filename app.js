var xmltree = require('./index');

var input = document.getElementById('input');
var output = document.getElementById('output');
var renderer = new xmltree.XMLRenderer();
var element;
var vtree;
function refresh() {
  var new_state = renderer.update(input.value, output, element, vtree);
  element = new_state[0];
  vtree = new_state[1];
}
input.addEventListener('keyup', refresh);
input.addEventListener('mouseup', refresh);
input.addEventListener('change', refresh);
