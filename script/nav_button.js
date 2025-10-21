document.addEventListener("DOMContentLoaded",setup); 

var menu_button;
var side_bar;

var is_menu_open = false;

function setup(){
    /*Encontrar los elementos de menu*/
    menu_button = document.getElementById("nav_menu_button");
    side_bar = document.getElementById("sidebar");
    document.addEventListener("resize",resized_screen);
    /*Asignar botones para cerrar menu */
    assign_buttons();

    if (menu_button){

        /*Checar si esta en dispositivo movil*/
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

        /*Conectar la funcion de touchend solo si esta en dispositivo movil*/
        if (isMobile){
            menu_button.addEventListener("touchend",toggle_menu);
        }else{
            menu_button.addEventListener("click",toggle_menu);
        }
    }
}
function toggle_menu(){
    /*Checar si el boton de navegacion es visible para activar el menu*/
    const estilos_computados = window.getComputedStyle(menu_button);

    if (estilos_computados.display != "none"){
        switch (is_menu_open) {
            case false:
                open_menu();    
                break;
            case true:
                close_menu();    
                break;
            default:
                break;
        }
    }
}

function open_menu(){
    if (is_menu_open == false){
        make_side_bar_small();
        is_menu_open = true;
    }
}
function close_menu(){
    if (is_menu_open == true){
        make_side_bar_big();
        is_menu_open = false;
    }
}

function make_side_bar_small(){
    side_bar.classList.add("nav_menu_side");
    side_bar.classList.remove("nav_menu_big");
}

function make_side_bar_big(){
    side_bar.classList.remove("nav_menu_side");
    side_bar.classList.add("nav_menu_big");
}

function assign_buttons(){
    const buttons = document.getElementsByClassName("sidemenu_button");

    /*for (index = 0; index < buttons.length; index++) {
        const element = buttons[index];
        element.addEventListener("click",close_menu);
        element.addEventListener("touchend",close_menu);
        
    }*/
}

function resized_screen(){
    const new_width = window.innerWidth;
    const new_height = window.innerHeight;
}