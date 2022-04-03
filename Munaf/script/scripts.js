var rootVars = document.querySelector(':root');
//rootVars.style.setProperty('--bgcolor', '#EFEFEF'); -> light mode initially
// dark mode initially, code is below
rootVars.style.setProperty('--bgcolor', '#181818');
rootVars.style.setProperty('--blackTextColor', '#EFEFEF');
document.getElementById("darkBtnCircle").style.marginLeft = "0";
document.getElementById("darkBtnCircle").style.marginRight = "auto";
document.getElementById("footerSocials").style.filter = "invert(100%)";
document.getElementById("viewMore").style.filter = "invert(100%)";
document.getElementById("darkMode").children[1].innerText = "Light";

function DarkLightMode()
{
    if(rootVars.style.getPropertyValue('--bgcolor') == "#EFEFEF")
    {
        rootVars.style.setProperty('--bgcolor', '#181818');
        rootVars.style.setProperty('--blackTextColor', '#EFEFEF');
        document.getElementById("darkBtnCircle").style.marginLeft = "0";
        document.getElementById("darkBtnCircle").style.marginRight = "auto";
        document.getElementById("footerSocials").style.filter = "invert(100%)";
        document.getElementById("viewMore").style.filter = "invert(100%)";
        document.getElementById("darkMode").children[1].innerText = "Light";
        
    }
    else
    {
        rootVars.style.setProperty('--bgcolor', '#EFEFEF');
        rootVars.style.setProperty('--blackTextColor', '#181818');
        document.getElementById("darkBtnCircle").style.marginRight = "0";
        document.getElementById("darkBtnCircle").style.marginLeft = "auto";
        document.getElementById("footerSocials").style.filter = "invert(0%)";
        document.getElementById("viewMore").style.filter = "invert(0%)";
        document.getElementById("darkMode").children[1].innerText = "Dark";
    }
    
}

function changeWorkType(e)
{
    //console.log(e.className);
    document.getElementById("workType").children[0].className = "web";
    document.getElementById("workType").children[1].className = "mobile";

    let initial = e.innerHTML;

    /* if(initial.includes("Web") && document.getElementById("webWork").style.getPropertyValue('display') != "none")
    {
        //return;
    }

    if(initial.includes("Mobile") && document.getElementById("mobileWork").style.getPropertyValue('display') != "none")
    {
        //return;
    }*/

    if(e.className == "mobile")
    {
        document.getElementById("mobileWork").style.display = "block";
        document.getElementById("webWork").style.display = "none";
    }
    else if (e.className == "web")
    {
        document.getElementById("webWork").style.display = "block";
        document.getElementById("mobileWork").style.display = "none";
    }

    e.className = e.className + " active";

    document.getElementById("work").style.animation = "worktypeswitch 0.4s";
    document.getElementById("webWork").style.animation = "worktypeswitchweb 0.4s";
    document.getElementById("mobileWork").style.animation = "worktypeswitchmobile 0.4s";
}