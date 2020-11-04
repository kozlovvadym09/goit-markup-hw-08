(() => {
   const refs = {
     openMenuBtn: document.querySelector('[data-menu-open]'),
     closeMenuBtn: document.querySelector('[data-menu-close]'),
     menu: document.querySelector('[data-menu]'),
   };
 
   refs.openMenulBtn.addEventListener('click', toggleMenu);
   refs.closeMenulBtn.addEventListener('click', toggleMenu);
 
   function toggleMenu() {
     refs.menu.classList.toggle('is-open');
   }
 })();

/*(() => {
   const menuBtnRef = document.querySelector("[data-menu-button]");

   menuBtnRef.addEventListener("click", () => {

      menuBtnRef.classList.toggle('is-open');
   });


})();*/