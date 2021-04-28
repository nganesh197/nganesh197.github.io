const showMenuBoxes = document.querySelector(".two");
const showBetaBox = document.querySelector(".three");

function answerQuestion(){
    var x = document.getElementById("issues");
    var chosenOne = x.options[x.selectedIndex].value;
    
    if(chosenOne=="development"){
        window.open("portfolio.html", "_self");
    }else if(chosenOne=="data"){
        window.open("coding.html#data", "_self");
    }else if(chosenOne=="supply"){
        window.open("coding.html", "_self");
    }else if(chosenOne=="model"){
        window.open("mechanical.html", "_self");
    }else{
        showMenuBoxes.classList.add('unsure');
        showBetaBox.classList.add('unsure');
    }
}




function setupTypewriter(t) {
    var HTML = t.innerHTML;

    t.innerHTML = "";

    var cursorPosition = 0,
        tag = "",
        writingTag = false,
        tagOpen = false,
        typeSpeed = 100,
    tempTypeSpeed = 0;

    var type = function() {
    
        if (writingTag === true) {
            tag += HTML[cursorPosition];
        }

        if (HTML[cursorPosition] === "<") {
            tempTypeSpeed = 0;
            if (tagOpen) {
                tagOpen = false;
                writingTag = true;
            } else {
                tag = "";
                tagOpen = true;
                writingTag = true;
                tag += HTML[cursorPosition];
            }
        }
        if (!writingTag && tagOpen) {
            tag.innerHTML += HTML[cursorPosition];
        }
        if (!writingTag && !tagOpen) {
            if (HTML[cursorPosition] === " ") {
                tempTypeSpeed = 0;
            }
            else {
                tempTypeSpeed = (Math.random() * typeSpeed) + 50;
            }
            t.innerHTML += HTML[cursorPosition];
        }
        if (writingTag === true && HTML[cursorPosition] === ">") {
            tempTypeSpeed = (Math.random() * typeSpeed) + 50;
            writingTag = false;
            if (tagOpen) {
                var newSpan = document.createElement("span");
                t.appendChild(newSpan);
                newSpan.innerHTML = tag;
                tag = newSpan.firstChild;
            }
        }

        cursorPosition += 1;
        if (cursorPosition < HTML.length - 1) {
            setTimeout(type, tempTypeSpeed);
        }

    };

    return {
        type: type
    };
}

var typer = document.getElementById('typewriter');

typewriter = setupTypewriter(typewriter);

typewriter.type();