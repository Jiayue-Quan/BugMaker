const slideElement = (elem, horizontal) => {
    const canvas = document.getElementById("canvas");
    elem.style.left = (canvas.clientWidth/2) - (elem.clientWidth/2) + "px"
    const horizontalSliderListener = (event) => {
        console.log(event.target.value)

        var canvasWidth = canvas.clientWidth
        var canvasOffset = (event.target.value * 0.01 * canvasWidth)
        elem.style.left =  canvasOffset - (elem.clientWidth/2) + "px";


    }
    if (horizontal) {
        const slider = document.getElementById("horizontalSlider")
        slider.addEventListener('input', horizontalSliderListener)
    }
    else {

    }

}

const elementsToMove = document.getElementsByClassName("toMove");

for (let i = 0; i < elementsToMove.length; i++) {
    slideElement(elementsToMove[i], true);
}