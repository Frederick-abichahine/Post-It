// ############################################
//      Declaring & Initializing Variables
// ############################################

const change_theme = document.querySelector('.theme_btn');

// ###################
//      Functions
// ###################

// Displaying Starting Theme:
// --------------------------

document.onload = setStartingTheme(localStorage.getItem('theme'));
function setStartingTheme(themeKey) {
    if (themeKey === 'dark') {
      document.documentElement.classList.add('night_mode');
    } else {
      document.documentElement.classList.remove('night_mode');
    }
}


  
  




