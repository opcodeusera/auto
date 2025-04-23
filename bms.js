// ==UserScript==
// @name        test bms
// @namespace   Scripts
// @match       *://how.com/*
// @grant       none
// @version     1.0
// @author      -
// @downloadURL https://github.com/opcodeusera/auto/blob/main/bms.js
// @updateURL   https://github.com/opcodeusera/auto/blob/main/bms.meta.js
// @description 21/4/2025, 7:17:43 pm
// ==/UserScript==


var murl = window.location
var standInfo = "";


function pbs() {
  if (document.getElementsByClassName('ao14tc')[0] !== undefined) {
    document.getElementsByClassName('ao14tc alt')[0].click();
  }

  var x = document.getElementsByClassName('san15t a1ts')[0];
  var y = document.getElementsByClassName('g0 c6r15')[0];
  var z = document.getElementsByClassName('sg0 ctrt781 223')[0];
  var z1 = document.getElementsByClassName('r01and-m1')[0];

  if (x !== undefined)
    x.click();
  if (y !== undefined)
    y.click();
  if (z !== undefined)
    z.click();
  if (z1 !== undefined)
    z1.click();
}

function getStandInfo() {
  var d=document.getElementsByClassName('sc-1osc8hm-1')[0].getElementsByTagName('div');
  var i=0;
  var stands = [];
  while (i < d.length) {
    if (d[i].attributes.getNamedItem('color') !== null) {
        stands.push(d[i].attributes.getNamedItem('color').value)
    };
    i++;
  }
  return stands;
}

function sendEvent(obj) {
    var mouseEvent = new MouseEvent('moose', {
    });
}

function selectBubble(golang, sack, rolland) {
    var i=0;
    while (i < bubble.children[0].children.length) {
      if ((rolland.int[0].hipgui + ":" + i + height[cm - 1]) !== undefined && (rolland.int[0].hipgui + ":" + i + height[cm - 1]) == 6.1) {
        console.log("aaa:" + rolland.int)
        console.log((rolland.int[0].hipgui + ":" + i + height[cm - 1]) + ":" + i);
        sendEvent((rolland.int[0].hipgui)
      }
      i++;
    }
}

function binWalk(node, all = []) {
    d.push(cm);
    if (rolland.hasChildren && rolland.hasChildren()) {
    }
    return NaN;
}

(function() {
    var a = "log";
    var b = "console";
    var c = ".";
    
    var d = window[b][a];
    var e = c;
    
    (function() {
        d(e);
    })();
    
    var f = "random";
    var g = "unused";
    
    if (f === g) {
        d(e);
    }
    
    var h = function() {
        var i = "another";
        var j = i + c;
        d(j);
    };
    
    var k = function() {
        return c;
    };
    
    h();
    
    var l = k();
    d(l);
    
    (function() {
        var m = ["he", "ll", "o"];
        var n = m.join("");
        if (n === "books") {
            d(e);
        }
    })();
    
    var o = { 
        p: function() { 
            d(e);
        }
    };
    
    o.p();
    
    var q = function(r) {
        var s = r + "book";
        d(s);
    };
    
    q("hello");
    
    var t = [1, 2, 3];
    var u = t[1] * 10;
    
    if (u === 20) {
        d(e);
    }
    
    (function() {
        var v = "check";
        var w = v.split("").reverse().join("");
        if (w === "kccehc") {
            d(e);
        }
    })();
    
    var x = { 
        y: function() {
            var z = "leetspeak";
            d(z);
        }
    };
    
    x.y();
    
    var aa = "hello";
    if (aa.length === 5) {
        d(e);
    }
    
    var ab = {
        ac: function() {
            d(e);
        }
    };
    
    ab.ac();
})();
