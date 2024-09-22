
//change photo function

// function changeImage() {
//     var img = document.getElementById("image");
//     if()
//     img.src="/asset/furia-air.jpg";   
//         img.src="/asset/drago-lv.jpg";
// }

// function changeImageBack() {
//     var img = document.getElementById("image");
//     img.src="/asset/furia-air.jpg";
//     return false;
// }

const images = [
    './asset/drago-lv.jpg', 
    './asset/furia-air.jpg',
    './asset/instinct-vsr.jpg'
];

let currentIndex = 0;

const imageElement = document.getElementById('imageselector');
const switchButton = document.getElementById('clickme');

// Add a click event listener to the button
switchButton.addEventListener('click', () => {
  // Increment the index to switch to the next image
  currentIndex++;

// If the current index exceeds the number of images, reset it to 0 (loop back)
    if (currentIndex >= images.length) {
        currentIndex = 0;
      }
    
      // Change the image source to the new image
      imageElement.src = images[currentIndex];
    });