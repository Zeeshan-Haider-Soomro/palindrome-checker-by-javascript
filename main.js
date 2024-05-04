let userInput = prompt("Write any word").toLowerCase();
let inputReverse = "";

function palindromeChecker (){
    for(let i=userInput.length - 1; i>=0; i--){
        inputReverse = inputReverse + userInput[i];
    }
    // alert(`Reverse : ${inputReverse}`);
    if(inputReverse === userInput){
        Swal.fire("The word provided is a palindrome.")
    }
    else{
        Swal.fire("The word provided is not a palindrome.")
    }
}
palindromeChecker()






