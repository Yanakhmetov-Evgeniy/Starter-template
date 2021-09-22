function showMenu(nav, btn){
   const navMenu = document.getElementById(nav);
   const navBtn = document.getElementById(btn);

   if(navMenu && navBtn){
       navBtn.addEventListener('click', function(){
           navMenu.classList.toggle('active');
       })
   }   
}
showMenu('menu-nav', 'menu-btn');