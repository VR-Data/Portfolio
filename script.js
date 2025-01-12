
    window.addEventListener("load", () => {
        document.querySelector("loader").classlist.add("loader--hidden");
        });
  
      tsParticles.load("tsparticles", {
        background: { color: "#001010" },
        particles: {
          number: { value: 180 },
          size: { value: 4, random: true },
          color: {
            value: ["#FF1000", "#33FF57", "#0057FF"],
            animation: {
              enable: true,
              speed: 15,
              sync: false
            }
          },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false
          },
          shape: { type: "circle" },
          links: {
            enable: true,
            distance: 150,
            color: "random",
            opacity: 0.5,
            width: 1
          },
          glow: {
            color: "#FFFFFF",
            opacity: 0.05
          }
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            onClick: { enable: true, mode: "push" }
          },
          modes: {
            push: {
              quantity: 8
            }
          }
        }
      });

      document.addEventListener("DOMContentLoaded", function() {
        const skillLevels = document.querySelectorAll(".skill-level");

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.width = entry.target.getAttribute('data-level');
                } else {
                    entry.target.style.width = '0';
                }
            });
        }, {
            threshold: 0.5
        });

        skillLevels.forEach(skill => {
            observer.observe(skill);
        });
    });
    
    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');
    
    menuIcon.addEventListener('click', () => {
      menuIcon.classList.toggle('bx-x');
      navbar.classList.toggle('active');
    });
