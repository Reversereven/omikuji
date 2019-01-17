
  var msg = new Array();
  msg[0] = "大吉";
  msg[1] = "中吉";
  msg[2] = "小吉";
  msg[3] = "吉";
  msg[4] = "末吉";
  msg[5] = "凶";

  document.getElementById("re").onclick = function(){
    var e = document.getElementById("btn");
    var rslt =Math.floor(Math.random()*msg.length);
    e.textContent = (msg[rslt]);
  };
