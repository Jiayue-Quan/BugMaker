const docBody = document.querySelector("body");
const bodySections = ["head", "middle", "bottom"];

const spriteList = ["images/apple.png", "images/microsoft.png", "images/meta.png"]
const listLength = spriteList.length;

bodySections.forEach(section => {
    const image = document.querySelector(`#${section} img`);
    const backButton = document.querySelector(`#${section} .back`);
    backButton.addEventListener("click", () => {
        image.src = changeSprite(filterSrc(image.src), false);
    })
    const nextButton = document.querySelector(`#${section} .next`);
    nextButton.addEventListener("click", () => {
        image.src = changeSprite(filterSrc(image.src), true);
    })
})

const changeSprite = (currSrc, positive) => {
    const currID = spriteList.indexOf(currSrc);
    if (positive) {
        return spriteList[(currID + 1) % listLength];
    }
    return spriteList[(currID - 1 + listLength) % listLength];
    
    
}
const filterSrc = (src) => {
    return src.split("/").slice(-2).join("/");
}


