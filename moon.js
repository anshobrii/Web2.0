const sun = document.getElementById('sun');
        const moon = document.getElementById('moon');
        
        let isAnimated = false;
        let isSunRising = false;
        
        function handleKeyDown(event) {
          if (event.key === 'ArrowDown') {
            if (!isAnimated) {
              sun.classList.add('animated');
              moon.classList.add('animated');
              isAnimated = true;
            }
        
            if (!isSunRising) {
              sun.style.animationPlayState = 'running';
              isSunRising = true;
            }
          }
        }
        
        window.addEventListener('keydown', handleKeyDown);