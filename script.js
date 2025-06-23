document.addEventListener('DOMContentLoaded', function() {
    // ... existing particle and cursor scripts ...
    const quantumField = document.getElementById('quantumField');
    if (quantumField) {
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.classList.add('quantum-particle');
            particle.style.top = `${Math.random() * 100}%`;
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.animationDelay = `${Math.random() * 3}s`;
            quantumField.appendChild(particle);
        }
    }

    const galaxyParticles = document.getElementById('galaxyParticles');
    if (galaxyParticles) {
        for (let i = 0; i < 100; i++) {
            const particle = document.createElement('div');
            particle.classList.add('galaxy-particle');
            particle.style.top = `${Math.random() * 100}%`;
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.width = `${Math.random() * 3 + 1}px`;
            particle.style.height = particle.style.width;
            particle.style.animationDelay = `${Math.random() * 8}s`;
            galaxyParticles.appendChild(particle);
        }
    }

    const cosmicCursor = document.getElementById('cosmicCursor');
    if(cosmicCursor) {
        window.addEventListener('mousemove', e => {
            cosmicCursor.style.left = e.clientX + 'px';
            cosmicCursor.style.top = e.clientY + 'px';
        });
    }
    
    const philosophyPopup = document.getElementById('philosophyPopup');
    const philosophyText = document.getElementById('philosophyText');
    const philosophies = [
        "The cosmos is within us. We are made of star-stuff.",
        "Technology is a mirror reflecting the human spirit.",
        "Creativity is intelligence having fun.",
        "The only way to do great work is to love what you do.",
        "Code is like poetry; every line should have a purpose."
    ];

    if (philosophyPopup && philosophyText) {
        document.body.addEventListener('click', function(e) {
            if (e.target.tagName !== 'BUTTON' && e.target.tagName !== 'A' && !e.target.closest('button, a')) {
                philosophyText.textContent = philosophies[Math.floor(Math.random() * philosophies.length)];
                philosophyPopup.classList.add('active');
                setTimeout(() => philosophyPopup.classList.remove('active'), 4000);
            }
        });
    }

    const skills = ["JavaScript", "Python", "AI/ML", "Next.js", "Solidity"];
    let currentSkillIndex = 0;
    const currentSkillSpan = document.getElementById('currentSkill');
    if (currentSkillSpan) {
        setInterval(() => {
            currentSkillIndex = (currentSkillIndex + 1) % skills.length;
            currentSkillSpan.style.opacity = 0;
            setTimeout(() => {
                currentSkillSpan.textContent = skills[currentSkillIndex];
                currentSkillSpan.style.opacity = 1;
            }, 500);
        }, 3000);
    }

    // Scroll animations
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    const sections = document.querySelectorAll('.section-title');
    
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });
    
    if (scrollToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollToTopBtn.classList.add('visible');
            } else {
                scrollToTopBtn.classList.remove('visible');
            }
        });
    }
});

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if(section) {
        // If it's a different page, this won't work directly.
        // The onclick in HTML already handles navigation.
        // This function is now mainly for the scroll-to-top button.
        section.scrollIntoView({ behavior: 'smooth' });
    }
} 