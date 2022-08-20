let item = document.getElementById('mail');
let touch = document.getElementById('trigger');


function show() {
    if (item.style.display === 'none') {
        item.style.display = 'block'
    } else {
        item.style.display = 'none'
    }
}

touch.addEventListener('click', show);


