// Jednoduché javascriptové efekty

document.addEventListener('DOMContentLoaded', () => {

    // 1. Smooth scrolling pro navigační odkazy
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Posun o výšku hlavičky (cca 90px)
                const headerOffset = 90;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
                window.scrollTo({
                     top: offsetPosition,
                     behavior: "smooth"
                });
            }
        });
    });

    // 2. Skrytí/zobrazení hlavičky na základě scrollování (optional, pro čistší pocit)
    /* 
    let lastScrollTop = 0;
    const header = document.querySelector('.main-header');
    
    window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
             // Scroll Down
             header.style.transform = 'translateY(-100%)';
        } else {
             // Scroll Up
             header.style.transform = 'translateY(0)';
        }
        lastScrollTop = scrollTop;
    });
    */
    
    // 3. Simple scroll reveal pro sekce
    const sections = document.querySelectorAll('section');
    
    // Zpočátku mírně zneviditelnit a posunout
    sections.forEach(sec => {
        if(!sec.classList.contains('hero')) {
             sec.style.opacity = '0';
             sec.style.transform = 'translateY(30px)';
             sec.style.transition = 'all 1s ease-out';
        }
    });

    const revealSection = () => {
        const triggerBottom = window.innerHeight * 0.85;

        sections.forEach(sec => {
            if(!sec.classList.contains('hero')) {
                const sectionTop = sec.getBoundingClientRect().top;

                if(sectionTop < triggerBottom) {
                    sec.style.opacity = '1';
                    sec.style.transform = 'translateY(0)';
                }
            }
        });
    };

    window.addEventListener('scroll', revealSection);
    // Spustit jednou při načtení
    revealSection();

});
