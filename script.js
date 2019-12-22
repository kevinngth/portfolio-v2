console.log("connected to script.js")

let cursor = document.querySelector('#cursor')
let blink = () => {
    if (cursor.style.visibility == 'hidden') {
        cursor.style.visibility = ""
    } else {
        cursor.style.visibility = 'hidden'
    }
}
setInterval(blink,600)

const TEXT = " ~/Kevin Ng/portfolio";
const getTypeSpeed = () => {
    return Math.ceil(Math.random()*50) * 8;
};
let i = 0;
let targetElement = document.querySelector("#intro");
let totalTime = 0;
const Typewriter = () => {
    targetElement.innerText += TEXT[i++]
    if (i < TEXT.length) {
        setTimeout(Typewriter,getTypeSpeed())
    }
}
Typewriter()
  
let section = document.querySelectorAll("section");
let sections = {};
let sectionKey;

Array.prototype.forEach.call(section, function(e) {
    sections[e.id] = e.offsetTop;
});

let main = document.getElementsByTagName("main")[0];
main.onscroll = function() {
    let scrollPosition = main.scrollTop;
    for (sectionKey in sections) {
        if (sections[sectionKey] <= scrollPosition) {
            document.querySelector('.active').setAttribute('class', ' ');
            document.querySelector('a[href*=' + sectionKey + ']').setAttribute('class', 'active');
        }
    }
};

let skills = ["HTML 5","CSS 3","Bootstrap 4","JavaScript","React.js","Node.js","Sass","NPM","Ruby","PostgreSQL","Git"]
document.querySelectorAll(".icons").forEach((element,i) => {
    let parent = document.querySelector(".skills")
    let text = document.createElement('h1')
    text.innerHTML = skills[i]
    element.addEventListener("mouseover", function( event ) {
        parent.appendChild(text)
    })
    element.addEventListener("mouseout", function( event ) {    
        parent.removeChild(text)
    })
})
