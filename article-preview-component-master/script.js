let footer = document.getElementById('footer--active');
let share = document.getElementById('share');


share.addEventListener('click', (e) => {

    switch(e.target.nodeName) {
            case 'SPAN':
            case 'DIV':
            footer.classList.toggle("toogle--active");
            break;
    }
    });




