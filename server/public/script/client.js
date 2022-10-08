

console.log('in client.js');
$(document).ready(onReady);

//global variables


function onReady(){
    console.log('ran function: ',arguments.callee.name);
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
    console.log('ran function: ',arguments.callee.name);

    let date = new Date();
    $('h1').text(date.getDate());
    $('h6').text(date.getFullYear());
    //https://stackoverflow.com/questions/1643320/get-month-name-from-date
    //post title is :    It is now possible to do this with the ECMAScript Internationalization API:
    $('p').text(date.toLocaleString('default',{month: 'short'}));
    
}

//getToDoData
//go to the DB and GET the current STATE
function getToDos(){
    console.log('ran function: ',arguments.callee.name);
    $.ajax({
        url: '/todo',
        method: 'GET'
    })
    .then((respone)=>{
        renderToDosToTable(respone);
    })
    .catch((err)=>{
        console.log('in client GET catch',err);
    })

}

//createToDo
//go to the DB and POST the new ToDO
function createToDos(){
    console.log('ran function: ',arguments.callee.name);
    let taskIn = $('#taskNameInput').val();
    let descr = $('#descriptionInput').val();
    let newToDo = {
        task: taskIn,
        description: descr,
    }
    $.ajax({
        url: '/todo',
        method: 'POST',
        data: newToDo
    })
    .then((response)=>{
        getToDos();
    })
    .catch((err)=>{
        console.log('in ajax POST /todo catch',err);
    })
}


//renderToDosToTable
//called in the GET to render response from server->DB
function renderToDosToTable(todosFromTable){
    console.log('ran function: ',arguments.callee.name);

    //empty before to make sure no duplicates
    $('#viewToDo').empty();
    //go through all todos
    for(let todo of todosFromTable){
        $('#viewToDo').append(`
        <tr>
            <td>${todo.task_name}</td>
            <td>${todo.description}</td>
            <td>${todo.date_created}</td>
            <td class="cb">
               <input type="checkbox">
            </td>
            <td>
                <button>X</button>
            </td>
        </tr>
    `);
    }
    

}