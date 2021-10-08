const favAnimal = document.querySelector(".fav-animal");
const animalsWindow = document.querySelector(".animals");
const animal = document.querySelector(".animal");
const addBtn = document.querySelector(".btn-add");

// animalsWindow.addEventListener('click', (e) =>{
// console.log(e)
// const newFavAnimal = e.target.textContent
// favAnimal.innerText = newFavAnimal
// })

// addBtn.addEventListener('click', () => {
//     const newAnimal = prompt('Write animal');
//     if(newAnimal === null || newAnimal.trim() === "" ){
//         return
//     } else {
//     const newAnimalBox = document.createElement('div')
//     newAnimalBox.textContent = newAnimal
//     newAnimalBox.classList.add('animal')
//     animalsWindow.appendChild(newAnimalBox)
//     }

// })

animalsWindow.addEventListener("click", function (e) {
  if (e.target && e.target.matches('div.animal'))   {
    console.log(e);
    const favAnOnTheTop = e.target.textContent;
    favAnimal.innerText = favAnOnTheTop;
  }
});

addBtn.addEventListener("click", () => {
  const newAnimal = prompt("Wpisz zwierze");
  const newBox = document.createElement("div");
  newBox.classList.add("animal");
  newBox.innerText = newAnimal;
  animalsWindow.appendChild(newBox);
});
