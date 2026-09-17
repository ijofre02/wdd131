const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', function () {
  if (input.value.trim() !== '') { /* Si no es estrictamente igual se ejecuta */
    
    
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');
    
    li.textContent = input.value; /* .value toma el valor de input */
    
    deleteButton.textContent = '❌'; /* Lo cree, pero no esta en ningun lado aun */
    
    /* Los lectores de pantalla no leen la X, le metemos un label */
    deleteButton.setAttribute('aria-label', 'Remove' + input.value);
    
    li.append(deleteButton); /* Ahora va estar dentro de li */
    list.append(li);

    deleteButton.addEventListener('click', function () {
      list.removeChild(li);
      input.focus();
    });

    input.value = '';
    input.focus();
  }
});
