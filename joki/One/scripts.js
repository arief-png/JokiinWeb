   window.addEventListener("load", () => {
    const loader = document.getElementById("loadingScreen");
    if (loader) {
      loader.classList.add("opacity-0");
      setTimeout(() => {
        loader.style.display = "none";
      }, 500);
    }
  });
  
 
 const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = navMenu.querySelectorAll("a");

  function toggleMenu() {
    menuToggle.classList.toggle("active");
    const isOpen = navMenu.classList.contains("translate-x-0");

    if (isOpen) {
      navMenu.classList.remove("translate-x-0", "opacity-100", "visible");
      navMenu.classList.add("translate-x-full", "opacity-0", "invisible");
    } else {
      navMenu.classList.remove("translate-x-full", "opacity-0", "invisible");
      navMenu.classList.add("translate-x-0", "opacity-100", "visible");
    }
  }

  menuToggle.addEventListener("click", toggleMenu);

  // Auto-close navbar when any link is clicked
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      if (window.innerWidth < 768) {
        toggleMenu();
      }
    });
  });

  

  