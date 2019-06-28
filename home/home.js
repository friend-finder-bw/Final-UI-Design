class Menu {
    // Constructor
    constructor(menus){
        this.menus = menus;
        this.heading = this.menus.querySelector('.MenuOpt');
        this.dropdown = this.menus.querySelector('.menus')
      
      this.heading.addEventListener('click', () => this.toggleMenu()); 
    }

    toggleMenu(){
   
      this.dropdown.classList.toggle('hidden');
    }
  }
  let menubar = document.querySelectorAll('.menubar');
  
  menubar = Array.from(menubar).forEach( menus => {
    return new Menu(menus);
  });
  
