 /*Parte 1*/
console.log("**********PARTE1**********")
let xValor=10;

while(xValor >=0){
    console.log(xValor);
    xValor-=0.5;
}

/*Parte 2*/
console.log("**********PARTE2**********")
let number= 0;

for(number=1;number<=100;number++){
    if(number%2!=0){
    console.log(number);
}
}

/*Parte 3*/
console.log("**********PARTE3**********")
function Corchetes(n){
    let num = 1;
    while (num <=n ){
        console.log("[ " +num+ "]");
        num++;
    }
}

Corchetes(6);

/*Parte 4*/
console.log("**********PARTE4**********")
function sumaDeNum(n){
    let numb =1;
    let sum = 0;
    while(numb <=n){
        sum += numb;
        console.log(numb);
        numb++;  
    }
    return sum;
}

console.log(sumaDeNum(3));








