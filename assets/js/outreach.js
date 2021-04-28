const volunt = document.querySelector('.volunteering');
const oldVolunt = document.querySelector('.old-volunteer');
const voluntSection = document.querySelector('.volunteer');
const community = document.querySelector('.community-focused');
const communitySection = document.querySelector('.community-projects');

const dropDownBox = document.querySelector('.old-volunteer');
const dropDownSymbol = document.querySelector('.dropdown-box');
const pastWork = document.querySelector('.past');

let togglePastWork = false;

dropDownBox.addEventListener('click', togglePastWorkMenu);
volunt.addEventListener('click', volunteerSelectSection);
community.addEventListener('click', communitySelectSection);

function volunteerSelectSection(){
    volunt.classList.add('open');
    oldVolunt.classList.add('open');
    voluntSection.classList.add('open');
    community.classList.remove('open');
    communitySection.classList.remove('open');
}

function communitySelectSection(){
    volunt.classList.remove('open');
    oldVolunt.classList.remove('open');
    voluntSection.classList.remove('open');
    community.classList.add('open');
    communitySection.classList.add('open');
}

function togglePastWorkMenu(){
    if(!togglePastWork){
        dropDownSymbol.classList.add('open');
        pastWork.classList.add('show');
        togglePastWork = true;
    }else{
        dropDownSymbol.classList.remove('open');  
        pastWork.classList.remove('show');  
        togglePastWork = false;      
    }
}