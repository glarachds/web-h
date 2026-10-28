//Modo Oscuro
let boton_modo = document.getElementById("boton-modo-oscuro");

function cambiarModo() {
    let t1 = document.getElementById("tarjeta1");
    let t2 = document.getElementById("tarjeta2");
    let tp = document.getElementById("tarjeta-plantel");
    let link = document.getElementById("link-volver");

    if (document.body.style.backgroundColor === "black") {
        // Volver a modo claro
        document.body.style.backgroundColor = "lightgray";
        document.body.style.color = "black";
        if (t1) {
            t1.style.backgroundColor = "white";
            t1.style.color = "black";
        }
        if (t2) {
            t2.style.backgroundColor = "white";
            t2.style.color = "black";
        }
        if (tp) {
            tp.style.backgroundColor = "white";
            tp.style.color = "black";
        }
        if (link) {
            link.style.color = "darkblue";
        }
    } else {
        // Activar modo oscuro
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        if (t1) {
            t1.style.backgroundColor = "gray";
            t1.style.color = "white";
        }
        if (t2) {
            t2.style.backgroundColor = "gray";
            t2.style.color = "white";
        }
        if (tp) {
            tp.style.backgroundColor = "gray";
            tp.style.color = "white";
        }
        if (link) {
            link.style.color = "lightblue";
        }
    }
}

if (boton_modo) {
    boton_modo.addEventListener("click", cambiarModo);
}

//CSS Dinámico
let boton_color = document.getElementById("boton-cambiar-color");
let color_rojo = false;

function cambiarColorFondo() {
    let banner = document.getElementById("banner");
    if (banner) {
        if (color_rojo === true) {
            banner.style.backgroundColor = "royalblue";
            color_rojo = false;
        } else {
            banner.style.backgroundColor = "darkred";
            color_rojo = true;
        }
    }
}

if (boton_color) {
    boton_color.addEventListener("click", cambiarColorFondo);
}

//Consumir una API
let boton_clima = document.getElementById("boton-cargar-clima");
let texto_clima = document.getElementById("texto-clima");

async function obtenerClima() {
    let response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=-33.3959&longitude=-70.5007&current=temperature_2m");
    let data = await response.json();
    console.log(data);

    let temp = data["current"]["temperature_2m"];
    texto_clima.innerText = "Temperatura actual en el Claro Arena: " + temp + " °C";
}

if (boton_clima) {
    boton_clima.addEventListener("click", obtenerClima);
}