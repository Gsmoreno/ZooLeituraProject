function AtivarModal(Animal) {
  var audio = new Audio();
  var caminhoSom = "./songs/" + Animal + "Som.mp3";

  audio.src = caminhoSom;
  audio.play();

  var myModal = new bootstrap.Modal(document.getElementById("exempleModal"), {
    keyboard: false,
  });

  var caminhoImagem = "./img/cardsCuriosidades/" + Animal + ".png";
  var modal = document.getElementById("modal-curiosidades");

  modal.setAttribute("src", caminhoImagem);
  myModal.show();
}
