// ############################################
//      Declaring & Initializing Variables
// ############################################

const pages = {}

// ###################
//      Functions
// ###################

pages.loaderFunction = (func_name) => {
  eval("pages.load" + func_name + "()")
}

// ------------------------------
pages.loadIndex = () => {

  // Displaying Starting Theme:
  // --------------------------
  const change_theme = document.querySelector('.theme_btn')
  document.onload = setStartingTheme(localStorage.getItem('theme'))
  function setStartingTheme(themeKey) {
      if (themeKey === 'dark') {
        document.documentElement.classList.add('night_mode');
      } else {
        document.documentElement.classList.remove('night_mode');
      }
  }
  change_theme.addEventListener('click', () => {
    document.documentElement.classList.toggle('night_mode'); //changing the root
    if (document.documentElement.classList.contains('night_mode')) {
      localStorage.setItem('theme', 'dark') // adding dark theme to local storage
    } else {
      localStorage.setItem('theme', 'light') // adding light theme to local storage
    }
  })
}

// ------------------------------

pages.loadLogin = () => {
  const inputs = document.querySelectorAll(".input")
  function addcl(){
    let parent = this.parentNode.parentNode
    parent.classList.add("focus")
  }
  function remcl(){
    let parent = this.parentNode.parentNode
    if(this.value == ""){
      parent.classList.remove("focus")
    }
  }
}

  
  




