function operate(operator,a,b){

    if(operator=='+'){
      return a+b;
    }
    
    if(operator=='-'){
      return a-b;
    }
    if(operator=='*'){
    return a*b;
    }
    if(operator=='/'){
      return a/b;
    }

   
    
}
window.onload = () => {
numbers = document.querySelector(".numbers");
operators = document.querySelector(".operators");
const a=[];

for(let i=0;i<5;i++){
    a[i]=[];
    a[i] = document.createElement("div");
    a[i].classList.add("line");
    numbers.appendChild(a[i]);
   
    a[i].style.display='flex';
    a[i].style.height='100px';
    a[i].style.padding= "5px";
    a[i].style.alignItems='justify';
    a[i].style.justifyContent='space-between';
    for(let j=0;j<4;j++){
        
        a[i][j] = document.createElement("button");
        a[i][j].classList.add('number');
        a[i].appendChild(a[i][j]);
        a[i][j].style.width='100px';
      
        a[i][j].style.color='black';
        a[i][j].style.backgroundColor = "orange";
        a[i][j].style.opacity = 0.4;
        a[i][j].style.fontSize='20px';
        a[i][j].style.border = "3px outset rgb(50, 0, 0)";
        a[i][j].style.boxShadow = "20px 20px 50px rgb(50, 0, 0)"; 
    }


}
a[0][0].textContent = "RESET";
a[0][1].textContent = 'CLEAR';
a[0][2].textContent = 'a!';
a[0][3].textContent = '+';
a[1][0].textContent='1';
a[1][1].textContent='2';
a[1][2].textContent='3';
a[1][3].textContent='-';
a[2][0].textContent='4';
a[2][1].textContent='5';
a[2][2].textContent='6';
a[2][3].textContent='*';
a[3][0].textContent='7';
a[3][1].textContent='8';
a[3][2].textContent='9';
a[3][3].textContent='/';
a[4][0].textContent = "sqrt";
a[4][1].textContent = "pow";
a[4][2].textContent = "1/a";
a[4][3].textContent = "log";



}
