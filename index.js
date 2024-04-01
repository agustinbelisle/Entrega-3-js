const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];

const resultContainer = document.getElementById('result-container'); // Mueve esta línea fuera de la función

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('search-form');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const input = document.getElementById('pizza-id');
    const id = parseInt(input.value);

    if (isNaN(id)) {
      resultContainer.innerHTML = 'Por favor, ingrese un número válido.';
    } else {
      const foundPizza = pizzas.find(pizza => pizza.id === id);

      if (foundPizza) {
        renderPizza(foundPizza);
        localStorage.setItem('lastPizza', JSON.stringify(foundPizza));
      } else {
        resultContainer.innerHTML = 'No se encontró ninguna pizza con ese ID.';
      }
    }

    input.value = '';
  });

  const lastPizza = JSON.parse(localStorage.getItem('lastPizza'));
  if (lastPizza) {
    renderPizza(lastPizza);
  }
});

function renderPizza(pizza) {
  const pizzaCard = document.createElement('div');
  pizzaCard.classList.add('pizza-card');

  pizzaCard.innerHTML = `
    <h2>${pizza.nombre}</h2>
    <img src="${pizza.imagen}" alt="${pizza.nombre}">
    <p>Precio: $${pizza.precio}</p>
  `;

  resultContainer.innerHTML = '';
  resultContainer.appendChild(pizzaCard);
}







