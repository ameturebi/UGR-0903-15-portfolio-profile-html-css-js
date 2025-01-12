document.querySelector('.toggle-btn').addEventListener('click', function() {
        const navLinks = document.querySelector('.nav-links .lists');
        navLinks.classList.toggle('show');
        
        // Toggle the aria-expanded attribute for accessibility
        const isExpanded = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', !isExpanded);
    });

