console.log("Programa que cálcule el promedio del curso de JavaScript");
console.log("Nota de 0 a 100");
console.log("Prácticas con valor de 30%");
console.log("Entregables con valor de 30%");
console.log("Exámen final con valor de 40%");
let p1=parseFloat(prompt("Ingresar nota de práctica 1: "));
console.log("Nota de la práctica 1 es: "+p1);
let p2=parseFloat(prompt("Ingresar nota de práctica 2: "));
console.log("Nota de la práctica 2 es: "+p2);
let p3=parseFloat(prompt("Ingresar nota de práctica 3: "));
console.log("Nota de la práctica 3 es: "+p3);
let p4=parseFloat(prompt("Ingresar nota de práctica 4: "));
console.log("Nota de la práctica 4 es: "+p4);
let sumap=p1+p2+p3+p4, prompract=sumap/4;
console.log("La suma de las prácticas es "+sumap+" y su promedio es "+prompract);
if (prompract>=60){
    console.log("Aprobaste las prácticas")
} else {
    console.log("Desaprobaste las prácticas")
}
let e1=parseFloat(prompt("Ingresar nota de entregable 1: "));
console.log("Nota del entregable 1 es: "+e1);
let e2=parseFloat(prompt("Ingresar nota de entregable 2: "));
console.log("Nota del entregable 2 es: "+e2);
let e3=parseFloat(prompt("Ingresar nota de entregable 3: "));
console.log("Nota del entregable 3 es: "+e3);
let e4=parseFloat(prompt("Ingresar nota de entregable 4: "));
console.log("Nota del entregable 4 es: "+e4);
let sumae=e1+e2+e3+e4, promentreg=sumae/4;
console.log("La suma de los entregables es "+sumae+" y su promedio es "+promentreg);
if (promentreg>=60){
    console.log("Aprobaste los entregables")
} else {
    console.log("Desaprobaste los entregables")
}
let examenf=parseFloat(prompt("Ingresar nota del exámen final: "));
console.log("Nota del exámen final es: "+examenf);
if (examenf>=60){
    console.log("Aprobaste el exámen final")
} else {
    console.log("Desaprobaste el exámen final")
}
let promfpract=prompract*0.3, promfentreg=promentreg*0.3, promfexamen=examenf*0.4;
let promediofinal=promfpract+promfentreg+promfexamen;
if (promediofinal>=60){
    console.log("Aprobaste el curso con un promedio de "+promediofinal+", obtienes tu certificado")
} else {
    console.log("Desaprobaste el curso con un promedio de "+promediofinal+", no obtienes tu certificado")
}
