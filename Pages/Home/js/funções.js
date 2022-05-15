function AtivarModal(Animal) {

    var myModal = new bootstrap.Modal(document.getElementById('exempleModal'), {
        keyboard: false
      })
      
      var caminhoImagem = "./img/cardsCuriosidades/" + Animal + ".png";
      
      var modal = document.getElementById("modal-curiosidades");
      
      modal.setAttribute('src', caminhoImagem)
      myModal.show()
}