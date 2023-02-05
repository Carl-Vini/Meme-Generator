function generateMeme(img,topText,bottomText,topTextSize,bottomTextSize){
    const canvas = document.getElementById("meme-canvas");
    const ctx = canvas.getContext('2d');
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.drawImage(img,0,0);
    ctx.fillStyle = 'white';
    ctx.strokeStyle = 'black';
    ctx.textAlign = 'center';
    let fontSize = canvas.width * topTextSize;
    ctx.font = `${fontSize}px Impact`;
    ctx.lineWidth = fontSize / 20; 

    // draw top Text
    ctx.textBaseLine = 'top';
    topText.split('\n').forEach((t,i ) => {
        ctx.fillText(t,canvas.width/2, (i + 1) * fontSize, canvas.width);
        ctx.strokeText(t, canvas.width/2, (i + 1) * fontSize, canvas.width);
    }) 
    
    fontSize = canvas.width * bottomTextSize;
    ctx.font = `${fontSize}px Impact`;
    ctx.lineWidth = fontSize / 20;

    // Draw bottom text
    ctx.textBaseline = 'bottom';
    bottomText.split('\n').reverse().forEach((t, i) => { // .reverse() because it's drawing the bottom text from the bottom up
    ctx.fillText(t, canvas.width / 2, canvas.height - i * fontSize, canvas.width);
    ctx.strokeText(t, canvas.width / 2, canvas.height - i * fontSize, canvas.width);    
})
}
window.addEventListener('DOMContentLoaded',(event) => {
    const topTextInput = document.getElementById("top-text");
    const bottomTextInput = document.getElementById("bottom-text");
    const topTextSizeInput = document.getElementById("top-text-size-input");
    const bottomTextSizeInput = document.getElementById("bottom-text-size-input");
    const imageInput = document.getElementById("image-input"); 
    const gntBtn = document.getElementById("gnt-btn");
    
    topTextInput.value = "Insert here the text in the top";
    bottomTextInput.value = "Insert here the text in the bottom";

    gntBtn.addEventListener("click", () => {
        const reader = new FileReader();
        reader.readAsDataURL(imageInput.files[0]);
        reader.onload = () => {
            const img = new Image;
            img.src = reader.result;
            img.onload = () => {
                generateMeme(img,topTextInput.value,bottomTextInput.value,topTextSizeInput.value,bottomTextSizeInput.value)
            };
        };
        
    });
});


const dark = document.querySelector('.dark-mode');
const bodyDark = document.querySelector('.body-light');

dark.addEventListener('click', () => {
    bodyDark.classList.toggle('dark-mode--active');
})
