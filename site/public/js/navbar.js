class Navbar {
    constructor() {
        this.Menu = document.querySelector(Menu);
        this.navList = document.querySelector(navList);
        this.navLink = document.querySelector(navLink);
        this.activeClass = "active";
    }

    addClickEvent() {
        this.Menu.addEventListener("click", () => console.log
        ("HIII"));
    }

    init() {
        if (this.Menu) {
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar