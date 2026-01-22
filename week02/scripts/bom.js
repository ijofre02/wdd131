const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('ul');

//Create a li element that will hold each entry's
// chapter title and an associated delete button.

//const li = document.createElement('li');
/* Eso no lo agrega al HTML todavía — solo lo crea en memoria.
Después vos le podés agregar texto, clases, botones, etc., y 
al final meterlo en el DOM con appendChild(). */

/* Create a delete button. */
//const deleteButton = document.createElement('button');

/* Populate the li element variable's textContent or innerHTML with the input value. */
//li.textContent = input.value;
/* Los inputs NO guardan su texto entre etiquetas (como <p> o <h1>).
Su texto SIEMPRE está en la propiedad: .value */




/* New activity */
button.addEventListener('click', function () {  // Code to execute when the button is clicked
  if (input.value.trim() !== '') { 
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');

    li.textContent = input.value;
    deleteButton.textContent = '❌';

    li.append(deleteButton);
    list.append(li);

    deleteButton.addEventListener('click', function () {
      list.removeChild(li);
      input.focus();
    
    });

    input.value = '';
    input.focus();

  }
});

