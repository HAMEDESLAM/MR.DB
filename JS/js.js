let skills = document.getElementsByClassName("skills")[0]
let skillsContainer = document.getElementsByClassName("skills-container")[0]
let button = document.getElementsByClassName("to-top")[0]

window.onscroll = function (e){
    if (window.scrollY >= skills.offsetTop - 250) {
        Array.from(skillsContainer.children).forEach(element => {
            let attr = parseInt(element.children[1].getAttribute("skill-progress"))
            element.children[1].lastElementChild.style.width = `${attr}%`
        });
    }
    if(window.scrollY >= (window.outerHeight - 400) / 2){
        button.style.display = "block";
    }
    else{
        button.style.display = "none";
    }
}
button.onclick = function(e){
    window.scrollTo({top:0,behavior:"smooth"})
}



// .onclick = function (e){
//     if(e.target.className === "skill-progress"){

//     }
// }
