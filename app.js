//imprimir los mensajes desde un array 
//cuando se presione enviar y la caja de texto tenga algo agregar el mensaje al array y al DOM

const $input = document.querySelector(".input");
const $enviar = document.querySelector(".enviar");
const $chat = document.querySelector(".chat");

$enviar.addEventListener("click",() => {
     event.preventDefault()   
     const value = $input.value;

     if (value !== "") {
        const now = new Date();

        const mensajes = {
        time: `${now.getHours()}:${now.getMinutes()}`,
        content: value,
        author: {
            name: "kellyta",
            image: "https://lorempixel.com/output/people-q-g-50-50-1.jpg",
        },
    };
        printMensajes(mensajes);
        mensaje.push(mensajes);
        $input.value = "";
    }   
});


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

function printMensajes(mensajes) { 
    const {author, time, content} = mensajes;
   
    const template = `<li class="cajamensajes">
    <div> 
        <img class="imagperfil" src="${author.image}" alt="imagen-perfil">
        </div>
        <div class="contenido">
        <h4 class="nombre">${author.name}</h4>   
        <p class="time-right">${time}</p>
        <p class="texto"> ${content}</p>
    </div>
    </li>`;
 
    $chat.innerHTML += template;

}  
mensajes.forEach((mensajes) => {
    printMensajes(mensajes);
//for (let i= 0; i < mensajes.length ; i++ ) {
    //printMessage(mensajes[i]);
});   
