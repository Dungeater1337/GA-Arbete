let userArray = [];
let indexMain;

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
    userArray = response.json();
    return userArray;
}

async function GetUsers(){
    userArray = await GetUsersFetch();
    console.log(userArray);

    userArray.forEach(element=>{
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