let textBox = document.getElementById("message");
let count = document.getElementById("count");
let warning = document.getElementById("warning");

let max = 200;

textBox.addEventListener("input", updateCount);

function updateCount(){

    let total = textBox.value.length;

    if(total >= max){
        warning.textContent = "Character limit reached !";
    }
    else{
        warning.textContent = "";
    }

    let Remaining = max - total;

    count.textContent = total + "/" + max + " Characters (" + Remaining + " Remaining)";
}