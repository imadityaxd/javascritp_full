function showInput() {
    // Get the input element by its id
    let userInput = document.getElementById("userInput").value;

    // Displaying the input
    console.log("You entered: " + userInput);

    var num = parseInt(userInput);

    console.log(5 + num);
}


// JavaScript program to reverse a word 
function reverseWord(){
    let enterWord = document.getElementById("enterWord").value;
    
    let result = enterWord.split(" ").map(function(word){
        return word.split("").reverse().join(" ");
    });
    document.getElementById("result").innerHTML = result.join(", ");

}