 var elFirst = document.querySelector("#one");
 var elNorm = document.querySelector("#norm");
 var elBtn = document.querySelector(".Btn");
 var elOpen = document.querySelector(".text2");
 elBtn.addEventListener("click", function(){
    elOpen.classList.toggle("text2__open");
})
function normolizeNumbers(arrayOfNUmbers) {
    var result = [];
    for (var i = 0; i < arrayOfNUmbers.length; i++) {
        if(arrayOfNUmbers[i]<0)
        var newNumber = Math.floor(arrayOfNUmbers[i])*(-1);
        else
        var newNumber = Math.floor(arrayOfNUmbers[i]);
        
        result.push(newNumber)
    }

    return result
}

var newArray = [3.02, -3.65, 20.25, -62.003]

console.log(newArray);
elFirst.textContent = `${newArray}`;
elNorm.textContent = `${normolizeNumbers(newArray)}`;

console.log(normolizeNumbers(newArray));

