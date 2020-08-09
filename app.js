//imprimir los mensajes desde un array 
//cuando se presione enviar y la caja de texto tenga algo agregar el mensaje al array y al DOM

const $chat = document.querySelector('.chat');
const  mensajes = [
    {
    time: "11:02",
    content: "hola como vas?",
    author: {
        name: "Gina Gonzales",
        image: "https://lorempixel.com/output/people-q-g-50-50-1.jpg",
      },
    },
    {
    time: "11:10",
    content: "ya tenemos todo listo!",
    author: {
        name: "Kelly Correa",
        image: "https://lorempixel.com/output/people-q-c-50-50-9.jpg",
      },
    },
    {
    time: "11:30",
    content: "Perfecto¡",
    author: {
        name: "Alexandra Lamadrid",
        image: "https://lorempixel.com/output/nature-q-c-50-50-10.jpg",
      },
    },
];

function printMessage(mensajes) { 
    const tamplate = <li>
     <img class= "imagperfil" src="${author.image}" alt="imagen-perfil" />
     <strong class="nombre">  ${author.name} </strong>   
     <span class="time-right"> ${time}</span>
     <span class="texto"> ${content}</span>
     </li>;
    
     console.log(template);
 
}  
    for (let i= 0; i < mensajes.length ; i++ ) {
    printMessage(mensajes[i]);
}