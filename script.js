// Lightbox effect
document.querySelectorAll('.gallery-item img').forEach(img => {
    img.addEventListener('click', (e) => {
        let src = e.target.src;
        let lightbox = document.createElement('div');
        lightbox.classList.add('lightbox');
        lightbox.innerHTML = `<div class="lightbox-content"><img src="${src}" alt="Full Image"><span class="close-btn">&times;</span></div>`;
        document.body.appendChild(lightbox);
        
        // Close lightbox when clicked
        document.querySelector('.close-btn').addEventListener('click', () => {
            document.body.removeChild(lightbox);
        });
    });
});