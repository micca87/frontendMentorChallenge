    let share = document.getElementById('share');
    let hover = document.getElementById('hover');
    share.addEventListener('click', (e) => {
        console.log(e.target.nodeName)

        switch(e.target.nodeName) {
            case 'SPAN':
            case 'DIV':
                hover.classList.toggle("hover-toogle");
                break;
        }
        },true);



