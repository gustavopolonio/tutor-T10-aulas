import { api } from './components/Api.js'

const username = document.querySelector('.header__user-name')
const about = document.querySelector('.header__user-about')
const cardsList = document.querySelector('.cards__list')
const cardsTemplate = document.querySelector('#card-template').content
const cardElement = cardsTemplate.querySelector('.card')
// const cardsList = document.querySelector('.cards__list')
const form = document.querySelector('.form')
const usernameInput = document.querySelector('.username-input')
const aboutInput = document.querySelector('.about-input')

// api.getUser()
//   .then((data) => {
//     console.log(data)
    
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// api.getInitialCards()
//   .then((data) => {
//     console.log(data)
//   })
//   .catch((err) => {
//     console.log(err);
//   });

api.getInitialData()
  .then(([userData, initialCards]) => {
    console.log(userData)
    console.log(initialCards)

    // setUserInfo
    username.textContent = userData.name
    about.textContent = userData.about

    initialCards.forEach((card) => {
      // new Card()
      const newCard = cardElement.cloneNode(true)

      const cardImage = newCard.querySelector('.card__image')
      cardImage.src = card.link

      const cardTitle = newCard.querySelector('.card__title')
      cardTitle.textContent = card.name

      cardsList.append(newCard)
    })
  })
  .catch((error) => console.log(error))


form.addEventListener('submit', (e) => {
  e.preventDefault()

  const newUsername = usernameInput.value
  const newAbout = aboutInput.value

  api.setUserData({
    name: newUsername,
    about: newAbout
  })
  .then((data) => {
    username.textContent = data.name
    about.textContent = data.about
  })
  .catch((error) => console.log(error))
})