// adds interactivity to our page

let myImage = document.querySelector('img');

myImage.addEventListener('click', () => {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'assets/firefox-icon.png') {
      myImage.setAttribute('src','assets/firefox-logo.png' )
    } else {
      myImage.setAttribute('src','assets/firefox-icon.png' )
    }
})



const myHeading = document.querySelector('h1')
const myButton = document.querySelector('button')

function setUserName() {
  let myName = prompt('Please enter your name.')

  if(!myName) {
    setUserName()
  } else {
    localStorage.setItem('name', myName)
    myHeading.textContent = 'Welcome to Mozilla, ' + myName
  }
  
}

if(!localStorage.getItem('name')) {
  setUserName()
} else {
  let storedName = localStorage.getItem('name')
  myHeading.textContent = 'Welcome to Mozilla, ' + storedName
}

myButton.addEventListener('click', setUserName()
)