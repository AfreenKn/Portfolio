// toggle icon navbar
let menuIcon=document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

let popup=document.getElementById('popup');

        
        function openPopup(){
            document.getElementById("showmsg").style.visibility = "hidden";
        popup.classList.add('open-popup');
         }

        function closePopup(){
            document.getElementById("showmsg").style.visibility = "visible";
    popup.classList.remove('open-popup');
        }




menuIcon.onclick =()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// scroll section 
let sections=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a' );

window.onscroll = () => {
    sections.forEach(sec => {
        let top=window.scrollY;
        let offset=sec.offsetTop -100;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');

        if(top>=offset && top< offset + height){
            // active navbar links 
            navLinks.forEach(links=>{
               links.classList.remove('active');
               document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });
            // active sections for animation when scroll
            sec.classList.add('show-animate');
        }
        else{
            sec.classList.remove('show-animate');
        }
    });
    let header = document.querySelector('header');
         // sticky header
    header.classList.toggle('sticky', window.scrollY > 100);
    // remove the toggle  icon and navbar link(scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
    // animation for footer
    let footer =document.querySelector('footer');
    footer.classList.toggle('show-animate',this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
}
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
}




 
