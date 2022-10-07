console.log('in client.js');
$(document).ready(onReady);

let date = new Date();
function onReady(){

    //render current date info
    displayDate();

    //register events listeners
    $('#createBtn').on('click',createToDos);

    //grab DB data
    getToDos();


}

//displayDate
//display the current day month and year
function displayDate(){
    $('h1').text(date.getDay());
    $('h6').text(date.getFullYear());

    //https://stackoverflow.com/questions/1643320/get-month-name-from-date
    //post title is :    It is now possible to do this with the ECMAScript Internationalization API:
    $('p').text(date.toLocaleString('default',{month: 'short'}));
    
}

//getToDoData
//go to the DB and GET the current STATE
function getToDos(){
    console.log('in function: ',arguments.callee.name);
}

//createToDo
//go to the DB and POST the new ToDO
function createToDos(){
    console.log('in function: ',arguments.callee.name);
}