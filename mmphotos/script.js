var photosDivs = document.querySelectorAll(".photo");
var i;

for (i = 0; i < photosDivs.length; i++) {
    photosDivs[i].addEventListener("mouseenter", function (e) {
        var temp = document.querySelector(".photo .imgHover");
        temp.style.display = "flex";

        // do something with the div
        console.log(textDiv);
    });
}

for (i = 0; i < photosDivs.length; i++) {
    photosDivs[i].addEventListener("mouseleave", function (e) {
        var temp = document.querySelector(".photo .imgHover");
        temp.style.display = "none";

        // do something with the div
        console.log(textDiv);
    });
}

var photos = [
    {
        id: 1,
        src: "1.jpg",
    },
    {
        id: 2,
        src: "2.jpg",
    },
    {
        id: 3,
        src: "3.jpg",
    },
    {
        id: 4,
        src: "4.jpg",
    },
    {
        id: 1,
        src: "1.jpg",
    },
    {
        id: 2,
        src: "2.jpg",
    },
    {
        id: 3,
        src: "3.jpg",
    },
    {
        id: 4,
        src: "4.jpg",
    },
];

function renderPhotos() {
    let allPhotos = photos.map((element) => {
        return `<div class="photo"> <img src="Images/${element.src}" /> <div class="imgHover"><a href="#">View Image</a></div> </div>`;
    });

    //document.getElementById("photos").append(allPhotos);
    document.getElementById("photos").innerHTML += allPhotos;
}

//renderPhotos();
