let num1 =5 ;
let num2 =3 ;

//********************************** */
//llamar funcion
sumar();

//Declaracio de funcion
function sumar(){
    console.log( 2 + 2 );
    resultado.innerHTML = 2 + 2;
}
//********************************** */

//********************************** */
//Expresion de Funcion
const restar = function(){
    console.log( num1 - num2 )
}

resultado.innerHTML = restar();
//********************************** 
/*Funcion con paraemtro */
//saludar();
saludar("alejandro","cruz");
//saludar("alejandro");

function saludar(nombre,apellido){
    resultado.innerHTML = resultado.innerHTML + "hola " + nombre +" " + apellido + "<br>";
}

//********************************** */
let nombre2 =prompt('nombre')
let comida = prompt('comida')
comer (nombre2,comida)
                     //si viene undefined pone el valor pizza
function comer(nombre,comida='pizza'){
    resultado.innerHTML = resultado.innerHTML + " " + nombre +" come " + comida + "<br>";    
    console.log (`${nombre}`);
}
//********************************** */




//********************************** */
let n1 = Number(prompt('ingresar numero 1 '));
let n2 = Number(prompt('ingresar numero 2 '));
sumar (n1,n2)
                     //si viene undefined pone el valor pizza
function sumar(n1,n2){
    let res = n1 + n2
    resultado.innerHTML = resultado.innerHTML + " " + (res) + "<br>";    
    console.log (`${res}` );
}
//********************************** */



//**********CAJERO******************* */
let saldo = 5000;
entrarAlCajero();
function entrarAlCajero(){
    let tarjeta = confirm("ingrese tarjeta");
    ingresarclave(tarjeta)
}

function ingresarclave(t){
    if (t){
        let clave =prompt('ingresar clave');
        validarClave(clave);    
    }else{
        alert('es necesaria una tarjeta');
    }
}

function validarClave(codigo){
    if (codigo == "1234") {
        seleccionarOperacion();
    }else{
        alert('clave Incorrecta');
    }
}

function seleccionarOperacion(){
    console.log("1:Retirar Dinero");
    console.log("2:Consultar Saldo");
    console.log("3:Salir");

    let op =prompt("Ingresar opcion");
    switch(op){
        case "1":
            let monto = Number(prompt("monto a retirar") );
            retirarDinero(monto);
            break;
        case "2":
            consultarSaldo();
            break;
        case "3":
            salir();
            break;
        default:
            console.log("Operacion invalida");
            seleccionarOperacion();
            break;
    }
}

function retirarDinero(dinero){
    if(dinero>saldo){
        alert("saldo insuficiente:"+dinero);
    }else{
        saldo -=dinero;
        alert('retiraste ' + dinero +' ,saldo ' + saldo )
    }
    seleccionarOperacion();
}
function consultarSaldo(){
    alert ('su saldo es' + saldo);
    seleccionarOperacion();
}
function salir(){
    alert('Fin de la Operacion')
}




//********************************** */




//********************************** */


function sumar2(a,b){
    return a + b;
    //si no tiene return devuelve undefined
}

let resultadox 
resultadox = sumar2(4+2);
console.log (resultadox);
//********************************** */




//***********RETUrN*********************** */
let total=0;
function agregarAlcarrito(precio){
    return total += precio;
}

function calcularimpuesto(total){
    return 1.21 * total;
}
total = agregarAlcarrito(400)
total = agregarAlcarrito(300)
total = agregarAlcarrito(300)

const totalPagar = calcularimpuesto(total);
console.log("total a pagar : " + total)
console.log("mas impuesto : "  + totalPagar);



//********************************** */


//*************SCOPE********************* */
//variables locales y globales
//********************************** */


//**********Funciones Flecha*****ARROW******************* */

//funcion de expresion
const aprender = function(){
    console.log("en el curso de javascript-expresion")
}

//arrow              esta es la flecha
const aprender2 = () =>{
    console.log("en el curso de javascript -arrow")
}
//arrow en una linea
const aprender3 = () => console.log("en el curso de javascript -arrow una linea")

//tiene autoreturn
const aprender4 = () => { return "aprender 4"; }

const aprender5 = () => "aprender 5";

aprender();
aprender2();
aprender3();
console.log(aprender4());
console.log(aprender5());


//********************************** */

//*********Funciones Anonimas************************* */
//********************************** */

