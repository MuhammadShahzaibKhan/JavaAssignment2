// // ===== STRINGS METHOD ===== // //



// // ====== ASSIGNMENT 21.1 // //


// var firstName = prompt("Enter Your First Name");
// var lastName = prompt("Enter Your Last Name");
// var fullName = (firstName + " " + lastName);

// alert("Welcome! " + fullName);


/// /// =================== /// ///





// // ====== ASSIGNMENT 21.2 // //


// var favPhone = prompt("Enter Your Favourite Phone Model");

// var strLenght = favPhone.length;

// document.write("My favorite Phone is: " + favPhone + "<br/>" + "Lenght of String: " + strLenght);


/// /// =================== /// ///





// // ====== ASSIGNMENT 21.3 // //


// var word = "Pakistani";

// document.write("String: " + word + "<br/>" + "Index Of 'n': " + word.indexOf("n"));


/// /// =================== /// ///





// // ====== ASSIGNMENT 21.4 // //


// var word = "Hello World";

// document.write("String: " + word + "<br/>" + "Last Index Of 'l': " + word.lastIndexOf("l"));


/// /// =================== /// ///





// // ====== ASSIGNMENT 21.5 // //


// var word = "Pakistani";

// document.write("String: " + word + "<br/>" + "Character at index 3: " + word.charAt(3));


/// /// =================== /// ///






// // ====== ASSIGNMENT 21.7 // //


// var city = "Hyderabad";

// var replace = city.slice(6,9);

// document.write("City: " + city + "<br/>" + "After replacement: " + "Islam" + replace);



/// /// =================== /// ///





// // ====== ASSIGNMENT 21.8 // //


// var message = "Ali and Sami are best friends. They play cricket and football together.";

// var message1 = message.replace(/and/g , "&");

// document.write("<b> Message: </b>" + message + "<br/>" + "<b> Replaced message: </b>" + message1);



/// /// =================== /// ///





// // ====== ASSIGNMENT 21.9 // //


// var string = "472";

// var type1 = typeof(string);

// var num = parseInt(string);

// var type2 = typeof(num);

// document.write("<b> Value: </b>" + string + "<br/>" + "<b> type: </b>" + type1 + "<br/>" + "<b> Value: </b>" + string + "<br/>" + "<b> type: </b>" + type2);



/// /// =================== /// ///





// // ====== ASSIGNMENT 21.10 // //


// var user = prompt("Enter Your Word");
// var a = user.toUpperCase();

// document.write("<b> User input: </b> " + user + "<br/>" + "<b> Upper Case: </b> " + a);



/// /// =================== /// ///





// // ====== ASSIGNMENT 21.11 // //



// var user = prompt("Enter Your Word");
// var firstChar = user.slice(0,1);
// var otherChar = user.slice(1);
// firstChar = firstChar.toUpperCase();
// otherChar = otherChar.toLowerCase();

// var user1 = firstChar + otherChar;

// document.write("<b> User input: </b> " + user + "<br/>" + "<b> Title Case: </b>" + user1);



/// /// =================== /// ///





// // ====== ASSIGNMENT 21.12 // //



// var num = 35.36;

// var convert = num.toString();
// var eliminate = convert.replace(".","");

// document.write("<b> Number: </b> " + num + "<br/>" + "<b> Result: </b> " + eliminate);



/// /// =================== /// ///





// // ====== ASSIGNMENT 21.13 // //



// var user = prompt();
// var a = String.fromCharCode(33);
// var b = String.fromCharCode(44);
// var c = String.fromCharCode(46);
// var d = String.fromCharCode(64);
// for(var i = 0; i < user.length; i++){
//     if(user[i] == a || user[i] == b || user[i] == c || user[i] == d){
//         alert("Please enter a valid user name");
//         break;
//     }
// }



/// /// =================== /// ///





// // ====== ASSIGNMENT 21.14 // //



// var user = prompt("Welcome to ABC Bakery \n What do you want to order sir/ ma'am?");

// var firstChar = user.slice(0,1);
// var otherChar = user.slice(1);
// firstChar = firstChar.toUpperCase();
// otherChar = otherChar.toLowerCase();
// var user = firstChar + otherChar;

// var items = ["Cake", "Apple pie", "Cookie", "Chips", "Patties"];
// if(items.indexOf(user) !== -1){
//     alert(user + " is available at index " + items.indexOf(user) + " in our bakery");
// }
// else{
//     alert("Sorry " + user + " is not available in our bakery");
// }



/// /// =================== /// ///





// // ====== ASSIGNMENT 21.15 // //







/// /// =================== /// ///





// // ====== ASSIGNMENT 21.16 // //



// var university = "University of Karachi";

// university = university.split("");

// for(var i = 0; i < university.length; i++){
//     document.write(university[i] + "<br/>");
// }



/// /// =================== /// ///




// // ====== ASSIGNMENT 21.17 // //


// var word = prompt("Enter any word");

// var word1 = word.split("");

// word1.splice(0,word.length -1);

// document.write("String " + word + "<br/> Last character of input: " + word1);



/// /// =================== /// ///




// // ====== ASSIGNMENT 21.18 // //



// var sentence = "The quick brown fox jumps over the lazy dog.";
// var count = sentence.match(/the/gi).length;

// document.write("Text : " + sentence + "<br/>" + "There are "  + count +  " occurrence(s) of word 'the' ");



/// /// =================== /// ///




// // ===== MATH METHODS ===== // //





// // ====== ASSIGNMENT 26.1 // //



// var userNum = +prompt("Enter a positive integer");

// var round = Math.round(userNum);
// var floor = Math.floor(userNum);
// var ceil = Math.ceil(userNum);

// if(userNum > 0){
//     document.write("Number: " + userNum + "<br/>" + "Round off value: " + round + "<br/>" + "Floor value: " + floor + "<br/>" + "Ceil value: " + ceil);
// }else{
//     alert("Please enter a positive integer");
// }




/// /// =================== /// ///




// // ====== ASSIGNMENT 26.2 // //



// var userNum = +prompt("Enter a negative integer");

// var round = Math.round(userNum);
// var floor = Math.floor(userNum);
// var ceil = Math.ceil(userNum);

// if(userNum < 0){
//     document.write("Number: " + userNum + "<br/>" + "Round off value: " + round + "<br/>" + "Floor value: " + floor + "<br/>" + "Ceil value: " + ceil);
// }else{
//     alert("Please enter a negative integer");
// }



/// /// =================== /// ///




// // ====== ASSIGNMENT 26.3 // //



// var userNum = +prompt("Enter a number to show it's absolute value.");

// if(userNum > 0){
//     alert("The absolute value of " + userNum + " is " + userNum);
// }else{
//     alert("The absolute value of " + userNum + " is " + (-(userNum)));
// }



/// /// =================== /// ///




// // ====== ASSIGNMENT 26.4 // //



// var number = Math.random()*6;
// var ceilNum = Math.ceil(number);

// document.write("Random dice value: " + ceilNum);



/// /// =================== /// ///




// // ====== ASSIGNMENT 26.5 // //



// var number = Math.random()*2;
// var ceilNum = Math.ceil(number);

// if(ceilNum === 1){
//     alert(ceilNum + "\n Random coin value: Heads");
// }else{
//     alert(ceilNum + "\n Random coin value: Tails");
// }



/// /// =================== /// ///




// // ====== ASSIGNMENT 26.6 // //

// var number = Math.random()*100;
// var randomNumber = Math.ceil(number);

// document.write("Random number between 1 and 100: " + randomNumber);



/// /// =================== /// ///




// // ====== ASSIGNMENT 26.7 // //



// var user = prompt("Enter your weight");

// document.write("The weight of user is " + user + " Kilograms");



/// /// =================== /// ///




// // ====== ASSIGNMENT 26.8 // //



// var userInput = +prompt("Enter your number between 1 to 10");
// var correctAnswer = 8;

// if(userInput == correctAnswer){
//     alert("congratulation! You guessed it right");
// }else if(userInput < 1 || userInput > 10){
//     alert("Opps! Please enter a number between 1 to 10");
// }
// else{
//     alert("Try Again...!!");
// }



/// /// =================== /// ///




// // ===== DATE METHODS ===== // //




// // ====== ASSIGNMENT 31.1 // 



// var dat = new Date();

// document.write(dat);



/// /// =================== /// ///




// // ====== ASSIGNMENT 31.2 // 


// var dat = new Date();
// var get = dat.toString();
// var month = get.slice(4,7);

// document.write("<b> Current month: </b>" + month);



/// /// =================== /// ///




// // ====== ASSIGNMENT 31.3 // 



// var dat = new Date();
// var get = dat.toString();
// var day = get.slice(0,3);

// alert("Today is " + day);



/// /// =================== /// ///




// // ====== ASSIGNMENT 31.4 // 



// var dat = new Date();
// var get = dat.toString();
// var day = get.slice(0,3);
// var today = day;

// if(today == "Sat" || today == "Sun"){
//     alert("It's Fun Day");
// }
// else{
//     alert("It's No Fun Day");
// }



/// /// =================== /// ///




// // ====== ASSIGNMENT 31.5 // 


// var dat = new Date();
// var date = dat.getDate();
// if(date < 16){
//     document.write("First fifteen days of the month");
// }
// else if(date > 15){
//         document.write("Last days of the month");
// }



/// /// =================== /// ///




// // ====== ASSIGNMENT 31.6 // 



// var currentDate = new Date();

// var miliSince = currentDate.getTime();

// var minSince = currentDate.getMinutes();

// document.write("Current Date: " + currentDate + "<br/>" + "Elapsed millisecond since January 1, 1970: " + miliSince + "<br/>" + "Elapsed minutes since January 1, 1970: " + miliSince);



/// /// =================== /// ///




// // ====== ASSIGNMENT 31.7 // 



// var currentDate = new Date();

// var currentTime = currentDate.getHours();
// if(currentTime > 12){
//     alert("It's PM");
// }
// else{
//     alert("It's AM");
// }



/// /// =================== /// ///




// // ====== ASSIGNMENT 31.8 // 



// var dat = new Date("Thu Dec 31 2020");

// document.write("Later date: " + dat);



/// /// =================== /// ///




// // ====== ASSIGNMENT 31.9 // 



// var dateOfRamadan = new Date("apr 24 2020");
// var days = dateOfRamadan.getDate();
// var currentDate = new Date();
// var today = currentDate.getDate();
// var diff = days + today  

// document.write(diff + " Days have passed since 1st Ramadan, 2020");



// / /// =================== /// ///




// // ====== ASSIGNMENT 31.10 // 



// var current = new Date();
// var currentSec = current.getTime();
// var before = new Date("Jan 1 2020");
// var beforeSec = before.getTime();

// var totalSec = Math.ceil((currentSec - beforeSec) / (1000*60));

// document.write("On reference date " + current + "<br/>" + totalSec + " Seconds had passed since beginning of 2020");



// / /// =================== /// ///




// // ====== ASSIGNMENT 31.11 // 



// var currentDate = new Date();
// var currentDate1 = new Date();
// var get = currentDate1.setHours();

// document.write("Current date: " + currentDate + "<br/>" + "1 hour ago,it was " + currentDate1);



// / /// =================== /// ///




// // ====== ASSIGNMENT 31.12 //

// var currentDate = new Date();
// var currentDate1 = new Date();
// var get = currentDate1.setFullYear(1920);

// document.write("Current date: " + currentDate + "<br/>" + "1 hour ago,it was " + currentDate1);



// / /// =================== /// ///




// // ====== ASSIGNMENT 31.13 //




// var user = prompt("Enter your age");
// var today = new Date();
// var year = today.getFullYear();
// var difference = year - user;

// document.write(difference);



// / /// =================== /// ///




// // ====== ASSIGNMENT 31.14 //


// var name = "ABC customer"
// var dateMonth = new Date();
// var dateMonth1 = dateMonth.toString();
// var copy = dateMonth1.slice(4,7);
// var month = copy;
// var numberOfUnits = 416;
// var chargesPerUnit = 16;
// var surCharges = 350
// var payable = numberOfUnits * chargesPerUnit;
// var gross = payable + surCharges;


// document.write("<h1> K-Electric Bill </h1>" + "<b> Customer Name: </b>" + name + "<br/>" + "<b> Month: </b> " + month + "<br/>" + "<b> Number of units:  </b>" + numberOfUnits + "<br/>" + "<b> Charges per unit:  </b>" + chargesPerUnit + "<br/> <br/>" + "<b> Net amount Payable (Within due date:  </b>" + payable + "<br/>" + "<b> Late payment surcharges:  </b>" + surCharges + "<br/>" + "<b> Gross Amount payable (After due date):  </b>" + gross);



// / /// =================== /// ///



// // ===== FUNCTION ===== // //






// // ====== ASSIGNMENT 35.1 //



// function dateAndTime() {
//    var dat = new Date();
//    document.write(dat);
// }

// dateAndTime();



// / /// =================== /// ///




// // ====== ASSIGNMENT 35.2 //




// function greeting() {
//     var firstName = prompt("Enter your first name");
//     var lastName = prompt("Enter your last name");
//     alert("Welcome! " + firstName + "" + lastName);
// }

// greeting();



// / /// =================== /// ///




// // ====== ASSIGNMENT 35.3 //



// function addSubtract(a , b){
//     a = prompt("Enter your first number you want to add");
//     b = prompt("Enter your second number you want to add");
//     return (+a) + (+b);
// }

// var result = addSubtract();
// alert(result);



// / /// =================== /// ///




// // ====== ASSIGNMENT 35.4 //



// function calculator (num1,opr,num2) {
//     num1 = prompt("Enter your first number");
//     opr = prompt("Enter your operator");
//     num2 = prompt("Enter your second number");
//     if(opr === "+"){
//         return (+num1) + (+num2)
//     }
//     else if(opr === "-"){
//         return num1 - num2
//     }
//     else if(opr === "*"){
//         return num1 * num2
//     }
//     else if(opr === "/"){
//         return num1 / num2
//     }
// }

// var result = calculator();
// document.write(result);



// / /// =================== /// ///




// // ====== ASSIGNMENT 35.5 //




// function square(number){
//     return number * number
// }

// var result = square(10);
// alert(result);



// / /// =================== /// ///




// // ====== ASSIGNMENT 35.6 //



// function factorial(number){
//     if(number >= 0 && number <= 1){
//         return 1;
//     }
//     else{
//         return number * factorial(number-1);
//     }
// }

// var result = factorial(4);
// document.write(result);



// / /// =================== /// ///




// // ====== ASSIGNMENT 35.7 //



// function counting(startnum,endnum){
//     startnum = +prompt("Enter your start number");
//     endnum = +prompt("Enter your end number");
//     for(i = startnum; i <= endnum; i++){
//         document.write(i + "<br/>");
//     }
// }

// counting();



// / /// =================== /// ///




// // ====== ASSIGNMENT 35.9 //




// function area (width , height) {
//   document.write("Area of a rectangle: " + width * height);
// }

// area(10,20); //// Arguments in values


// function area() {
//     var width = 10;
//     var height = 20;
//    document.write("Area of a rectangle: " + width * height); //// Arguments in variables
// }
  
// area();



// / /// =================== /// ///




// // ====== ASSIGNMENT 35.10 //



// function palindrome(){
//     var word = prompt("Enter to check if the word is palindrome word");
//     var check = "";
//     for (var i = word.length - 1; i >= 0; i--){
//         check += word[i];
//     }
//     if(word === check){
//         document.write(word + " is a palindrome word")
//     }
//     else{
//         document.write(word + " is not a palindrome word")
//     }

// }   

// palindrome();



// / /// =================== /// ///




// // ====== ASSIGNMENT 35.11 //



// function firstChar(firstLetter){
//     return firstLetter.replace(/\w\S*/g, 

//         function(words){
//             return words.charAt(0).toUpperCase() + words.substr(1).toLowerCase();
//     });

// }

// document.write(firstChar("The quick brown fox"));



// / /// =================== /// ///



