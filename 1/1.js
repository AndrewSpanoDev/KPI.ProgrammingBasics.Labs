// Підняття
"use strict";

function hoistVar() {
  console.log(x);
  var x = 181;
  console.log(x);
}
hoistVar();