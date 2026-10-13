//javaScript --> Programming Language
/*
Programming Language
1. Input & Output
2. Variable & Data type
3. Condition (if, else)
4. Looping (perulangan)
5. Function
*/

//Output
//1. using console.log()
console.log("Hello world");
console.log("My Name is Latisha Adyalana");
console.log(4+5);

//2. using alert()
//alert("Welcome to My Website");

//3. using document.write

//4. using innerHTML
//doucument.getElementByID("id_name").innerHTML="text";
document.getElementById("first").innerHTML="My Name is Latisha";

//variable --> to store data (let, var, const)

//let
let name="Latisha";
name="Latisha Adyalana";
console.log(name);
let a= 4;
let b= 3;
let c= a+b;
let d= a*b;
console.log(a+b);
console.log(c);
console.log(c+d);
let address="Solo";
console.log("My name is " + name +" I am from "+ address);

let oke = 8;
let OKE = 7;
console.log(oke);
console.log(OKE);

const school="SMA ABBS Surakarta";

console.log(school);

/*
penjumlahan (+)
pengurangan (-)
perkalian (*)
pembagian (/)
modulus (%)
perpangkatan (**)
*/
let number1 = 100;
let number2 = 250;
console.log(number1+number2);
console.log(number1-number2);
console.log(number1*number2);
console.log(number1/number2);
console.log(number1%number2);
console.log(number1 ** 2);

//calculator BMI
let tb=155;
let bb=60;

let bmi = (bb/(tb*tb))*10000;

console.log(bmi)

//variable = let, var, const
let angka = 5;
angka = 6;
console.log(angka);

var angka1 = 5;
var angka1 = 6;
console.log(angka1);

const angka2 = 5;
// angka2 = 6; (tidak boleh) x
console.log(angka2);

/*Data Type 
1. String = Character --> using ""/''
2. number (integer, float)
   - integer = Bilangan Bulat
   - float = Bilangan Pecahan
3. Boolean = true, false
*/
let data1 = "SMA ABBS SURAKARTA"; //string
let data2 = "100"; //string
let data3 = 50; //integer
let data4 = 25.25; //float
let data5 = false; //boolean

/* Comparison Operator ---> the output of comparison operator are true or false
- Equal (==)
- Not equal (!=)
- Greater than (>)
- Greater than or equal (>=)
- Less than (<)
- Less than or equal (<=)
*/

let x = 5;
console.log(x == 5); //true
console.log(x != 5); //false
console.log(x > 10); //false
console.log(x >= 10); //false
console.log(x < 10); //true
console.log(x <= 10); //true

/* 
logical operators
  - and (&&) = semua kondisi harus bernilai true
  - or (||) = paling tidak ada 1 kondisi yang bernilai true
  - not (!g) = kebalikan dari kondisinya
*/

//Condition 

/*1. if (1 condition)
     if (condition){
         action;
     }
*/

let time = 6;
if (time <= 6){
    console.log("Good Morning");
}

/*1. if (2 condition)
     if (condition 1){
         action 1;
     }
         else{
            action2;
            }
*/
let time1 = 6;
if (time1 <= 6){
    console.log("Good Morning");
} else{
    console.log("Good Bye");
}

/*kondisi 
1. jika hari ini hujan , maka membawa payung
2. jika hari ini tidak hujan, maka tidak membawa payung.,  
*/

let cuaca = "hujan";
if (cuaca == "hujan") {
    console.log("Bawa Payung")
}
else{
    console.log("Tidak Bawa Payung")
}

//jika nilai lebih dari 75, maka lulus
//jika nilai kurang dari 75, maka tidak lulus

let nilai = 80;
console.log("Nilai = ", nilai);
if (nilai > 75) {
    console.log("Lulus");
}
else {
    console.log("Tidak lulus");
}

//jika bilangannya itu genap, maka genap
//jika bilangannya ganjil, maka ganjil
let bilangan = 5;
console.log("Bilangan = ", bilangan);
if (bilangan % 2 == 0) {
    console.log(bilangan + " adalah bilangan genap");
}
else {
    console.log(bilangan + " adalah bilangan ganjil");
}

let bilangan1 = 8;
console.log("Bilangan1 = ", bilangan1);
if (bilangan1 % 2 == 0) {
    console.log(bilangan1 + " adalah bilangan genap");
}
else {
    console.log(bilangan1 + " adalah bilangan ganjil");
}

/* 3. More than 2 conditions
      if (condition1){
          action1;
        }
      else if (condition2){
          action2;
        }
      else {
          action3;
        }

*/

let TB=155;
let BB=60;

let BMI = (BB/(TB*TB))*10000;

console.log("Tinggi badan = ", TB, "cm");
console.log("Berat badan = ", BB, "kg");
console.log("BMI = ", BMI);

//jika BMI < 18.5, maka underweight
//jika BMI 18.5 - 24.9, maka normal weight
//jika bmi 25.0 - 29.9, maka overweight
//jika bmi >= 30.0, maka obese

if (BMI < 18.5) {
    console.log("underwight");
}
else if (BMI >= 18.5 && BMI <=24.9) {
    console.log("normal weight");
}
else if (BMI >= 24.9 && BMI <=29.9) {
    console.log("overweight");
}
else {
    console.log("obese");
}