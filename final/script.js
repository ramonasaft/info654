// Get the image element
const image = document.getElementById('animatedImage');

// Add event listener for mouseenter (hover in)
image.addEventListener('mouseenter', function() {
  image.classList.add('scale'); // Add 'scale' class on hover
});

// Add event listener for mouseleave (hover out)
image.addEventListener('mouseleave', function() {
  image.classList.remove('scale'); // Remove 'scale' class when hover ends
});