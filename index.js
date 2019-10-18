var data = [
    {
      p1 : document.getElementById("pictures").src = "https://outpost13.net/imgs/p1.jpg"
    },
    {
      p2 : document.getElementById("pictures").src = "https://outpost13.net/imgs/p2.jpg"
    },
    {
      p3 : document.getElementById("pictures").src = "https://outpost13.net/imgs/p3.jpg"
    }
];

function reloader() {
  var num = 0;
  num = Math.floor(Math.random() * 3) + 1;
  
  if (num === 1) {
    console.log(num);
    return DATA.p1;
  }
  else if (num === 2) {
    console.log(num);
    return DATA.p2;
  }
  else if (num === 3) {
    console.log(num);
    return DATA.p3;
  }
}
