let skills = document.getElementsByClassName("skills")[0];
let statsContainer = document.getElementsByClassName("stats")[0];
let stats = document.getElementsByClassName("num")
console.log(stats)
let skillsContainer = document.getElementsByClassName("skills-container")[0];
let button = document.getElementsByClassName("to-top")[0];

window.onscroll = function (e){
    let handler1;
    let handler2;
    if (window.scrollY >= skills.offsetTop - 250) {
        Array.from(skillsContainer.children).forEach(element => {
            let attr = parseInt(element.children[1].getAttribute("skill-progress"))
            element.children[1].lastElementChild.style.width = `${attr}%`
        });
    }
    else{
        Array.from(skillsContainer.children).forEach(element => {
            element.children[1].lastElementChild.style.width = `0%`
        });
    }
    if(window.scrollY >= statsContainer.offsetTop - 250){
        let handler1 = setInterval(function(){
            stats[0].getAttribute("data-set") != stats[0].innerText ? stats[0].innerText++ : stats[0].innerText = stats[0].innerText;
            stats[1].getAttribute("data-set") != stats[1].innerText ? stats[1].innerText++ : stats[1].innerText = stats[1].innerText;
            stats[2].getAttribute("data-set") != stats[2].innerText ? stats[2].innerText++ : stats[2].innerText = stats[2].innerText;
            stats[3].getAttribute("data-set") != stats[3].innerText ? stats[3].innerText++ : stats[3].innerText = stats[3].innerText;
            if(stats[0].getAttribute("data-set") == stats[0].innerText && stats[1].getAttribute("data-set") == stats[1].innerText && stats[2].getAttribute("data-set") == stats[2].innerText && stats[3].getAttribute("data-set") == stats[3].innerText ){
                clearInterval(handler1)
            }
        },50)
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
