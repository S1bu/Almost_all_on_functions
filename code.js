//----------------------------------------------------------------------
//---------------------------------------FUNCTION DECLARATION-----------
//----------------------------------------------------------------------
console.log('----------------FUNCTION DECLARATION---------------------');
//addition
function _addition(x,y) {
    let sum = x + y
    console.log('Addition 2 + 8 ='+ ' ' + sum)
}
_addition(2,8)
// subtraction

function _subtraction(x,y){
    let sum = x - y
    console.log('Subtraction 70 - 30 =' + ' ' + sum)
}
_subtraction(70,30)
// multiplication

function _multiplication(x,y){
    let sum = x * y
    console.log('multiplication 5 x 5 =' + ' ' + sum);
}
_multiplication(5,5)
// Division

function _dividion(x,y){
    let sum = x / y
    console.log('Divsion 10 / 2= '+' '+ sum);
}
_dividion(10,2)
//----------------------------------------------------------------------
//---------------------------------------FUNCTION EXPRESSSION-----------
//----------------------------------------------------------------------
console.log('--------------FUNCTION EXPRESSSION----------------');
//-------------------------------------------------------
//-------------------------------------------------------
// Defining  a function as a value assigned to a varibale
//it can also be defined and used without beng given a name
//-------------------------------------------------------
//-------------------------------------------------------

// addition
let __addition = function(a,b){
    return a + b
}
console.log(__addition( 4,8));

//subtraction
let __subtraction = function(r,p){
    return r - p
}
console.log(__subtraction(10,5));

//multiplication
let __multiplication = function(o,l){
    return o*l
}
console.log(__multiplication(5,2));

//division
let __division = function(k,f){
    return k / f
}
console.log(__division(60,2));
//----------------------------------------------------------------------
//---------------------------------------ARROW FUNCTION----------
//----------------------------------------------------------------------
//has an arrow
//anonymous
console.log('--------------ARROW FUNCTION---------------');
// addition
let addition = (a,b)=>{
    return a + b
}
console.log()
console.log( 'addition 10 + 2 =' + addition(10,2));

// subtraction
let subtraction = ( w,z) =>{
    return w - z 
}
console.log('subtration 10 -2 =');
console.log(subtraction(10,2));
// multiplictaion
let multiplication = (s,x) =>{
    return s * x
}
console.log('Multiplication 10 x 2 =')
console.log(multiplication(10,2));

// division
let division = (r,p) =>{
    return r / p
}

console.log('Division 10 /2 = ')
console.log(division(10,2));

//----------------------------------------------------------------------
//---------------------------------------ARROW FUNCTION----------
//----------------------------------------------------------------------
((name) =>{
    console.log(`My name is ${`Sibusiso`}`)
})()
 




hoist()

function hoist() {
    console.log(`This is the hoist`);
}
