const changeImage = function() {
  // 1. Logging the image
  const imageEl = document.querySelector('#coord-image');
  console.log(imageEl);
  console.log('Old image: ' + imageEl.src);

  // 2. Getting the x & y coordinate
  const xInputEl = document.querySelector('#x-changer');
  const yInputEl = document.querySelector('#y-changer');

  const xSelectEl = document.querySelector('#x-coord');
  const ySelectEl = document.querySelector('#y-coord');

  // 3. Reading the x & y value
  const xCoord = xInputEl.value || xSelectEl.value;
  const yCoord = yInputEl.value || ySelectEl.value;

  // 4. Creating the image path with the coordinates
  // const imageSrc = 'images/out256_' + xCoord + '_' + yCoord + '.jpg';
  const imageSrc = `images/out256_${xCoord}_${yCoord}.jpg`;

  // 5. Changing the image element's src
  imageEl.src = imageSrc;
  console.log('New image: ' + imageEl.src);
}



// Getting the button element and
// associating the click event with
// changeImage function
const buttonEl = document.querySelector('#image-changer');
buttonEl.addEventListener('click', changeImage);

// Getting the input elements and
// associating the input event with
// changeImage function
const xInputEl = document.querySelector('#x-changer');
xInputEl.addEventListener('input', changeImage);
const yInputEl = document.querySelector('#y-changer');
yInputEl.addEventListener('input', changeImage);

const xSelectEl = document.querySelector('#x-coord');
xSelectEl.addEventListener('change', changeImage);
const ySelectEl = document.querySelector('#y-coord');
ySelectEl.addEventListener('change', changeImage);