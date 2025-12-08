


var inner = document.getElementsByClassName('inner')[0].style

var offset = 0;
var amount = 5;

function refresh(offset) {
    inner.left = `${offset}px`

    console.log(offset)
    if (Math.abs(offset) < 6) {
        setTimeout(() => {
            console.log(offset)
            if (Math.abs(offset) < 6) {
                document.querySelector('h5').innerHTML = 'won'
            }
        }, 1000);
    }
}

refresh()

document.addEventListener('keydown', (e) => {
    if (e.key == 'a') {
        offset -= amount
    }
    
    if (e.key == 'd') {
        offset += amount
    }
    offset = Math.round(offset)
    console.log(offset)
    refresh(offset)
});

setTimeout(() => {
   (function a(){
        offset = (Math.random()- (.5-(offset/100)) )*100
        refresh(offset)
        setTimeout(() => {
            a()
        }, 2000);
    })(); 
}, 0);