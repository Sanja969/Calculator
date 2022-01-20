function factorial(n) {
  let answer = 1;
  if (n == 0 || n == 1) {
    return answer;
  } else {
    for (var i = n; i >= 1; i--) {
      answer = answer * i;
    }
    return answer;
  }
}
const a = [];
numbers = document.querySelector(".numbers");
for (let i = 0; i < 6; i++) {
  a[i] = [];
  a[i] = document.createElement("div");
  a[i].classList.add("line");
  numbers.appendChild(a[i]);

  a[i].style.display = "flex";
  a[i].style.height = "100px";
  a[i].style.padding = "5px";
  a[i].style.alignItems = "justify";
  a[i].style.justifyContent = "space-between";
  for (let j = 0; j < 4; j++) {
    a[i][j] = document.createElement("button");
    a[i][j].classList.add("number");
    a[i].appendChild(a[i][j]);
    a[i][j].style.width = "100px";

    a[i][j].style.color = "black";
    a[i][j].style.backgroundColor = "orange";
    a[i][j].style.opacity = 0.4;
    a[i][j].style.fontSize = "20px";
    a[i][j].style.border = "3px outset rgb(50, 0, 0)";
    a[i][j].style.boxShadow = "20px 20px 50px rgb(50, 0, 0)";
  }
}
a[0][0].textContent = "RESET";
a[0][1].textContent = "CLEAR";
a[0][2].textContent = "sqrt";
a[0][3].textContent = "+";
a[1][0].textContent = 1;
a[1][1].textContent = 2;
a[1][2].textContent = 3;
a[1][3].textContent = "-";
a[2][0].textContent = 4;
a[2][1].textContent = 5;
a[2][2].textContent = 6;
a[2][3].textContent = "*";
a[3][0].textContent = 7;
a[3][1].textContent = 8;
a[3][2].textContent = 9;
a[3][3].textContent = "/";
a[4][0].textContent = "a!";
a[4][1].textContent = 0;
a[4][2].textContent = "=";
a[4][3].textContent = "pow";
a[5][0].textContent = "(";
a[5][1].textContent = ")";
a[5][2].textContent = "1/x";
a[5][3].textContent = "log";

a[0][0].value = "RESET";
a[0][1].value = "CLEAR";
a[0][2].value = "Math.sqrt(";
a[0][3].value = "+";
a[1][0].value = 1;
a[1][1].value = 2;
a[1][2].value = 3;
a[1][3].value = "-";
a[2][0].value = 4;
a[2][1].value = 5;
a[2][2].value = 6;
a[2][3].value = "*";
a[3][0].value = 7;
a[3][1].value = 8;
a[3][2].value = 9;
a[3][3].value = "/";
a[4][0].value = "factorial(";
a[4][1].value = 0;
a[4][2].value = "=";
a[4][3].value = "Math.pow(";
a[5][0].value = "(";
a[5][1].value = ")";
a[5][2].value = "1/";
a[5][3].value = "Math.log(";

let display = document.querySelector(".display");

for (let i = 0; i < 6; i++) {
  for (let j = 0; j < 4; j++) {
    a[i][j].addEventListener("mouseover", function () {
      a[i][j].style.backgroundColor = "green";
    });

    a[i][j].addEventListener("mouseout", function () {
      a[i][j].style.backgroundColor = "orange";
    });

    a[i][j].addEventListener("click", function () {
      // if (!Number(a[i][j].textContent) == true && display.value == "") {
      //   return;
      // }
      
      switch (a[i][j].textContent) {
        case "RESET":
          display.value = "";
          break;
        case "CLEAR":
          display.value = display.value.slice(0, -1);
          break;
        case "=":
          let x = eval(display.value);
          if(!Number(x)==true){
            Alert('You entered the incorrect equation');
            
          }
          display.value = x;
          break;
       
        default:
          if(display.value.length==50){
            return;
          }
          display.value += a[i][j].value;

          break;
      }
    });
  }
}











// var result = [];
// let copy;
// let operators;
// let numbers1;

// case "sqrt":
        //   copy = display.value;
        //   copy = copy.replace(/[^\+\-\*\/]/g, "#");
        //   numbers1 = display.value.split(/[\+\-\*\/]+/);
        //   numbers1[numbers1.length - 1] =
        //     "Math.sqrt(" + numbers1[numbers1.length - 1] + ")";
        //   operators = copy.split("#").filter(function (n) {
        //     return n;
        //   });
        //   result = [];
        //   for (let i = 0; i < numbers1.length; i++) {
        //     result.push(numbers1[i]);
        //     if (i < operators.length) result.push(operators[i]);
        //   }
        //   display.value = result.join("");
        //   break;

 String.prototype.trimEllip = function (length) {
   return this.length > length ? this.substring(0, length) + "..." : this;
 };