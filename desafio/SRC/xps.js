document.getElementById('submit').addEventListener('click',function mostraDados(){

let nickName = document.getElementById('nick').value;
let XPS = document.getElementById('options').value;
alert("Nome: " + nickName + "nivel de XP: " + XPS);


document.getElementById('nick').value = '';
document.getElementById('options').value = '';
})