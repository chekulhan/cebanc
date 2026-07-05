


const body = document.body;
body.append("Hola a todos!");

//const p = body.appendChild("p");  // error

// crear y despues append
const p = document.createElement('p');
p.innerText = "Here is a P tag";
body.appendChild(p);


// innerHTML vs innerText (texto que es visible solamente) vs textContent (con espacio)
const div = document.querySelector('div');
console.log(div.innerHTML);
console.log(div.innerText); 
console.log(div.textContent);

div.textContent='Aqui tenemos <strong>bold</strong>';
div.innerText='Aqui tenemos <strong>bold</strong>';
div.innerHTML ='Aqui tenemos <strong>bold</strong>';

/* 
querySelector
Class selector: Use . followed by the class name.
ID selector: Use # followed by the id name.
*/

// remove content
const span = document.querySelector('.hola');

if (span) {
    console.log(span.innerHTML);
}
span.remove();
// removeChild existe tambien


// classList y style
const h2 = document.querySelector('h2');
h2.classList.add('new-class1');
h2.classList.add('new-class2');
//h2.classList.remove('new-class2');
h2.style.backgroundColor='red';


// Attributes
const h1 = document.querySelector('h1');
console.log(h1.getAttribute('title'));
h1.setAttribute('title', 'This is a new heading');
h1.removeAttribute('title');

console.log(h1.dataset);
h1.dataset.test = 'this is a new attribute';
