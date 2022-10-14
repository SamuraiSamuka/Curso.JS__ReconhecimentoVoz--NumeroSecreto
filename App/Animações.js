const corpo = document.querySelector('body')

corpo.onmousemove = 
function (evento) {
    
}

function fundoMouseBranco () {
    corpo.removeChild(corpo.lastChild)
    const box = document.createElement('div')
    box.style.position = "absolute";
    box.style.top = (evento.clientY - 500) + "px";
    box.style.left = (evento.clientX - 500) + "px";
    box.style.width = "1000px";
    box.style.height = "1000px";
    box.style.background = "radial-gradient(closest-side at center, #fff2, #0000)";
    corpo.appendChild(box)
}