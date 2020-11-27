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

// BOTONES PATOLOGIAS
const btnPatologias = document.querySelectorAll('.btn-patologias');
btnPatologias.forEach(element => {
    element.addEventListener('click', e => {
        if(e.target.classList.contains('fa-plus')) {
            e.target.classList.replace('fa-plus', 'fa-chevron-down');
        } else {
            e.target.classList.replace('fa-chevron-down', 'fa-plus');
        }
        e.target.parentElement.nextElementSibling.getElementsByClassName('patologias-subcont-item')[0].classList.toggle('menu-pato-show');
        document.querySelectorAll('.pato-sub').forEach(e => {
            e.classList.replace('fa-chevron-down', 'fa-chevron-right');
            e.parentElement.nextElementSibling.getElementsByClassName('patologias-texto-contenido')[0].classList.remove('menu-dolor-show');
        }); 
        // document.querySelectorAll('.pato-sub').forEach(e => e.classList.remove('menu-dolor-show'));
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