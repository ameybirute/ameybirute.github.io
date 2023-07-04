var chances
var n






const generatorfn = () => {
  n = Math.round((Math.random() * 100))
  chances = 0
  document.getElementById("output").innerHTML = "Generating..."
  document.getElementById("output").style.cssText = "color:gray"
  setTimeout(function () {
    document.getElementById("output").innerHTML = "What's your guess ?"
    document.getElementById("output").style.cssText = "color:black:font-weight:600"
  }, 2000);

}

//got from internet not working but
// var input = document.getElementById("guess");
// input.addEventListener("keypress", function(event) {
//   if (event.key === "Enter") {
//     document.getElementsByClassName("button2").click();
//   }
// });


const submit = () => {
  var score = (100 - chances)

  var x = document.getElementById("guess").value
  x = Number.parseInt(x)
  if (x > n) {
    document.getElementById("output").style.cssText = "color:red;font-weight:600"
    document.getElementById("output").innerHTML = "Pls enter a smaller number"
    chances++
    document.getElementById("output").style.animationName = "anim"
    setTimeout(function () {
      document.getElementById("output").style.animationName = "none"
    }, 1000);
  }
  else if (x < n) {
    document.getElementById("output").style.cssText = "color:red;font-weight:600"
    document.getElementById("output").innerHTML = "Pls enter a larger number"
    chances++
    document.getElementById("output").style.animationName = "anim"
    setTimeout(function () {
      document.getElementById("output").style.animationName = "none"
    }, 1000);
  }
  else if(x==n){
    document.getElementById("output").innerHTML = `You found the correct number ${n} and your score is ${score} `
    document.getElementById("output").style.cssText = "color:green;font-weight:600"
    
  }
}





