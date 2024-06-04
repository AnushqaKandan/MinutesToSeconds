
function calculate (){
let min = parseInt(document.getElementById('minutes').value);

let seconds = (min * 60);

document.getElementById('seconds').innerText = seconds;
}

window.onload = calculate;
