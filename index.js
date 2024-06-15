let count = 0;
let countEL = document.getElementById('count');

function increment() {
    count += 1;
    document.getElementById('count').innerHTML = count;
}

let saveEL = document.getElementById("save-el")
function save() {

    let countch = count + '-';
    saveEL.innerText+= countch;
    count =0;
    countEL.textContent=0;
}
