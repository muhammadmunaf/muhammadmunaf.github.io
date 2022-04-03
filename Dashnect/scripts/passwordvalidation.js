function passwordValidation() // removed 'event' from parameters
{
    var pass = document.getElementById('password').value;

    lenghtCheck(pass);
    upperCaseCheck(pass);
    lowerCaseCheck(pass);
    digitsCheck(pass);
    specialCharCheck(pass);

    if(specialCharCheck(pass) && digitsCheck(pass) && lowerCaseCheck(pass) && upperCaseCheck(pass) && lenghtCheck(pass))
    {
        document.getElementById("submit").disabled = false;
    }
    else
    {
        document.getElementById("submit").disabled = true;
    }
}

function specialCharCheck(pass)
{
    var format = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

    if(format.test(pass)){
        document.getElementById('special').style.color = 'green';
        return 1;
    }
    else 
    {
        document.getElementById('special').style.color = 'red';
        return 0;
    }
}

function digitsCheck(pass)
{
    for(let i=0;i<pass.length;i++)
    if(Number(pass.charAt(i)))
    {
        document.getElementById('digit').style.color = 'green';
        return 1;
        break;
    }
    else 
    {
        document.getElementById('digit').style.color = 'red';        
    }
    return 0;
}

function lenghtCheck(pass)
{
    if(pass.length >= 8 )
    {
        document.getElementById('min-8').style.color = 'green';
        return 1;
    }
    else
    {
        document.getElementById('min-8').style.color = 'red';
        return 0;
    }
}

function upperCaseCheck(pass)
{
    for(let i=0;i<pass.length;i++)
    if(pass.charAt(i) == pass.charAt(i).toUpperCase() && !Number(pass.charAt(i)))
    {
        document.getElementById('uppercase').style.color = 'green';
        return 1;
        break;
    }
    else 
    {
        document.getElementById('uppercase').style.color = 'red';        
    }
    return 0;
}

function lowerCaseCheck(pass)
{
    for(let i=0;i<pass.length;i++)
    if(pass.charAt(i) == pass.charAt(i).toLowerCase() && !Number(pass.charAt(i)))
    {
        document.getElementById('lowercase').style.color = 'green';
        return 1;
        break;
    }
    else 
    {
        document.getElementById('lowercase').style.color = 'red';             
    }
    return 0;
}