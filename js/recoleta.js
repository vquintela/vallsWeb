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

// BOTONES DOLOR
const botonesDolor = document.querySelectorAll('.btn-dolor');
botonesDolor.forEach(element => {
    element.addEventListener('click', e => {
        if(e.target.classList.contains('fa-plus')) {
            e.target.classList.replace('fa-plus', 'fa-chevron-down');
        } else {
            e.target.classList.replace('fa-chevron-down', 'fa-plus');
        }
        e.target.parentElement.nextElementSibling.getElementsByClassName('dolor-texto')[0].classList.toggle('menu-dolor-show');
    });
});

// BOTONES PATOLOGIAS SUBCATEGORIAS
const btnSub = document.querySelectorAll('.pato-sub');
btnSub.forEach(element => {
    element.addEventListener('click', e => {
        if(e.target.classList.contains('fa-chevron-right')) {
            e.target.classList.replace('fa-chevron-right', 'fa-chevron-down');
        } else {
            e.target.classList.replace('fa-chevron-down', 'fa-chevron-right');
        }
        e.target.parentElement.nextElementSibling.getElementsByClassName('patologias-texto-contenido')[0].classList.toggle('menu-dolor-show');
    });
});

// BOTONES CERRAR DROPDOWN
const btnCerrar = document.querySelectorAll('.boton-cerrar-drop');
btnCerrar.forEach(element => {
    element.addEventListener('click', e => {
        e.target.parentElement.parentElement.classList.remove('menu-dolor-show');
        if(e.target.parentElement.classList.contains('dolor')) {
            e.target.parentElement.parentElement.parentElement.previousElementSibling.getElementsByClassName('fas')[0].classList.replace('fa-chevron-down', 'fa-plus');
            location.href = '#dolor';
        } else {
            e.target.parentElement.parentElement.parentElement.previousElementSibling.getElementsByClassName('fas')[0].classList.replace('fa-chevron-down', 'fa-chevron-right')
            location.href = '#patologias';
        }
    });
});

// LINK
document.querySelector('.especialista-link').addEventListener('click', () => {
    location.href = `#dolor`
});