function myFunction1(){
    var inputVal = document.getElementById('text-1').value;
    document.getElementById('list-1').innerHTML = inputVal;
    document.getElementById('text-1').value = 'Type your task here!';
}
function myFunction2(){
    var inputVal = document.getElementById('text-2').value;
    document.getElementById('list-2').innerHTML = inputVal;
    document.getElementById('text-2').value = 'Type your task here!';
}
function myFunction3(){
    var inputVal = document.getElementById('text-3').value;
    document.getElementById('list-3').innerHTML = inputVal;
    document.getElementById('text-3').value = 'Type your task here!';
}
function myFunction4(){
    var inputVal = document.getElementById('text-4').value;
    document.getElementById('list-4').innerHTML = inputVal;
    document.getElementById('text-4').value = 'Type your task here!';
}
function myFunction5(){
    var inputVal = document.getElementById('text-5').value;
    document.getElementById('list-5').innerHTML = inputVal;
    document.getElementById('text-5').value = 'Type your task here!';
}

function removeFunctionOne(){
    document.getElementById('list-1').style.display = 'none';
    //document.getElementById('text').value = "";
    //if(document.getElementById('list').style.display === 'none'){
    //    document.getElementById('list').style.display = 'block';
    //}else{
    //    document.getElementById('list').style.display = 'none';
    //}
}

function removeFunctionOne(){
    //document.getElementById('list-1').style.display = 'none';
    document.getElementById('list-1').innerHTML = 'Blank';
}
function removeFunctionTwo(){
    //document.getElementById('list-2').style.display = 'none';
    document.getElementById('list-2').innerHTML = 'Blank';
}
function removeFunctionThree(){
    //document.getElementById('list-3').style.display = 'none';
    document.getElementById('list-3').innerHTML = 'Blank';
}
function removeFunctionFour(){
    //document.getElementById('list-4').style.display = 'none';
    document.getElementById('list-4').innerHTML = 'Blank';
}
function removeFunctionFive(){
    //document.getElementById('list-5').style.display = 'none';
    document.getElementById('list-5').innerHTML = 'Blank';
}
