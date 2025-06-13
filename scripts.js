// SIDEBAR NAV TO HAMBURGER NAV FOR MOBILE
document.addEventListener('DOMContentLoaded', function() {
    // Elements
    const hamburger = document.querySelector('.hamburgerMenu');
    const sideNav = document.querySelector('.sideNavbar');
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    document.body.appendChild(overlay);

    // Toggle function
    function toggleMenu(open) {
        const isOpen = open !== undefined ? open : !sideNav.classList.contains('active');
        sideNav.classList.toggle('active', isOpen);
        overlay.classList.toggle('active', isOpen);
        document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    }

    // Click handlers
    hamburger.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleMenu();
    });

    overlay.addEventListener('click', () => toggleMenu(false));

    // Close when clicking outside
    document.addEventListener('click', () => {
        if (sideNav.classList.contains('active')) {
            toggleMenu(false);
        }
    });
});





// CAROUSEL SCRIPTS
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carouselItem');
    const dots = document.querySelectorAll('.dot');
    let currentIndex = 0;
    const totalItems = items.length;
  
    // Initialize carousel
    function showItem(index) {
        if (index >= totalItems) index = 0;
        if (index < 0) index = totalItems - 1;
        
        // Update active classes
        items.forEach((item, i) => {
            item.classList.toggle('active', i === index);
        });
        
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
        
        // Move carousel
        carousel.style.transform = `translateX(-${index * 100}%)`;
        currentIndex = index;
    }
  
    // Dot navigation
    dots.forEach(dot => {
        dot.addEventListener('click', function() {
            const index = parseInt(this.getAttribute('data-index'));
            showItem(index);
        });
    });
  
    // Auto-rotate
    let interval = setInterval(() => {
        showItem((currentIndex + 1) % totalItems);
    }, 10000);
  
    // Pause on hover
    carousel.addEventListener('mouseenter', () => clearInterval(interval));
    carousel.addEventListener('mouseleave', () => {
        interval = setInterval(() => {
            showItem((currentIndex + 1) % totalItems);
        }, 10000);
    });
  
    // Initial display
    showItem(0);


    // MOBILE SWIPE FEATURE
    let touchStartX = 0;
    let touchEndX = 0;

    // Attach to the same carousel container
    carousel.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
    }, false);

    carousel.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipeGesture();
    }, false);

    function handleSwipeGesture() {
        const swipeDistance = touchEndX - touchStartX;

        if (Math.abs(swipeDistance) > 35) {
            if (swipeDistance < 0) {
                // Swiped left
                showItem(currentIndex + 1);
            } else {
                // Swiped right
                showItem(currentIndex - 1);
            }
        }
    }
});





// MODAL SCRIPTS
document.addEventListener('DOMContentLoaded', () => {
    
    // IMAGE MODAL
    const imageModal = document.getElementById("myModal");
    const modalImg = document.getElementById("img01");
    const captionText = document.getElementById("caption");
    const imageModalClose = imageModal.querySelector('.close');

    document.querySelectorAll('#myImg1, #myImg2, #myImg3, #myImg4, #myImg5, #myImg6, #myImg7, #myImg8, #myImg9, #myImg10, #myImg11, #myImg12, #myImg13, #myImg14, #myImg15, #myImg16, #myImg17, #myImg18, #myImg19, #myImg20, #myImg21, #myImg22, #myImg23, #myImg24, #myImg25, #myImg26, #myImg27, #myImg28, #myImg29, #myImg30').forEach(img => {
        img.addEventListener('click', function () {
            imageModal.style.display = "block";
            imageModal.style.zIndex = "9999";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt || '';
            document.body.style.overflow = "hidden";
        });
    });

    imageModalClose.addEventListener('click', () => {
        imageModal.style.display = "none";
        imageModal.style.zIndex = "0";
        document.body.style.overflow = "auto";
    });
});


// STORY MODAL
document.addEventListener('DOMContentLoaded', function() {
    const storyModal = document.getElementById("storyModal");
    const storyModalContent = document.getElementById("modalStoryContent");

    if (!storyModal || !storyModalContent) {
        return;
    }

    document.addEventListener('click', function(e) {
        if (e.target.closest('.storyModalTrigger')) {
            e.preventDefault();
            const trigger = e.target.closest('.storyModalTrigger');
            const storyId = trigger.getAttribute('data-story');

            const storyEl = document.getElementById(storyId);
            if (!storyEl) {
                return;
            }

            storyModalContent.innerHTML = storyEl.innerHTML;
            storyModal.style.display = "block";
            document.body.style.overflow = "hidden";
        }

        // Handle close clicks
        if (e.target.classList.contains('storyClose') || e.target === storyModal) {
            storyModal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    });

    // In your modal opening function:
    document.querySelectorAll('.storyModalTrigger').forEach(trigger => {
        trigger.addEventListener('click', function(e) {
            e.preventDefault();
            const storyId = this.getAttribute('data-story');
            const storyContent = document.getElementById(storyId).innerHTML;
            const storyImage = this.querySelector('img').src;
            
            document.getElementById('modalStoryContent').innerHTML = storyContent;
            document.getElementById('modalStoryImage').src = storyImage;
            
            // Show modal
            document.getElementById('storyModal').style.display = 'block';
        });
    });
});