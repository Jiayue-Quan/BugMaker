const docBody = document.querySelector("body");
const bodySections = ["head", "middle", "bottom"];

let spriteList = ["images/apple.png", "images/microsoft.png", "images/meta.png"]

const setSectionSelectors = () => {
bodySections.forEach(section => {
    const image = document.querySelector(`#${section} img`);
    image.src = sessionStorage.getItem(section) ?? image.src;

    const backButton = document.querySelector(`#${section} .back`);
    backButton.addEventListener("click", () => {
        const newSprite = changeSprite(filterSrc(image.src), false);
        image.src = newSprite
        saveChanges(section, newSprite);
    });

    const nextButton = document.querySelector(`#${section} .next`);
    nextButton.addEventListener("click", () => {
        const newSprite = changeSprite(filterSrc(image.src), true);
        image.src = newSprite;
        saveChanges(section, newSprite);
    });
})
}

const fileUpload = document.getElementById("customImage");
//TODO: change file names if duplicates
const addCustomFiles = () => {
    const fileList = Array.from(fileUpload.files).map(file => `images/${file.name}`);
    spriteList = spriteList.concat(fileList);

    setSectionSelectors();

    console.log(fileList);
    console.log(spriteList);
}

fileUpload.addEventListener("change", addCustomFiles);


const changeSprite = (currSrc, positive) => {
    const currID = spriteList.indexOf(currSrc);
    console.log(currID);
    console.log(spriteList);
    if (positive) {
        return spriteList[(currID + 1) % spriteList.length];
    }
    return spriteList[(currID - 1 + spriteList.length) % spriteList.length]; 
}
const filterSrc = (src) => {
    return src.split("/").slice(-2).join("/");
}
const saveChanges = (section, src) => {
    sessionStorage.setItem(section, src);
}

setSectionSelectors();


