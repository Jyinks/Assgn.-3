//For Question 1 : Creation of variables to store my name, age, and nationality
var Name = "Adegboyega Jeremiah"
var Age = 24
var Nationality = "Nigeria"
console.log(Name)
console.log(Age)
console.log(Nationality)

//Combining the above information into a sentence that introduces me
const MyIntroduction = `My name is ${Name}. I am ${Age} years old, and I am a citizen of ${Nationality}.`
console.log(MyIntroduction)

//For Question 2
var favoritequote = "Make hay while the sun shines" //A variable with my favorite quote
console.log(favoritequote)
console.log(favoritequote.toLocaleLowerCase()) //Changing the entire text to lowercase
console.log(favoritequote.toLocaleUpperCase()) //Changing the entire text to uppercase
 
//For Question 3 (We make use of the functions : SPLIT, REVERSE and JOIN)
var word = "Jurisdiction"
console.log(word.split('').reverse().join()) //To reverse the letter arrangement of a particular word

//For Question 4
const Toiletries = 1000
const Groceries = 1500
const SchoolAccesories = 2000
const TotalPrice = Toiletries + Groceries + SchoolAccesories
const DisplayMessage = `Total Price of commodity = ${TotalPrice}`
console.log(DisplayMessage) //Displays the total price of the items with a message

//For Question 5
var Amina = 20
var John = 30
var Victor = 35
var Rebecca = 15
var Rasheed = 25
var Average = (Amina + John + Victor + Rebecca + Rasheed)/5
var DisplayMessage2 = `The average value of the scores = ${Average}`
console.log(DisplayMessage2) //Displays the average value of 5 test scores with a message

//For Question 6
const myfavoritefoods = ["Pounded Yam", "Rice and Beans with stew", "Amala", "Jollof Rice", "Tea and Bread"]
console.log(myfavoritefoods) //An array list of my 5 favorite foods
console.log(myfavoritefoods[[0]]) //This is to display the first food item on the list
console.log(myfavoritefoods[4]) //This is to display the last food item on the list

//For Question 7
myfavoritefoods.unshift("Potatoes") //Addition of a food item at the beginning
myfavoritefoods.push("Gari") //Addition of a food item at the end
console.log(myfavoritefoods)

//For Question 8 : An array that contains the names of ten students in jss one
const jssOne = ["Akin", "Job", "Alice", "Beatrice", "Hassana", "Abdulmalik", "Umar", "Abel", "Precious", "Rasheedat"]
console.log(jssOne)

//For Question 9 : An array that contains the names of ten students in jss two
const jssTwo = ["Bello", "Sagir", "Smith", "Roseline", "Baki", "Chidinma", "Omayoza", "Declan", "Oliver", "Usman"]
console.log(jssTwo)

//For Question 10 : An array that contains the names of ten students in jss three
const jssThree = ["Bankole", "Zainab", "Bashiru", "Joel", "Augustina", "Ahmed", "Epaphroditus", "Grace", "Bimbo", "Daniel"]
console.log(jssThree)