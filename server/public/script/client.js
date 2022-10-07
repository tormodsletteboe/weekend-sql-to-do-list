console.log('in client.js');
$(document).ready(onReady);

let date = new Date();
function onReady(){

    //render current date info
    displayDate();

    //register events listeners

    //grab DB data


}

//displayDate
//display the current day month and year
function displayDate(){
    $('h1').text(date.getDay());
    $('p').text(date.toLocaleString('default',{month: 'short'}));
    $('h6').text(date.getFullYear());
}