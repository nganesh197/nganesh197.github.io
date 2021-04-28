resume = document.querySelector(".resume-details");
placeholderHeader = document.querySelector('.one');

function enterCode(){
    var x = document.getElementById("code_val");
    var chosenOne = x.value;

    if(chosenOne=="1234"){
        resume.classList.add("all");
        placeholderHeader.classList.add('disappear');
    }
}
