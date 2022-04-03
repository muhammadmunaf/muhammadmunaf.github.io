
let popupElement = null;

let color = null;

function checkInput()
{
    var task_description = document.getElementById("task-description").value;
    var task_date = document.getElementById("task-date").value;

    var taskbox = document.createElement('DIV');

    taskbox.className = 'task-box';

    taskbox.innerHTML = '<div class="task-box"><div class="upper"><p>' + task_date + '</p><img src="icons/More.svg" alt="" style="transform: rotate(90deg);"></div><div class="middle"><p>' + task_description + '</p></div><div class="lower"><div class="comments"><img src="icons/Comments.svg" alt=""><p>4</p></div><div class="attachments"><img src="icons/Paperclip.svg" alt=""><p>3</p></div><div class="task-members"><img src="Images/Avatar-1.png" alt="" style="margin-right: -10px;"><img src="Images/Avatar-2.png" alt="" style="margin-right: -10px;"><a href=""><img src="icons/Plus.svg" alt="" id="task-member-add"></a></div></div></div>'

    if(color == "todo")
        document.getElementById('to-do').appendChild(taskbox);
    else if(color == "inprogress")
        document.getElementById('in-progress').appendChild(taskbox);  
    else if(color == "review")
        document.getElementById('review').appendChild(taskbox);    
    else if(color == "done")
        document.getElementById('done').appendChild(taskbox);   
        
    var task_description = null;
    document.getElementById("task-description").value = "";
    var task_date = null;
    document.getElementById("task-date").value = "";
    closePopup();
}


function addColor(e)
{
    if(e.id == "taskType-toDo")
    {
        color = "todo"; // blue

    }
    else if(e.id == "taskType-inProgress")
    {
        color = "inprogress"; // red

    }
    else if(e.id == "taskType-review")
    {
        color = "review"; // green

    }
    else if(e.id == "taskType-done")
    {
        color = "done"; //purple

    }
}


function showPopup(element)
{
    document.getElementById('popup-addtask').style.display = 'block';
    popupElement = element;
}

function closePopup()
{
    document.getElementById('popup-addtask').style.display = 'none';
}