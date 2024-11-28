export default function cardapioLista() {
  /* Função para alterar a estilização quando a lista de categorias for muito grande */

  const itensLista = document.querySelectorAll(".cardapio-nav-item");
  const cardapioConteudo = document.querySelector(".cardapio-conteudo");

  if (itensLista && cardapioConteudo) {
    if (itensLista.length >= 5) {
      cardapioConteudo.dataset.listaGrande = "true";
    }
  }
}
