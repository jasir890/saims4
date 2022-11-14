

// // -----------------------------------------------------------------------------
// // --------------------------------Chapter 14 to 16-----------------------------
// // -----------------------------------------------------------------------------

// // Question no: 1

// var arr = [];

// arr[0] = "Afzaal";
// arr[1] = "Ahmed";

// alert(arr);

// // Question no: 3

// var arr = ["Apple", "Mango", "Grapes", "Pomegranate", "Guava"];
// alert(arr);

// // Question no: 4

// var arr = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
// alert(arr);

// // Question no: 5

// var arr = [true, false];
// alert(arr)

// // Question no: 6

// var arr = [5, "parrots", true];
// alert(arr)

// // Question no: 7

// var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil", "PhD"];
// document.write("<h1>Qualifications:</h1><br>" + "1) " + qualifications[0] + "<br>" + "2) " + qualifications[1] + "<br>" + "3) " + qualifications[2] + "<br>" + "4) " + qualifications[3] + "<br>" + "5) " + qualifications[4] + "<br>" + "6) " + qualifications[5] + "<br>" + "7) " + qualifications[6] + "<br>" + "8) " + qualifications[7]);

// // Question no: 8

// var std = ["Michael", "John", "Tony"];
// var stdScore = [320, 230, 480];
// var totalMarks = 500;
// for (var i = 0; i<std.length; i++){
//     document.write(`Score of ${std[i]} is ${stdScore[i]}. Percentage: ${stdScore[i]/totalMarks*100}% <br>`)
// }

// // Question no: 9

// // Initialized Array
// var colorNames = ["White", "Red", "Yellow", "Blue"];
// document.write(colorNames + "<br>");

// // a
// var addInBegining = prompt("What color do you want to add in the beginging?");
// colorNames.unshift(addInBegining);
// document.write(colorNames);

// // b
// var addAtEnd = prompt("What color do you want to add at the end?");
// colorNames.push(addAtEnd);
// document.write(colorNames);

// // c
// colorNames.unshift("Purple", "Black");
// document.write(colorNames);

// // d
// colorNames.shift();
// document.write(colorNames);

// // e
// colorNames.pop();
// document.write(colorNames);

// // f
// var indexNum = +prompt("From which index do you want to add color");
// var userColor = prompt("Enter color name");
// colorNames.splice(indexNum, 0, userColor);
// document.write(colorNames)

// // g
// var indexNum = +prompt("From which index do you want to delete color");
// var deleted = +prompt("How many colors do you want to delete");
// colorNames.splice(indexNum, deleted);
// document.write(colorNames)

// // Question no: 10

// var arr = [320, 230, 480, 120];
// document.write("Score of Students: " + arr + "<br>");
// arr.sort()
// document.write("Ordered Score of Students: " + arr);

// // Question no: 11

// var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
// document.write("<h3>Cities List:</h3>" + cities);
// let selectedCities = cities.slice(2, 4);
// document.write("<h3>Selected Cities List:</h3>" + selectedCities);

// // Question no: 12

// var arr = ["This", "is", "my", "cat"];
// document.write("<b>Array:</b> <br>" + arr + "<br>");
// var joinedArr = arr.join(" ");
// document.write("<b>String:</b> <br>" + joinedArr);

// // Question no: 13

// var devices = ["keyboard", "mouse", "printer", "monitor"];
// document.write("<strong>Devices:</strong><br>" + devices + "<br>");

// var outDevice = devices.slice(0,1);
// document.write("<strong>Out:</strong><br>" + outDevice + "<br>");
// devices.splice(0,1);

// var outDevice = devices.slice(0,1);
// document.write("<strong>Out:</strong><br>" + outDevice + "<br>");
// devices.splice(0,1);

// var outDevice = devices.slice(0,1);
// document.write("<strong>Out:</strong><br>" + outDevice + "<br>");
// devices.splice(0,1);

// var outDevice = devices.slice(0,1);
// document.write("<strong>Out:</strong><br>" + outDevice + "<br>");
// devices.splice(0,1);

// // Question no: 14

// var devices = ["keyboard", "mouse", "printer", "monitor"];
// document.write("<strong>Devices:</strong><br>" + devices + "<br>");
// devices.reverse();

// var outDevice = devices.slice(0,1);
// document.write("<strong>Out:</strong><br>" + outDevice + "<br>");
// devices.splice(0,1);

// var outDevice = devices.slice(0,1);
// document.write("<strong>Out:</strong><br>" + outDevice + "<br>");
// devices.splice(0,1);

// var outDevice = devices.slice(0,1);
// document.write("<strong>Out:</strong><br>" + outDevice + "<br>");
// devices.splice(0,1);

// var outDevice = devices.slice(0,1);
// document.write("<strong>Out:</strong><br>" + outDevice + "<br>");
// devices.splice(0,1);

// // Question no: 15

// var company = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
// document.write("<select>" + "<option>" + company[0] + "</option>" + "<option>" + company[1] + "</option>" + "<option>" + company[2] + "</option>" + "<option>" + company[3] + "</option>" + "<option>" + company[4] + "</option>" + "<option>" + company[5] + "</option>" + "</select>");

// // -----------------------------------------------------------------------------
// // --------------------------------Chapter 17 to 20-----------------------------
// // -----------------------------------------------------------------------------

// // Question no: 1

// var arr =[
//     [],
//     [],
//     []
// ]

// // Question no: 2

// var arr =[
//     [0,1,2,3],
//     [1,0,1,2],
//     [2,1,0,1]
// ]
// document.write(arr[0].join(" ") + "<br>" + arr[1].join(" ") + "<br>" + arr[2].join(" ") )

// // Question no: 3

// for (i=1;i<=10;i++){
//     document.write(i+"<br>")
// }

// // Question no: 4

// var table = +prompt("Enter a number to show its multiplication table");
// var times = +prompt("Enter length multiplication table")
// document.write(`Multiplication table of ${table} <br>Length ${times} <br><br><br>`);
// for (let i = 1; i <= times; i++) {
//     document.write(`${table} X ${i} = ${table*i} <br>`)
// }

// // Question no: 5

// var arr = ["Apple", "Banana", "Mango", "Orange", "Strawberry"];

// for (var i = 0; i < arr.length; i++) {
//     document.write(arr[i] + "<br>");
// }
// document.write("<br>");
// for (var i = 0; i < arr.length; i++) {
//     document.write("Element at index " + i + " is " + arr[i] + "<br>");
// }

// // Question no: 6

// // a
// document.write("<h3>Counting:</h3>");
// for (var i = 1; i <= 15; i++) {
//     document.write(i + ", ");
// }

// // b
// document.write("<h3>Reverse counting:</h3>");
// for (var i = 10; i > 0; i--) {
//     document.write(i + ", ");
// }

// // c
// document.write("<h3>Even:</h3>");
// let num = 20;
// for (var i = 0; i <= num; i++) {
//     if (i % 2 == 0) {
//         document.write(i + ", ");
//     }
// }

// // d
// document.write("<h3>Odd:</h3>");
// for (var i = 0; i <= num; i++) {
//     if (i % 2 == 1) {
//         document.write(i + ", ");
//     }
// }

// // e
// document.write("<h3>Series:</h3>");
// for (var i = 1; i <= num; i++) {
//     if (i % 2 == 0) {
//         document.write(i + "k, ");
//     }
// }

// // Question no: 7

// var bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"];
// var flag = true;
// var userInput = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");

// for (var i = 0; i < bakeryItems.length; i++) {
//     if (bakeryItems[i] === userInput) {
//         flag = false
//         alert(userInput + " is available at index " + i + " in our bakery");
//     }
// }
// if (flag){
//     alert("We are sorry. " + userInput + " is not available in our bakery");
// }


// // Question no: 8

// var numList = [24, 53, 78, 91, 12];
// var largest = 0;

// document.write("Array items: " + numList + "<br>")
// for (var i = 0; i < numList.length; i++) {
//     if(numList[i]>largest){
//         largest = numList[i];
//     }
// }
// document.write("The Largest number is " + largest)


// // Question no: 9

// var numList = [24, 53, 78, 91, 12];
// var smallest = 0;

// document.write("Array items: " + numList + "<br>")
// for (var i = 0; i < numList.length; i++) {
//     if (numList[i] > smallest) {
//         smallest = numList[i];
//     }

// }

// for (let i = 0; i < numList.length; i++) {
//     if (numList[i] < smallest) {
//         smallest = numList[i];
//     }
// }
// document.write("The Smallest number is " + smallest)

// // Question no: 10

// var num = 5;
// for(var i = 1; i<100; i++){
//     var multiple = i*num;
//     document.write(multiple+", ")

//     if (multiple == 100) {
//         break
//     }
// }

