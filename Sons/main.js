function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();

    if(elemento === null){
        alert('elemento não encontrado');
    }

    if (elemento != null){

        console.log(elemento.localName === 'audio') 
            elemento.play();
        
      
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

//para
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //template string

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

     tecla.onkeydown = function (evento) {
        
        console.log(evento.code == 'Space')
        if (evento.code === 'Space'){
            tecla.classList.add('ativa');
        }
        if (evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }
        

     }
       
     tecla.onkeyup = function (){
        tecla.classList.remove('ativa');
     }


}
