/*
let userArray = [];
let indexMain;


//list med länkar till review img...
const imageLinks = [
    "https://m.media-amazon.com/images/I/6110RSDn3PL.jpg",
    "https://i.ebayimg.com/images/g/SeAAAOSwcqhfjFwG/s-l1600.jpg",
    "https://static.displate.com/857x1200/displate/2023-06-12/6e217abc7f5bb5d0dc56e68752193a11_5c51574f5f2f216f9ef25a0d08fa6400.jpg",
    "https://i0.wp.com/www.gamezawy.com/wp-content/uploads/2023/09/Cyber-Phantom-DLC.jpg"
];

function init(){
    indexMain = document.getElementById("IndexMain");
    console.log(indexMain);
    GetUsers();
}

window.onload = init();

async function GetUsersFetch(){ 

    let path = "https://localhost:7198/Review";
    let response = await fetch(path, {
        method: "GET",
        mode: "cors",
        headers:{
          "Content-Type":"application/json",
        }
    });
    console.log(response);
    userArray = await response.json();
    return userArray;
}

async function GetUsers(){
    userArray = await GetUsersFetch();
    console.log(userArray);

    userArray.forEach(element=>{
        element.image = imageLinks[index % imageLinks.lenght];
       createSection(element);
    })
}

function createSection(el){
    let section = document.createElement("section");

    let figure = createFigure(el);
    section.appendChild(figure);
    console.log(section);
    indexMain.appendChild(section);
}

function createFigure(el){
    let figElem = document.createElement("figure");

    let img = createImage(el);
    let div = createDiv(el);

    figElem.appendChild(img);
    figElem.appendChild(div);
    console.log(figElem);

    return figElem;
}

function createImage(el){
    let imgElem = document.createElement("img");
    imgElem.setAttribute("src", el.image);
    imgElem.setAttribute("alt", el.title);
    return imgElem;
}

function createDiv(el){
    let div = document.createElement("div");
    div.setAttribute("class", "text-overlay");

    let header = document.createElement("h3");
    header.innerHTML = el.title;

    div.appendChild(header);

    return div;
}