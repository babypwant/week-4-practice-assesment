
window.addEventListener("DOMContentLoaded", () => {

  //PROBLEM #1
  const button = document.getElementById('make-circle-blue')

  button.addEventListener('click', (event) => {
    event.preventDefault()
    let circle = document.getElementById('blue-border-circle')

    circle.style.backgroundColor = 'blue'

  });

  //PROBLEM #2
  let checkbox = document.getElementById('will-not-check')
  checkbox.addEventListener('click', (event) => {
    event.preventDefault()


  });

  //PROBLEM #3

  let bananaButton = document.getElementById('change-bananas-status')
  bananaButton.addEventListener('click', (event) => {
    //when we click the button what do we wanna do?
    //set the innerHTML of bananas-div to say no bananas today
    let div = document.getElementById('bananas-div')
    div.innerHTML = 'No Bananas Today!'

    let img = document.createElement('img')
    img.id = 'imgID'
    img.src = './images/no-bananas.png'
    div.appendChild(img)

  });

  //PROBLEM #4

  let cookieButton = document.getElementById('store-cookie')
  cookieButton.addEventListener('click', (event) => {

    if (localStorage.key('FavCookie')) {
      let mycook = localStorage.getItem('FavCookie')
      let cookieInput = document.getElementById('fav-cookie')
      cookieInput.placeholder = mycook;
    } else {
      let cookieInput = document.getElementById('fav-cookie')
      localStorage.setItem('FavCookie', cookieInput.value)
    }


  })
  //PROBLEM #5 //double check

  let pieButton = document.getElementById('save-pie')

  let inputBox = document.getElementById('pie-type')
  let pieList = document.getElementsByClassName('pie-list')[0];

  pieButton.addEventListener('click', (event) => {
    if (pieList.length > 5) {


    } else {
      const pie = document.createElement('li')

      let inputboxVal = inputBox.value

      pie.innerText = inputboxVal

      console.log(pie)

      pieList.placeholder.appendChild(pie)
    }

  })


  //PROBLEM #6


  //PROBLEM #7


  //PROBLEM #8


});
