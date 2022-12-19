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

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function buildNavbar(){
    // loop through sections list
    sections.forEach(section=>{
        // Get section attributes 
        const sectionId = section.getAttribute("Id");
        const sectionTitle = section.getAttribute("data-nav");

        // Create list item

        const item = document.createElement("li");
        const link = document.createElement("a");

        // add attributes to item

        link.classList.add("menu__link");
        link.href=`#${sectionId}`;
        link.textContent = sectionTitle;

        // Add click event

        link.addEventListener("click",e=>{
            e.preventDefault();
            section.scrollIntoView({
                behavior:"smooth"
            })

        })
        item.appendChild(link);
        fragment.appendChild(item);
    })
  navbarList.append(fragment);  
  
}

window.addEventListener("load",buildNavbar);

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


