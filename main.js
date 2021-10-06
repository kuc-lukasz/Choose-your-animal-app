const favAnimal = document.querySelector('.fav-animal')
const animalsWindow = document.querySelector(".animals")
const animal = document.querySelector('.animal')
const addBtn = document.querySelector(".btn-add")

addBtn.addEventListener('click', () => {
    const newAnimal = prompt('Write animal');
    const newAnimalBox = document.createElement('div')
    newAnimalBox.textContent = newAnimal
    newAnimalBox.classList.add('animal')
    animalsWindow.appendChild(newAnimalBox)
    

})