let userArray = []

function init(){
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
}