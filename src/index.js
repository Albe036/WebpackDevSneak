/* import "./style.css"; */
require('./style.css')
import usuarios from "./datas.json";
import menu from './icons/menu.png';
import ex from './icons/ex.png';
import hor from './icons/hor.png';
import ver from './icons/ver.png';
import face from './icons/face.png'
import tw from './icons/tw.png'
import inst from './icons/inst.png'
import link from './icons/lk.png'
import pin from './icons/pin.png'

document.getElementById("menu").setAttribute("src", menu);
document.getElementById("brand").setAttribute("src", ex);
document.getElementById("v1").setAttribute("src", ver);
document.getElementById("v2").setAttribute("src", hor);

let display = false;
const items = document.getElementById("items");

document.getElementById("menu").addEventListener("click", () => {
  display
    ? items.classList.remove("navbar-items_show")
    : items.classList.add("navbar-items_show");
  display = !display;
});

const contenedor = document.getElementById("cards");

const renderizar = (usuarios_final) => {
  usuarios_final.forEach((e) => {
    const id = document.createTextNode(e.id);
    const title = document.createTextNode(e.title);
    const description = document.createTextNode(e.description);
    const url = document.createTextNode(e.url);

    const main = document.createElement("main");
    const img = document.createElement("img");
    const container_title = document.createElement("h1");
    const container_desc = document.createElement("p");
    const div = document.createElement("div");

    img.setAttribute("src", e.url);

    main.appendChild(img);
    container_title.appendChild(title);
    container_desc.appendChild(description);

    /* main.appendChild(id); */
    div.appendChild(container_title);
    div.appendChild(container_desc);
    main.appendChild(div);
    contenedor.appendChild(main);
  });
};

const cards = document.getElementById("cards");

const v1 = document.getElementById("v1");
v1.addEventListener("click", () => {
  cards.classList.remove("cards2");
  cards.classList.add("cards");
});

const v2 = document.getElementById("v2");
v2.addEventListener("click", () => {
  cards.classList.remove("cards");
  cards.classList.add("cards2");
});

renderizar(usuarios);

document.getElementById("all").addEventListener("click", (e) => {
  e.preventDefault();
  const children = contenedor.childNodes.length;
  for (let i = 0; i < children; i++) {
    contenedor.removeChild(contenedor.firstChild);
  }
  renderizar(usuarios);
});

document.getElementById("branding").addEventListener("click", (e) => {
  e.preventDefault();
  const children = contenedor.childNodes.length;
  for (let i = 0; i < children; i++) {
    contenedor.removeChild(contenedor.firstChild);
  }
  const result = usuarios.filter((elemento) => elemento.type === "branding");
  renderizar(result);
});

document.getElementById("web").addEventListener("click", (e) => {
  e.preventDefault();
  const children = contenedor.childNodes.length;
  for (let i = 0; i < children; i++) {
    contenedor.removeChild(contenedor.firstChild);
  }
  const result = usuarios.filter((elemento) => elemento.type === "web");
  renderizar(result);
});

document.getElementById("app").addEventListener("click", (e) => {
  e.preventDefault();
  const children = contenedor.childNodes.length;
  for (let i = 0; i < children; i++) {
    contenedor.removeChild(contenedor.firstChild);
  }
  const result = usuarios.filter((elemento) => elemento.type === "app");
  renderizar(result);
});

document.getElementById("photo").addEventListener("click", (e) => {
  e.preventDefault();
  const children = contenedor.childNodes.length;
  for (let i = 0; i < children; i++) {
    contenedor.removeChild(contenedor.firstChild);
  }
  const result = usuarios.filter((elemento) => elemento.type === "photography");
  renderizar(result);
});

/* setTimeout(() => {
    document.getElementById("img_main").setAttribute("src", "https://images.unsplash.com/photo-1503437313881-503a91226402?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=889&q=80")
},5000); */

document.getElementById("face").setAttribute("src", face);
document.getElementById("pin").setAttribute("src", pin);
document.getElementById("linked").setAttribute("src", link);
document.getElementById("tw").setAttribute("src", tw);
document.getElementById("inst").setAttribute("src", inst);