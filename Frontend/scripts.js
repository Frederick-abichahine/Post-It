// ############################################
//      Declaring & Initializing Variables
// ############################################

const pages = {}
const base_url = "http://localhost/postit/Backend/"

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
  const password = document.getElementById('password')
  const btn = document.getElementById('btn')
  btn.addEventListener('click', async function() {
    const name = username.value //getting the value from the input
    const pass = password.value
    const url = base_url + "get_login_info.php?username=" + name + "&password=" + pass
    const resp = await pages.getAPI(url)
    const message = document.getElementById('title')
    if(resp.data[0] == null) {
      message.innerHTML = "<i><h6 style = \"color: red;\"> Incorrect Username or Password</h6></i>"
    } else {
      location.assign('./index.html')
    }
  })
  const change_page = document.getElementById('under-btn')
  change_page.addEventListener('click', () => {
    location.assign('./signup.html')
  })
}

pages.getAPI = async (url) => {
  try {
    return await axios(url)
  } catch (error) {
    console.log("Error: ", error)
  }
}

// ------------------------------

pages.loadSignup = () => {
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
  const password = document.getElementById('password')
  const email = document.getElementById('email')
  const btn = document.getElementById('btn')
  btn.addEventListener('click', async function() {
    const name = username.value //getting the value from the input
    const pass = password.value
    const mail = email.value
    const url = base_url + "post_signup_info.php"
    const formData = new FormData();
    formData.append('username', name);
    formData.append('email', mail);
    formData.append('password', pass);
    const resp = await pages.postAPI(url, formData)
    const message = document.getElementById('title')
    // console.log(resp)
    // console.log(resp.data)
    // console.log(resp.data[0])
    if(!resp.data[0]) {
      message.innerHTML = "<i><h6 style = \"color: red;\"> Please fill out all information</h6></i>"
    } else {
      location.assign('./login.html')
    }
  })
  const change_page = document.getElementById('under-btn')
  change_page.addEventListener('click', () => {
    location.assign('./login.html')
  })
}

pages.postAPI = async (url, data, token = null) => {
  try{
      return await axios.post( 
          url,  //we need the url to be able to post
          data, //data is a JSON object that we send to the server
          {
              headers:{ //JSON object, this will let the backend know if the user is authenticated, if the user is logged in or not
                  'Authorization' : "token" + token
              }
          }
      )
  }catch(error){
      console.log("Error from linking (POST)", error)
  }
}
  




