// toggle page
document.getElementById("discover").addEventListener("click", function(event){
    event.preventDefault();
    window.location.href="./blog.html"
})
// theme changer
let randomNum = function() {
return Math.floor(Math.random() * 256);
};
let changecolor = function(){
    let randomColor = `rgba(${randomNum()}, ${randomNum()}, ${randomNum()}, ${0.3})`;
    document.body.style.backgroundColor = randomColor;
};
document.getElementById("theme").addEventListener("click", changecolor);

// Current Date
const currentDate = new Date();
const options = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' };
const formattedDate = currentDate.toLocaleDateString('en-US', options);
const [weekday, month, day, year] = formattedDate.split(' ');
document.querySelector('.date-day').textContent = weekday;
document.querySelector('.date-full').textContent = `${month} ${day} ${year}`;

