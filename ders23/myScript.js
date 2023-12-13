//back-tics
let text=`
bu
 bir
     texttir`
let firstName="Ali"
let lastName="Can"
let text2=`Welcome ${firstName + lastName}, ${lastName}`
console.log(text2)//Welcome AliCan, Can


//numbers
let y;
console.log(y)//undefined -> bir içerik var ama değerini bulamıyorum

let x=100 / "elma"
console.log(x)//NaN = Not a Number -> yani hesaplanamayan da denebilir

let x2=100 / 0
console.log(x2)//infinty

//methodlar , dönüşümler
let x3="10"
let y3=20
console.log(typeof y3.toString())//20 sayısını string'e çevirmek için
console.log(typeof Number(x3))

//noktalama işaretleri
let z=9.234
console.log(z)//9.234
console.log(z.toFixed(1))//9.2
console.log(z.toFixed(2))//9.23
console.log(z.toFixed(3))//9.234

let z2=9
console.log(z2)//9
console.log(z2.toFixed(1))//9.0
console.log(z2.toFixed(2))//9.00

console.log(Number(true))//1
console.log(Number(false))//0

console.log(("  23  "))//  23  //
console.log(Number("  23  "))//23
console.log(Number("  23  ").toString())//23

console.log(parseInt("45.234"))//45
let k=45
console.log(k.toFixed(0))//45
console.log(parseFloat("45.234"))//45.234

//array
const cars = ["fiat", "volvo", "opel"]//3 elemanlı bir array
console.log(cars[0])//1.elemana eriştik
console.log(cars[1])//2.elemana eriştik
console.log(cars[2])//3.elemana eriştik
console.log(cars)//tüm elemanlara eriştik
console.log(cars[cars.length-1])//hep son elemana erişir

console.log(cars.toString())//fiat,volvo,opel
console.log(cars.toString().split(","))//tekrardan array'a çevirdik

//array'lere özgü methodlar
//pop
//sondan çıkarma işlemi, son elemanı çıkarır
let value = cars.pop()//value çıkardığı elemana eşit. bu yüzden value opel'le
cars.pop()//volvo çıktı
console.log(value)//opel
console.log(cars)//fiat kaldı sadece
console.log(cars, value)//fiat kaldı ve value yukarıda dediğimiz gibi opel

let pushing = cars.push("BMW")
console.log(cars, pushing)//fiat, BMW
let value2=cars.shift()
console.log(cars, value2)//BMW, fiat
cars.unshift("volkswagen", "ferrari")
console.log(cars)//volkswagen, ferrari, BMW

//join
const cars2 = ["fiat", "volvo", "opel"]
console.log(cars2.join(" - "))//fiat - volvo - opel
console.log(cars2.join(" / "))//fiat / volvo / opel

const cars3 = ["car1", "car2", "car3"]
const allCars = cars2.concat(cars3, ["car4"])
console.log(allCars)//fiat, volvo, opel, car1, car2, car3, car4

//splice içi
const meyveler = ["elma", "armut", "mandalina"]
meyveler.splice(1,0,"çilek", "ayva", "muz")//
console.log(meyveler)//elma, çilek, ayva, muz, armut, mandalina

const meyveler2 = ["elma", "armut", "mandalina"]
meyveler2.splice(1,2,"çilek", "ayva", "muz")//
console.log(meyveler2)//elma, çilek, ayva, muz

const meyveler3 = ["elma", "armut", "mandalina"]
let secmeMeyveler=meyveler3.slice(1,2)
console.log(secmeMeyveler)//armut

//sort sıralama
//a-z arası sıralar
const meyveler4 = ["elma", "armut", "mandalina", "cilek", "ayva", "muz"]
console.log(meyveler4.sort())//(6) ['armut', 'ayva', 'cilek', 'elma', 'mandalina', 'muz']

//reverse
//tersten a-z sıralar
console.log(meyveler4.reverse())//['muz', 'mandalina', 'elma', 'cilek', 'ayva', 'armut']

const numbers = [1,100,20,45]//hane sayısına bakmadan baştakilere göre sıralanır
console.log(numbers.sort())//1, 100, 20, 45
console.log(numbers.sort(function(a,b){return a-b}))//1, 20, 45, 100
console.log(numbers.sort(function(a,b){return b-a}))//100, 45, 20, 1

const cars5 = [{type:"volvo", year:2016}, {type:"fiat", year:2001}, {type:"bmw", year:2010}]
console.log(cars)//volkswagen', 'ferrari', 'BMW'
console.log(cars.sort(function(a,b){return a.year-b.year}))//volkswagen', 'ferrari', 'BMW'

//itaration döngüler
const sayilar = [45 ,5 ,6 ,55 ,77]
sayilar.forEach(
    function myFunction(value10, index10, array10){
        console.log(value10)//45 5 6 55 77
        console.log(index10)//0  1 2 3  4
        console.log(array10)//[45 ,5 ,6 ,55 ,77] x 5 kere
    }
)

const sayilar2 = [45 ,5 ,6 ,55 ,77]
sayilar2.forEach(
    function myFunction(value10, index10, array10){
        sayilar2[index10]+=1;
        console.log(value10)//45, 5, 6, 55, 77
        console.log(index10)//0, 1, 2, 3, 4
        console.log(array10)//[46, 5, 6, 55, 77], [46, 6, 6, 55, 77], [46, 6, 7, 55, 77], [46, 6, 7, 56, 77], [46, 6, 7, 56, 78]
    }
)
console.log(sayilar2)//[46, 6, 7, 56, 78]