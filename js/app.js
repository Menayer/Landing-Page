/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/

const navbarList = document.getElementById("navbar__list");
const sections = document.querySelectorAll("section");
const fragment = document.createDocumentFragment();



// build the nav
function buildNavbar(){
    // loop through sections list
    sections.forEach(section=>{
        // Get section attributes 
        const sectionId = section.getAttribute("Id");
        const sectionTitle = section.getAttribute("data-nav");

        // Create list item

        const item = document.createElement("li");
        item.innerHTML=`<a href="#${sectionId}" data-nav=${sectionId} class="menu__link">${sectionTitle}</a>`

        fragment.appendChild(item);
    })
  navbarList.append(fragment);  
  
}

window.addEventListener("load",buildNavbar);

// Scroll to section on link click
function selectSection(){
    const links = document.querySelectorAll("a.menu__link");

    sections.forEach(section=>{
        const sectionTop = section.getBoundingClientRect().top;
        const sectionTitle = section.getAttribute("data-nav");
        if(sectionTop > -100 & sectionTop  < 250){
            section.classList.add("your-active-class");
            links.forEach(l=>{
                
                if(l.textContent === sectionTitle){
                    
                    l.classList.add("link__active");
                }
                else{
                    l.classList.remove("link__active");
                }
            });
        }
        else{
            section.classList.remove("your-active-class");
            //
        }
    })
}
window.addEventListener("scroll",selectSection);


// Scroll to anchor ID using scrollTO event

addEventListener("load", event => {

    const menuLinks = document.querySelectorAll('.menu__link');
    menuLinks.forEach(link =>{
        link.addEventListener('click', e=>{
            e.preventDefault();
            const targetDiv = e.target.dataset.nav;
            const element = document.getElementById(targetDiv);
            console.log(element);
            element.scrollIntoView({
                
                behavior: "smooth",
                block: "end"
              });

        })
    } );




});


// Collapsible Sections

addEventListener("load",event=>{

const sectionHeadings = document.querySelectorAll("h2");
console.log(sectionHeadings);

sectionHeadings.forEach(sh=>{
    sh.innerHTML += `<button type="button" class="collapsible">Mini Section</button>`
});

const Collapsible = document.querySelectorAll(".collapsible");
    Collapsible.forEach(col=>{
        console.log(col);
        col.addEventListener("click", function(){
            col.classList.toggle("active");
            const NextParagraph = this.parentElement.nextElementSibling;
            console.log(NextParagraph);
            if(NextParagraph.style.display === "block")
            {
                NextParagraph.style.display= "none";
                console.log("I'm Here");
            }
            else{
                NextParagraph.style.display = "block";
            }
            console.log(NextParagraph);
        });
    });
});

// Add the button dynamically to h2 elements









