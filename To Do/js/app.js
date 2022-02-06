function myFunction(){
    var inputVal = document.getElementById('text').value;
    document.getElementById('list').innerHTML = inputVal;
    document.getElementById('text').value = 'Type your task here!';
}

function removeFunctionOne(){
    document.getElementById('list').style.display = 'none';
    //document.getElementById('text').value = "";
    //if(document.getElementById('list').style.display === 'none'){
    //    document.getElementById('list').style.display = 'block';
    //}else{
    //    document.getElementById('list').style.display = 'none';
    //}
}
