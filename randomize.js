/* randomize the images on the index.html page

vh--> positioning

it is easier to do it as a js file than embedding in html
*/

function randomizeAsideImages(asideSelector) {
  const aside = document.querySelector(asideSelector);
  const imgs = aside.querySelectorAll("img");
  const placed = []; //stores positions of already placed images

  imgs.forEach(img => {
    let top, left, overlap;
    const imgWidth = 150;  
    const imgHeight = 150; 

    do {
      
      //generate image positions
      top = Math.random() * 80;   // % (leave margin at bottom)
      left = Math.random() * 60;  // % inside column
      overlap = false;

      //convert percentages to pixels based on aside size
      const asideRect = aside.getBoundingClientRect();
      const newX = (left / 100) * asideRect.width;
      const newY = (top / 100) * asideRect.height;

      //checks overlap with previously placed images
      for (const pos of placed) {
        if (
          newX < pos.x + imgWidth &&
          newX + imgWidth > pos.x &&
          newY < pos.y + imgHeight &&
          newY + imgHeight > pos.y
        ) {
          overlap = true;
          break;
        }
      }

      //if there is no overlap--> save the position
      if (!overlap) {
        placed.push({ x: newX, y: newY });
        img.style.top = top + "%";
        img.style.left = left + "%";
      }
    } while (overlap); //retries until non-overlapping
  });
}

//runs after the page loads
window.addEventListener("load", () => {
  randomizeAsideImages(".left-column");
  randomizeAsideImages(".right-column");
});