// Function to filter gallery items based on category
function filterCategory(category) {
    // Get all the gallery items
    const items = document.querySelectorAll('.gallery-item');
    
    // Show all items if "All" is selected
    if (category === 'all') {
      items.forEach(item => {
        item.style.display = 'block';
      });
    } else {
      // Hide items that don't match the selected category
      items.forEach(item => {
        if (item.classList.contains(category)) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    }
    
    // Highlight active category button
    const buttons = document.querySelectorAll('.category-btn');
    buttons.forEach(button => {
      button.classList.remove('active');
    });
    
    const activeButton = document.querySelector(`.category-btn[onclick="filterCategory('${category}')"]`);
    activeButton.classList.add('active');
  }
  
  // Modal functionality
  const images = document.querySelectorAll('.gallery-img');
  const modal = document.getElementById('imageModal');
  const modalImage = document.getElementById('modalImage');
  const captionText = document.getElementById('caption');
  
  // Open modal when an image is clicked
  images.forEach(image => {
    image.addEventListener('click', function () {
      modal.style.display = "block";
      modalImage.src = this.src;
      captionText.textContent = this.alt;
    });
  });
  
  // Close the modal
  function closeModal() {
    modal.style.display = "none";
  }
  
  // Initial load
  filterCategory('all');
  