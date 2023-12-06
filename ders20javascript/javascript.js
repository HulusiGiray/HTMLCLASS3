function myFunction3(){
    document.getElementById("demo1").innerHTML = "External(Dış) script çalıştı"
}

// html'de 84.satırdan sonra buraya geçtik

var x = 5;
var y = 6;
var z = x+y;
console.log(z)//web sayfasında incele>konsol yaptığında 11'i görürsün

//const değişmeyen ifadeler için kullanılır. değer atamak zorunludur//

const price1=4;
const price2=5;
let total = price1 + price2;
console.log(total)//ekrana 9 basar

const price3=4;
const price4=5;
let total2 = price3 + price4;
total2=40;
console.log(total2)//ekrana 40 basar

var x = 5;
x = x + 5;
var y = 6;
var z = x+y;
console.log(z);//ekrana 16 basar

console.log(price1==price2);//kıyas için kullanılır. true ya da false. bu ifade false
console.log(x==10);// bu ifade true

const pi=3.14;

let person = "Giray";
console.log(person);//ekrana Giray basar

var carName1;
let carName2;
carName2 = "Volvo";
let carName3 = "Mercedes";
console.log(carName1);//undefined
console.log(carName2);//ekrana Volvo basar
console.log(carName3);//ekrana Mercedes basar

let person4 = "ahmet", carName = "Renoult" , price9 = 200;

carName = "Volvo";
var carName7 = "Volvo";
var carName7 = "Fiat";
console.log(carName7);


// {
//     let a1=2;
// }
// console.log(a1); bu ifadede hata verir, undefined.


let a2=2;
{
    let a2=5;
    console.log(a2);//ekrana 5 basar
}
console.log(a2);//ekrana 2 basar


var a3=4;
{
    console.log(a3);//ekrana 4 basar
}
a3=90;
console.log(a3);//ekrana 90 basar

const cars = ["fiat","toyota","mercedes"]//dizi,array
const numbers = [1,2,3,5,6.23,7]
console.log(cars[0]);//ekrana fiat basar
cars[1]="Mazda"//ekrana toyota değil mazda basar
console.log(cars[1]="Mazda");

const car1 = {type:"fiat", model:"500", color:"white", age:15}//key value
console.log(car1.type);//ekrana fiat basar
car1.color="red";
console.log(car1.color);//ekrana red basar
