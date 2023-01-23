const popup = document.querySelector('.popup');
const buttonEdit = document.querySelector('.profile__edit-button');
const popupOpen = document.querySelector('.popup_opened');
const buttonEditClose = document.querySelector('.popup__close-icon');
const popupForm = document.querySelector('.popup__form');
const nameInput = document.querySelector('.nameInput');
const jobInput = document.querySelector('.jobInput');
const saveButton = document.querySelector('.popup__button');
const profileName = document.querySelector('.profile__name');
const profileText = document.querySelector('.profile__text');
const cards = document.querySelector(".elements__element");
const templateCard = document.querySelector("#template-cards").content;
const buttonAddCards = document.querySelector('.profile__add-button');
const popupAddCards = document.querySelector('.popup_card-add');
const popupCloseCards = document.querySelector('.popup_card-close');
const linkInput = document.querySelector('.linkInput');
const nameCardInput = document.querySelector('.nameCardInput');
const buttonCreate = document.querySelector('.popup__button-create');
const likeButtonInactive = templateCard.querySelector('.element__button-like');
const likeButtonActive = templateCard.querySelector('.element__button-like_active');
const deleteButton = templateCard.querySelector('.element__button-trash');


// открытие/закрытие попапа для редактирования профиля 

buttonEdit.addEventListener('click', function () {
  popup.classList.add('popup_opened');
});

buttonEditClose.addEventListener('click', function() {
  popup.classList.remove('popup_opened');
});

function handleFormSubmit (evt) {
  evt.preventDefault();

  const nameValue = nameInput.value;
  const jobValue = jobInput.value;

  profileName.textContent = nameValue;
  profileText.textContent = jobValue;

  popup.classList.remove('popup_opened')
}

saveButton.addEventListener('click', handleFormSubmit);

// добавление карточек с помощью js при загрузке страницы.

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const placeInfo = initialCards.map(function (item) {
  return {
    name: item.name,  
    link: item.link
  };
});

function renderCard({ name, link }) {
  const cardElement = templateCard.querySelector(".element").cloneNode(true);
  cardElement.querySelector(".element__title").textContent = name;
  cardElement.querySelector(".element__image").src = link;

  cardElement.querySelector('.element__button-like').addEventListener('click', function(evt) {
    evt.target.classList.toggle('element__button-like_active')
  });

  cards.prepend(cardElement);
}

function render() {
  placeInfo.forEach(renderCard);
}

render();

// открытие/закрытие попапа для добавления карточек

buttonAddCards.addEventListener('click', function() {
  popupAddCards.classList.add('popup_opened');
});

popupCloseCards.addEventListener('click', function() {
  popupAddCards.classList.remove('popup_opened');
});


// создание карточек
function createCard (evt) {
  evt.preventDefault();

  const nameValue = nameCardInput.value;
  const linkValue = linkInput.value;

  const cardElement = templateCard.querySelector(".element").cloneNode(true);
  cardElement.querySelector(".element__title").textContent = nameValue;
  cardElement.querySelector(".element__image").src = linkValue;

  cardElement.querySelector('.element__button-like').addEventListener('click', function(evt) {
    evt.target.classList.toggle('element__button-like_active')
  });
    
  cards.prepend(cardElement);

  popupAddCards.classList.remove('popup_opened');
}

buttonCreate.addEventListener('click', createCard);

function deleteCard () {

}

