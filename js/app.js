/* ==============================
 Objetos con sus Propiedades
================================ */

let item = new Object({
	paginacion: document.querySelectorAll('#paginacion li'),
	actions: 0,
	cajaSlide: document.querySelector("#slide ul"),
	animacionSlide: "fade",
	imgSlide: document.querySelectorAll('#slide ul li'),
	avanzar: document.querySelector("#slide #avanzar"),
	retroceder: document.querySelector("#slide #retroceder"),
});


/* ==============================
 Objetos con sus metodos
================================ */

let metodos = new Object({

	inicioSlider: function(){

		for(let i = 0; i < item.paginacion.length; i++){
			 item.paginacion[i].addEventListener("click", metodos.paginacionSlide);
		};

		item.avanzar.addEventListener("click", metodos.avanzar);
		item.retroceder.addEventListener("click", metodos.retroceder);
	},

	paginacionSlide: function(event){

		item.actions = event.target.parentNode.getAttribute("item")-1;
		metodos.dispatchSlide(item.actions);	
	},

	dispatchSlide: function(value){


		item.cajaSlide.style.left = value * -100+"%";

		for(let i = 0; i < item.paginacion.length; i++){
			 item.paginacion[i].style.opacity = .5;
		};

		item.paginacion[value].style.opacity = 1;

		if(item.animacionSlide === "slide"){
			item.cajaSlide.style.transition = ".7s left ease-in-out";
		};

		if(item.animacionSlide === "fade"){

			for(let i = 0; i < item.imgSlide.length; i++){
				item.imgSlide[i].style.opacity = 0;
			};

			item.imgSlide[value].style.transition = ".7s opacity ease-in-out";
			item.imgSlide[value].style.opacity = 1;
		}
	},

	avanzar: function() {

		if (item.actions == item.imgSlide.length - 1) {

			item.actions = 0;

		} else {

			item.actions++;

		}

		console.log(item.actions);

		metodos.dispatchSlide(item.actions);
	},

	retroceder: function(){

		if (item.actions == 0) {

			item.actions = item.imgSlide.length - 1;

		} else {

			item.actions--;

		}

		console.log(item.actions);

		metodos.dispatchSlide(item.actions);

	},


});

metodos.inicioSlider();
