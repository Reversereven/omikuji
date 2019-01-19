
'use strict';

document.getElementById("re").onclick = function(){

  var e = document.getElementById("btn");
  var rand =Math.floor(Math.random()*100);

  var msg = "大吉";
  if (rand > 4) msg = "中吉";
  if (rand > 19) msg = "小吉";
  if (rand > 44) msg = "吉";
  if (rand > 74) msg = "末吉";
  if (rand > 89) msg = "凶";

  e.textContent = (msg);
}





// var msg = new Array();
// msg[0] = "大吉";
// msg[1] = "中吉";
// msg[2] = "小吉";
// msg[3] = "吉";
// msg[4] = "末吉";
// msg[5] = "凶";
//
// document.getElementById("re").onclick = function(){
  //   var e = document.getElementById("btn");
  //   var rslt =Math.floor(Math.random()*msg.length);
  //   e.textContent = (msg[rslt]);
  // };
