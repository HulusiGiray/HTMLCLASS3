//string
//escape character "\"
let text="ahmet bana \"naber\" dedi";
console.log(text);

let text2=" tab boşluğu bırakmak için \t kullanılır. yeni satıra geçmek için \n kullanılır."
console.log(text2);

//string methods
//özelleşmiş fonksiyon gibi düşünülebilir
let text3="abcdefgh"
let length = text3.length;
console.log(length);//8

let text4="\t"
console.log(text4.length);//1

//slice, substr, substring
//slice(dilim)
//aldığımız parametreler, değerler var. biri başlangıç ötekisi ise bitiş.
let text5 = "apple, Banana , kiwi";
let part = text5.slice(2,10)//2. karakterden 10. karaktere kadar alsın demek. 2 dahil ama 10 dahil değildir. ilk elemanın indexi yine 0'dır.
console.log(part);//ple ,Ban

//tek rakam var ise o rakam başlangıç değeri olarak kabul edilir.
console.log(text5.slice(7))//Banana , kiwi

//eksi bir rakam verilirse tersten başlar
console.log(text5.slice(-10,17));//ana , k

//substr
//2 den başla 10 karakter al demektir.
console.log(text5.substr(2,10));//ple, Banan

//substring
console.log(text5.substring(2,10))//ple, Ban -> slice ile aynı
console.log(text5.substring(-3))//-değerleri 0 sayıyor bu yüzden de hepsini yazdı

//replace methodu
//sadece gördüğü ilk değeri değiştirir.
let text6="seni seviyorum seviyorum"
let newText=text6.replace("seviyorum","sevmiyorum")
console.log(newText)//seni sevmiyorum seviyorum

//i (case insensitive)
//büyük küçük harfin önemi yok
console.log(text6.replace(/SEVIYORUM/i,"sevmiyorum"))//seni sevmiyorum seviyorum

//g(global)
//ikisini de değiştirmek için;
console.log(text6.replace(/seviyorum/g,"sevmiyorum"))

//hem global hem insensitive olması için(yani hem büyük küçük harf önemsiz olsun hem de hepsini değiştirsin) ig veya gi yaz
console.log(text6.replace(/SEVIYORUM/gi,"sevmiyorum"))//seni sevmiyorum sevmiyorum

let text7="Hello world!"
let text8="Hello Türkiye"
console.log(text7.toUpperCase())//bütün harfleri büyüttü

console.log(text7.toLowerCase());//bütün harfleri küçülttü

//concat birleştirme demektir
console.log(text7.concat(" ", text8, " metnin devamı"))//Hello world! Hello Türkiye metnin devamı

//trim boşluk alır
let text9="      Hello  World!   ";
console.log(text9)//
console.log(text9.trimEnd())//
console.log(text9.trimStart())//
console.log(text9.trim())//

//backtick
//aynen yazar
let text10=`fefef
afasfa
   sfedfs
 efefe`
console.log(text10);


//padStart ve padEnd
let text11 ="567"
console.log(text11.padStart(9,"1"));//111111567 yani toplamda 9 hane olacak şekilde 567 nin başına 1 koy
console.log(text11.padEnd(9,"1"));//567111111 yani toplamda 9 hane olacak şekilde 567 nin sonuna 1 koy

let text12="123"
console.log(text12.padStart(5,"0").padEnd(8,"1"))//00123111

let text13="123"
let padStart = text13.padStart(5,0)
let padStart2 = padStart.padEnd(8,1)
console.log(padStart2)//00123111

//charAt
let text14="Hello World"
console.log(text14.charAt(6))//W
console.log(text14[6])//W

//sonuncu elemanı getiren kod nedir? charAt veya üstteki iki içerikten biri kullanarak.
let text15="12345678"
console.log(text15.charAt(text15.length-1))
console.log(text15[text15.length-1])
console.log(text15.slice(-1))

//split
//string'i array'e çevirmek için
let text16="elma,şeftali,üzüm"
console.log(text16.split(","))//'elma' 'şeftali' 'üzüm'

let text17="bu bir metindir."
console.log(text17.split(" "))//'bu' , 'bir' , 'metindir'

let text18= "elma"
console.log(text18.split(""))//'e' , 'l' , 'm' , 'a'
console.log(text18.split())//'elma'


//string search
//bulduğu içeriğin ilk harfinin indexi
//bulunmayan değerler için -1 değeri döner
//eklenen ikinci rakam başlangıç pozisyonunu gösterir. lastındexof da sondan başa sayar
let text20 = "Please locate where 'locate' occurs!"
console.log(text20.indexOf("locate",10))
console.log(text20.lastIndexOf("locate",25))


let text21 = "Please Locate where 'locate' occurs!"
console.log(text21.search(/locate/i))
//insensitive işlemler indexof'da yapılmaz sadece search'de yapılır.
//niye indexof'a ihtiyaç var? çünkü indexof da başlangıç pozisyonu belirler

let text22="Hello world, welcome to the universe"
console.log(text22.includes("world",12))
console.log(text22.startsWith("Hello"))
console.log(text22.endsWith("universe"))