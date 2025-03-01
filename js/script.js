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
document.querySelector('.date-day').innerText = weekday;
document.querySelector('.date-full').innerText = `${month} ${day} ${year}`;

// completed button
const activityLog = document.getElementById("activity-log");
const button = document.getElementsByClassName("completed-btn");
const assignedTasks = document.getElementById("assigned-tasks");
let taskCount = parseInt(assignedTasks.innerText);
const completedTasks = document.getElementById("completed-tasks");
let taskNumber = parseInt(completedTasks.innerText);

for(let i=0; i<button.length; i++){
    button[i].addEventListener("click",function(event){
        event.preventDefault();
        alert("Board Updated Successfully");

        taskCount = taskCount - 1;
        if(taskCount === 0){
            alert("Congrats!!! You have completed all the current task");
        }
        assignedTasks.innerText = taskCount;

        taskNumber =taskNumber + 1;
        completedTasks.innerText = taskNumber;

        button[i].disabled = true;
        button[i].style.opacity = 0.2;

        taskTitle = button[i].parentNode.parentNode.parentNode.childNodes[1].childNodes[3].innerText;
        const time = new Date().toLocaleTimeString();
        const message = document.createElement('p');
        message.innerText = `You Have Completed The Task ${taskTitle} at ${time}`;
        message.style.backgroundColor = "#F4F7FF";
        message.style.padding = "12px";
        message.style.borderRadius = "8px";
        activityLog.appendChild(message);
     
    })   
}

// clear history button
document.getElementById("clear-btn").addEventListener("click", function() {
    activityLog.innerHTML = ""; 
});



