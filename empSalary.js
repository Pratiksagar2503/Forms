function day() {
  var v = document.getElementById("t_day").value;
  console.log(v);
}

function per() {
  var prday = document.getElementById("Pr_d").value;
  console.log(prday);
}

function presnt() {
  var v = document.getElementById("t_day").value;
  var present = document.getElementById("P_day").value;
  var sub = v - present;
  document.getElementById("A_day").value = sub;
  console.log(present);
}

function show() {
  var radio = document.getElementsByClassName("rd");
  for (const i of radio) {
    if (i.type == "radio") {
      i.checked == true;
      document.getElementById("bx1").style.display = "block";
      document.getElementById("ttl").style.display = "none";
    }
  }
}

function hide() {
  var radio = document.getElementsByClassName("rd");
  for (var i of radio) {
    if (i.type == "radio") {
      i.checked = true;
      document.getElementById("bx1").style.display = "none";
      document.getElementById("ttl").style.display = "block";
      
      var p = document.getElementById("Pr_d").value;
      var pr = document.getElementById("P_day").value;
      var ttl = p * pr;
      document.getElementById("ttl_slr1").value = ttl;
    }
  }
}

// function slry() {

//   console.log(ttl);
// }

function clr() {
  var v = document.getElementById("t_day").value;
  var cl = document.getElementById("cl_day").value;
  var present = document.getElementById("P_day").value;
  cl = parseInt(cl);
  present = parseInt(present);
  var apr = cl + present;
  document.getElementById("Pr_days").value = apr;
  var aar = v - apr;
  document.getElementById("Ab_days").value = aar;
  // console.log(aar)
  var payd = document.getElementById("Pr_d").value;
  var ttl = apr * payd;
  console.log(ttl);
  document.getElementById("ttl_slr").value = ttl;
}

// function aad() {
//     var apr = document.getElementById('Pr_days').value;
//     var v = document.getElementById("t_day").value;
// apr = parseInt(apr);
// v= parseInt(v)
// var  aar = v-apr;
// document.getElementById('Ab_days').value=aar
// }

// function ttls(){
//     var prsnt = document.getElementById("Pr_days").value;
//     var pday = document.getElementById("Pr_d").value;
//     prsnt= parseInt(prsnt)
//     pday=  parseInt(pday)
//     total = prsnt*pday
// }
