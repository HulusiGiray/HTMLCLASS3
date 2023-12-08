//operators

let x = 6;
let y = 4;
let z = x % y;
console.log(z);//kalan 2

let a = 3;
let b = 2;
let c = a ** b;
console.log(c);//3^2 den 9

let d = 5;
d = d + 3;
console.log(d);//8
d+=6;
console.log(d);//14

d++;
console.log(d);//15

d--;
console.log(d);//14

++d;
console.log(d);//15

let text1= "mustafa";
let text2= "önal";
let text3= text1 +" "+ text2;
console.log(text3);//mustafa önal
let text4= " frontend developer";
text3 += text4;
console.log(text3);//mustafa önal frontend developer

let m1 = "5"+"4";
console.log(m1);//54

let m2= 5 + 3 + "4";
console.log(m2);//84

let m3="5" + 3 + 4;
console.log(m3);//534

// data types

//numbers
let lenght=6
let weight=7.5

//string
let name="giray";
let color="red";

//booelan
let x3 = true;
let y6 = false;

//object
const person = {firstName:"John",Age:25}
console.log(person.Age);//25

//array
const cars=["volvo","audi",{name:"audi",age:2}]
console.log(cars[0]);
console.log(cars[2].age);//2 , {name:"audi",age:2} bu ifadenin içindeki age'i çağırdık.

const date = new Date("2022-03-25 01:00:00");
console.log(date);

let x5;
console.log(x5);//undefined

let bigNumber = 123e5;
console.log(bigNumber);//12300000

let bigNumber2 = 123e-5;
console.log(bigNumber2);//123^(10^-5)

console.log(typeof bigNumber);//number
console.log(typeof x5);//undefined
console.log(typeof date);//object


// function

//function myFunction(parameter1,parameter2){
//    code block
// };

// let a = function (){}; bu şekilde tanımlayıp a üzerinden işlem yapılabilir

function topla(sayi1,sayi2){
    return sayi1 + sayi2
};
console.log(topla(3,4));//7
console.log(topla(18,14));//32
console.log(topla(-3,40));//37

function toCelcius(fahrenheit){
    return fahrenheit + " Fahrenheit = " + (5/9)*(fahrenheit-32) + " Celcius'dur"
}
console.log(toCelcius(252))//252 Fahrenheit = 122.22222222222223 Celcius'dur

//object

const person1={
    firstName1:"Hulusi",
    lastName1:"Guzel",
    age:21,
    eyeColor:"green"
};
console.log(person1.firstName1);//Hulusi
console.log(person1["firstName1"]);//Hulusi

function person2(firstName2, lastName2, age2, eyeColor2){
    const personInfo = {
        firstname2Value:firstName2,
        lastName2Value:lastName2,
        age2Value:age2,
        eyeColor2Value:eyeColor2
    }
    console.log(personInfo)//output1 = {firstname2Value: 'ahmet', lastName2Value: 'çelik', age2Value: 23, eyeColor2Value: 'brown'} 
    //output2 = {firstname2Value: 'ayse', lastName2Value: 'yilmaz', age2Value: 25, eyeColor2Value: 'black'}
}
person2("ahmet","çelik",23,"brown")
person2("ayse","yilmaz",25,"black")

const person6={
    firstName6:"Hulusi",
    lastName6:"Guzel",
    age6:21,
    eyeColor6:"green",
    fullName: function fullNameFunction(){ return this.firstName6 + " " + this.lastName6}
};
console.log(person6.fullName());//Hulusi Guzel