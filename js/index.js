// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10;
let ingredients = {
  pepperoni: {
    name: 'pepperoni',
    price: 1
  },
  mushrooms: {
    name: 'Mushrooms',
    price: 1
  },
  greenPeppers: {
    name: 'Green Peppers',
    price: 1
  },
  whiteSauce: {
    name: 'White sauce',
    price: 3
  },
  glutenFreeCrust: {
    name: 'Gluten-free crust',
    price: 5
  }
};

// Initial value of the state (the state values can change over time)
let state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  document.querySelectorAll('.mushroom').forEach((oneMushroom) => {
    if (state.mushrooms) {
      oneMushroom.style.visibility = 'visible';
    } else {
      oneMushroom.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach((onePepper) => {
    if (state.greenPeppers) {
      onePepper.style.visibility = 'visible';
    } else {
      onePepper.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  let sauce = document.querySelector('.sauce');
  if (state.whiteSauce) {
    sauce.classList.add('sauce-white');
  } else {
    sauce.classList.remove('sauce-white');
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  let sauce = document.querySelector('.crust');
  if (state.glutenFreeCrust) {
    sauce.classList.add('crust-gluten-free');
  } else {
    sauce.classList.remove('crust-gluten-free');
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  let pepperoni = document.querySelector('.btn-pepperoni');
  let mushrooms = document.querySelector('.btn-mushrooms');
  let greenPeppers = document.querySelector('.btn-green-peppers');
  let sauce = document.querySelector('.btn-sauce');
  let crust = document.querySelector('.btn-crust');
  crust.classList.toggle('active', state.glutenFreeCrust);
  pepperoni.classList.toggle('active', state.pepperoni);
  mushrooms.classList.toggle('active', state.mushrooms);
  greenPeppers.classList.toggle('active', state.greenPeppers);
  sauce.classList.toggle('active', state.whiteSauce);
}

function renderPrice() {
  let list = document.querySelector('aside ul');
  let total = 10;
  list.innerHTML = '';
  for (ingredient in ingredients) {
    if (state[ingredient]) {
      total += ingredients[ingredient].price;
      list.innerHTML += `<li>$${ingredients[ingredient].price} ${ingredients[ingredient].name}`;
    }
  }
  document.querySelector('aside strong').innerHTML = total;
  // Iteration 4: change the HTML of `<aside class="panel price">`
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`

document.querySelector('.btn.btn-mushrooms').addEventListener('click', () => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`

document
  .querySelector('.btn.btn-green-peppers')
  .addEventListener('click', () => {
    state.greenPeppers = !state.greenPeppers;
    renderEverything();
  });

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`

document.querySelector('.btn.btn-sauce').addEventListener('click', () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`

document.querySelector('.btn.btn-crust').addEventListener('click', () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});