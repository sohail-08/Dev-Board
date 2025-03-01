document.getElementById("discover").addEventListener("click", function(event){
    event.preventDefault();
    window.location.href="./blog.html"
})

let randomNum = function() {
return Math.floor(Math.random() * 256);
};
let changecolor = function(){
    let randomColor = `rgba(${randomNum()}, ${randomNum()}, ${randomNum()}, ${0.3})`;
    document.body.style.backgroundColor = randomColor;
};
document.getElementById("theme").addEventListener("click", changecolor);

