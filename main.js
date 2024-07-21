
let date = new Date()
let yearChanger = document.querySelector("#yearChanger")
yearChanger.innerText = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`

// let userInput = prompt("Write any word").toLowerCase();
// let inputReverse = "";

// function palindromeChecker (){
//     for(let i=userInput.length - 1; i>=0; i--){
//         inputReverse = inputReverse + userInput[i];
//     }
//     // alert(`Reverse : ${inputReverse}`);
//     if(inputReverse === userInput){
//         Swal.fire("The word provided is a palindrome.")
//     }
//     else{
//         Swal.fire("The word provided is not a palindrome.")
//     }
// }
// palindromeChecker()

let language = prompt("enter language");
let location = prompt("enter location");
let exp = +prompt("enter experience");

if(language === "javascript" && location === "karachi" && exp === "2"){
    alert("eligible")
} else { alert("not eligible")}





