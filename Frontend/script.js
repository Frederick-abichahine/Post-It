// ############################################
//      Declaring & Initializing Variables
// ############################################

const pages = {}
const base_url = "http://localhost/Post-It/Backend/"

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
        document.documentElement.classList.add('night_mode')
      } else {
        document.documentElement.classList.remove('night_mode')
      }
  }
  change_theme.addEventListener('click', () => {
    document.documentElement.classList.toggle('night_mode') //changing the root
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
  function addFocus(){
    let parent = this.parentNode.parentNode
    parent.classList.add("focus")
  }
  function removeFocus(){
    let parent = this.parentNode.parentNode
    if(this.value == ""){
      parent.classList.remove("focus")
    }
  }
  inputs.forEach(input => {
    input.addEventListener("focus", addFocus)
    input.addEventListener("blur", removeFocus)
  })
  const username = document.getElementById('username')
  const btn = document.getElementById('btn')
  btn.addEventListener('click', async function() {
    const name = username.value //getting the value from the input
    const url = base_url + "get_login_info.php?username=" + name
<<<<<<< Updated upstream
<<<<<<< Updated upstream
    await pages.getAPI(url)
    location.assign('./index.html')
=======
=======
>>>>>>> Stashed changes
    const resp = await pages.getAPI(url)
    const message = document.getElementById('title')
    if(resp.data[0] == null){
      message.innerHTML = "<i><h6 style = \"color: red;\"> Incorrect Username or Password</h6></i>"
    } else {
      location.assign('./index.html')
    }
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
  })
}

pages.getAPI = async (url) => {
  try {
    return await axios(url)
  } catch (error) {
    console.log("Error: ", error)
  }
}

  
  




