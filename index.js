function add() { 
var number = Number(document.getElementById('number').innerHTML);
var sol = number+1;
document.getElementById('number').innerHTML = sol;
if (sol > 0) {
document.getElementById('number').style.color = 'green';
 } else if (sol == 0) {
document.getElementById('number').style.color = 'chocolate';
 } else if (sol < 0) {
document.getElementById('number').style.color = 'red';
 }
}
function minus() { 
var number = Number(document.getElementById('number').innerHTML);
var sol = number-1;
document.getElementById('number').innerHTML = sol;
if (sol > 0) {
document.getElementById('number').style.color = 'green';
 } else if (sol == 0) {
document.getElementById('number').style.color = 'chocolate';
 } else if (sol < 0) {
document.getElementById('number').style.color = 'red';
 }
}