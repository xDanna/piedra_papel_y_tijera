document.addEventListener("DOMContentLoaded", function () {
    //ESCENARIOS
    const escInicio = document.querySelector(".inicio");
    const escUsuarioElige = document.querySelector(".usuario_elige");
    const escComputadorElige = document.querySelector(".computador_elige");
    const escResultado = document.querySelector(".resultado");
    //ELEMENTOS DEL DOM
    const btnInicio = document.querySelector(".btn_inicio");
    const btnPiedra = document.querySelector(".btn_piedra");
    const btnPapel = document.querySelector(".btn_papel");
    const btnTijera = document.querySelector(".btn_tijera");
    const txtEleccionComputador = document.querySelector(".eleccion_computador");
    const btnContinuar = document.querySelector(".btn_continuar");
    const txtResultado = document.querySelector(".resultado h1");
    //LOGICA
    let usuarioElige;
    let computadorElige;
    //INICIALIZACIÓN
    escUsuarioElige.style.display = "none";
    escComputadorElige.style.display = "none";
    escResultado.style.display = "none";
    //CUANDO SE PRESIONA EL BOTON INICIAR

    btnInicio.addEventListener("click", function () {
        escUsuarioElige.style.display = "block";
        escInicio.style.display = "none";
    });

    function eleccionUsuario(seleccion) {
        if (seleccion == "piedra") {
            return seleccion;
        } else if (seleccion == "papel") {
            return seleccion;
        } else if (seleccion == "tijera") {
            return seleccion;
        }
    }
    function eleccionComputador() {
        let elecC = Math.random();
        if (elecC < 0.33333333333) {
            elecC = "piedra";
        } else if (elecC < 0.6666666) {
            elecC = "papel";
        } else {
            elecC = "tijera";
        }
        return elecC;

    }

    function resultado(u, c) {
        if ((u == "piedra" && c == "piedra") ||
            (u == "papel" && c == "papel") ||
            (u == "tijera" && c == "tijera")) {
            txtResultado.innerHTML =
                `Es un empate: El usuario eligió ${u} y el computador ${c}`;
        } else if (
            (u == "piedra" && c == "tijera") ||
            (u == "papel" && c == "piedra") ||
            (u == "tijera" && c == "papel")) {
            txtResultado.innerHTML =
                `El usuario gana: El usuario eligió ${u} y el computador ${c}`;
        } else if (
            (u == "piedra" && c == "papel") ||
            (u == "papel" && c == "tijera") ||
            (u == "tijera" && c == "piedra")
        ) {
            txtResultado.innerHTML =
                `El usuario pierde: El usuario eligió ${u} y el computador ${c}`;
        }
    }

    btnPiedra.addEventListener("click", function(){
        usuarioElige = eleccionUsuario("piedra");
        if(escUsuarioElige.style.display="block"){
            escUsuarioElige.style.display="none";
            escComputadorElige.style.display="block";
            computadorElige = eleccionComputador();
            txtEleccionComputador.innerHTML=computadorElige;
        }
    })


    });
