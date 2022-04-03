let noOfItems = 0;

document.getElementById("cartDropDown").children[2].style.display = "none";
document.getElementById("cartDropDown").style.display = "none";
let cartOpen = 0;

let imageIndex = 0;

function plusItem()
{
    noOfItems++;
    updateNoOfItems()
}
function minusItem()
{
    if(noOfItems!=0)
        noOfItems--;
    updateNoOfItems()
}

function updateNoOfItems()
{
    document.getElementById("noOfItems").innerText = noOfItems;
}

function showPopUp()
{
    document.getElementById("imagesPopUp").style.display = "block";
}

function closePopUp()
{
    document.getElementById("imagesPopUp").style.display = "none";
}

function showCart()
{
    if(cartOpen == 0)
    {
        document.getElementById("cartDropDown").style.display = "flex";
        cartOpen = 1;
    }
    else
    {
        document.getElementById("cartDropDown").style.display = "none";
        cartOpen = 0;
    }
    
}

function addItemsToCart()
{
    if(noOfItems!=0)
    {
        let price = 125;
        // setting number of items and price etc
        document.getElementsByClassName("cartProductPrice")[0].innerHTML = "$125.00 x " + noOfItems +" <b>$" + eval(noOfItems * price) + ".00</b>";

        console.log(document.getElementById("cartDropDown").children);
        document.getElementById("cartDropDown").children[1].style.display = "none";
        document.getElementById("cartDropDown").children[2].style.display = "flex";
    }
}

function removeCartItem(e)
{
    e = e.parentElement;
    document.getElementById("cartDropDown").children[1].style.display = "flex";
    document.getElementById("cartDropDown").children[2].style.display = "none";
}

const imagesArray = ["images/image-product-1.jpg", "images/image-product-2.jpg", "images/image-product-3.jpg", "images/image-product-4.jpg"]

function changeImagesPopUp(e)
{
    let mainSource = document.getElementById("mainPopUpImage").getAttribute("src");// saves initial image
    //console.log(mainSource);

    let subImages = document.getElementById("subImagesPopUp");

    if(e.id == "prevImagePopUp")
    {
        if(imageIndex!=0)
        {
            document.getElementById("mainPopUpImage").setAttribute("src", imagesArray[--imageIndex]);
        }
    }
    else if(e.id == "nextImagePopUp")
    {
        if(imageIndex!=3)
        {
            document.getElementById("mainPopUpImage").setAttribute("src", imagesArray[++imageIndex]);
        }
    }
}