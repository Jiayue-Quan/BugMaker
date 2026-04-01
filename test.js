// legacy drag-and-drop code
const dragElem = (elem) => {
    const canvas = document.getElementById("canvas");
    var elemX = 0, elemY = 0, startX = 0, startY = 0;
    
    

    const closeDragElement = () => {
        document.onmouseup = null;
        document.onmousemove = null;
    }

    const elementDrag = (e) => {
        e.preventDefault();
        var canvasTop = canvas.offsetTop
        var canvasBottom = canvasTop + canvas.clientHeight

        console.log(canvas.clientHeight)

        var canvasWidth = canvas.clientWidth;
        var screenWidth = window.screen.width;

        elemX = startX - e.clientX;
        elemY = startY - e.clientY;
        startX = e.clientX;
        startY = e.clientY;

        elem.style.top = Math.max(Math.min((elem.offsetTop - elemY), canvasBottom), canvasTop) + "px";
        elem.style.left = (elem.offsetLeft - elemX) + "px";
    }

    const dragMouseDown = (e) => {
        e.preventDefault();
        startX = e.clientX;
        startY = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    elem.onmousedown = dragMouseDown;
}
const elementsToMove = document.getElementsByClassName("toMove");

for (let i = 0; i < elementsToMove.length; i++) {
    dragElem(elementsToMove[i]);
}


