function progressOutput()
{
    let temp = document.getElementById('progress').value;
    document.getElementById('progress-output').innerText = temp + "%";
}

let popupElement = null;
const startMargin = 22;
let color = null;
let bcolor = null;

function checkInput()
{
    /*  0: div.task-on-timeline-done
        1: p.percent
        2: img  */

    let start = document.getElementById('start-day').value;
    let end = document.getElementById('end-day').value;
    let progress_percent = document.getElementById('progress').value;
    let difference= 0;

    if(Number(start) && Number(end) && Number(start)<Number(end) && color !=null)
    {
        document.getElementById('start-day').style.borderBottomColor = "#FBFBFB";
        document.getElementById('end-day').style.borderBottomColor = "#FBFBFB";
        document.getElementById('task-type').style.color = "black";
        //means both inputs are numbers
        difference =  Number(end) - Number(start);

        //console.log(difference);
        popupElement.style.width = (oneBlock*difference) + "px";
        //console.log("Width:", (oneBlock*difference) + "px")
        popupElement.style.marginLeft = (startMargin + oneBlock*start) + "px";
        //console.log("Left Margin:", (startMargin*start) + "px")
        popupElement.children[0].style.width = progress_percent + "%";
        
        popupElement.children[1].innerText = progress_percent + "%";

        popupElement.style.backgroundColor = bcolor;
        popupElement.children[0].style.backgroundColor = color;
        bcolor = null;
        color = null;

        closePopup();
    }
    else 
    {
        document.getElementById('start-day').style.borderBottomColor = "red";
        document.getElementById('end-day').style.borderBottomColor = "red";
        document.getElementById('task-type').style.color = "red";
    }    
}

function addColor(e)
{
    if(e.id == "taskType-toDo")
    {
        color = "#1ABCFE"; // blue
        bcolor = "#143441";
    }
    else if(e.id == "taskType-inProgress")
    {
        color = "#F24E1E"; // red
        bcolor = "#401E14";
    }
    else if(e.id == "taskType-review")
    {
        color = "#0ACF83"; // green
        bcolor = "#113829";
    }
    else if(e.id == "taskType-done")
    {
        color = "#A259FF"; //purple
        bcolor = "#302041";
    }
}

function showPopup(element)
{
    document.getElementById('popup-timetask').style.display = 'block';
    popupElement = element;

    document.getElementById('task-title').getElementsByTagName('h4')[0].innerText = popupElement.children[0].getElementsByTagName('p')[0].innerText;
}

function closePopup()
{
    document.getElementById('popup-timetask').style.display = 'none';
}

// date and month setup

let dates = {};