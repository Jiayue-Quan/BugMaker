
const dragElem = (elem) => {
    var elemX = 0, elemY = 0, startX = 0, startY = 0;

    const closeDragElement = () => {
        document.onmouseup = null;
        document.onmousemove = null;
    }

    const elementDrag = (e) => {
        e.preventDefault();
        elemX = startX - e.clientX;
        elemY = startY - e.clientY;
        startX = e.clientX;
        startY = e.clientY;

        elem.style.top = (elem.offsetTop - elemY) + "px";
        
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
    console.log(elementsToMove[i]);
    dragElem(elementsToMove[i]);
}


