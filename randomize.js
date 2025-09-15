/* randomize the images on the index.html page

vh--> positioning

it is easier to do it as a js file than embedding in html
*/

function randomizeAsideImages(asideSelector) {
  const aside = document.querySelector(asideSelector);
  const imgs = aside.querySelectorAll("img");
  const placed = []; // store positions of already placed images

  imgs.forEach(img => {
    let top, left, overlap;
    const imgWidth = 120;  // approximate since width:150px
    const imgHeight = 120; // approximate since height:auto

    do {
      // Generate candidate position
      top = Math.random() * 80;   // % (leave margin at bottom)
      left = Math.random() * 60;  // % inside column
      overlap = false;

      // Convert percentages to pixels based on aside size
      const asideRect = aside.getBoundingClientRect();
      const newX = (left / 100) * asideRect.width;
      const newY = (top / 100) * asideRect.height;

      // Check overlap with previously placed images
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

      // If no overlap, save this position
      if (!overlap) {
        placed.push({ x: newX, y: newY });
        img.style.top = top + "%";
        img.style.left = left + "%";
      }
    } while (overlap); // retry until non-overlapping
  });
}

// Run after page loads
window.addEventListener("load", () => {
  randomizeAsideImages(".left-column");
  randomizeAsideImages(".right-column");
});