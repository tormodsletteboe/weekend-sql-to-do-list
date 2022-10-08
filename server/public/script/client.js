
console.log('in client.js');
$(document).ready(onReady);

//global variables

//onReady
//do all the setup, display current date, register event listeners, grab current db data
function onReady(){
    console.log('ran function: ',arguments.callee.name);
    //render current date info
    displayDate();

    //register events listeners
    $('#createBtn').on('click',createToDos);
    $('#viewToDo').on('click','.checkboxToDo',onCheckBoxChange)
    $('#viewToDo').on('click','.deleteBtn',onDeleteBtn)

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

//GET
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

//POST
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
        <tr id="tr${todo.id}" data-checked="${todo.completed}">
            <td>${todo.task_name}</td>
            <td>${todo.description}</td>
            <td>${todo.date_created}</td>
            <td class="cb">
               ${getCheckboxWithOrWithOutCheckMark(todo.completed,todo.id)}
            </td>
            <td class="cb">
                <button class="deleteBtn" data-id="${todo.id}">X</button>
            </td>
        </tr>
    `);
    }
    //look through recently created tr and see if they are checked, if they are not checked ie not completed, add a fire effect.
    for(let todo of todosFromTable){
        if($('#tr'+todo.id).data('checked')){
           $('#tr'+todo.id).addClass("completed");
        }
        else{
            //not completed add a fire effect
            $('#tr'+todo.id).addClass("font-effect-fire");
        }
        
    }
    

}
//getCheckboxWithOrWithOutCheckMark
//returns a string with a checkbox checked or a checkbox not checked
function getCheckboxWithOrWithOutCheckMark(checked,id)
{
    if(checked){
        
        return `<input class = "checkboxToDo" type ="checkbox" data-id=${id} checked>`;
    }
    return `<input class = "checkboxToDo" type ="checkbox" data-id=${id}>`;
}

//PUT
//changeTheCheckbox
//checkbox has changed value update the db
function onCheckBoxChange(){
    console.log('this raaaaaa');
    $.ajax({
        url: `todo/${$(this).data('id')}`,
        method:'PUT'
    })
    .then((response)=>{
        getToDos();
    })
    .catch((err)=>{
        console.log('in ajax PUT catch',err);
    })

}

//DELETE
//onDeleteBtn
//remove the row of this task from the table as well as from the DB
function onDeleteBtn(){
    console.log('ran function: ',arguments.callee.name);
    let idOfTodo = $(this).data('id');
    console.log('delete: ',idOfTodo);
    $.ajax({
        url: '/todo/'+idOfTodo,
        method: 'DELETE'
    })
    .then((response)=>{
        getToDos();
    })
    .catch((err)=>{
        console.log('in ajax DELETE catch',err);
    })
}