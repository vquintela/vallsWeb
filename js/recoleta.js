// BOTONES SERVICIOS
const botonesServicios = document.querySelectorAll('.btn-serv'); 
botonesServicios.forEach(element => {
    element.addEventListener('click', (e) => {
        if(e.target.classList.contains('fa-plus')) {
            e.target.classList.replace('fa-plus', 'fa-times');
        } else {
            e.target.classList.replace('fa-times', 'fa-plus');
        }
        e.target.parentElement.parentElement.getElementsByClassName('cont')[0].classList.toggle('menu-contenedor-show');
    });  
});