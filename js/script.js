// editei pelo celular...
function mudouTamanho() {
    if (window.innerWidth >= 768) {
        itens.style.display = "block"
        itens.style.paddingBottom = "30px"
    }
    else {
        itens.style.display = "none"
    }
}
function clickMenu() {
    if (itens.style.display == "block") {
        itens.style.display = "none"
    }
    else {
        itens.style.display = "block"
        itens.style.paddingBottom = "30px"
    }
}

function loadMenu() {
    fetch('menu.html') // Faz uma requisição para o arquivo menu.html
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro ao carregar o menu');
        }
        return response.text(); // Converte a resposta para texto
      })
      .then(data => {
        document.getElementById('menu').innerHTML = data; // Insere o conteúdo do menu
      })
      .catch(error => {
        console.error('Erro:', error);
      });
  }

  function loadFooter() {
    fetch('footer.html') // Faz uma requisição para o arquivo footer.html
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro ao carregar o footer');
        }
        return response.text(); // Converte a resposta para texto
      })
      .then(data => {
        document.getElementById('footer').innerHTML = data; // Insere o conteúdo do footer
      })
      .catch(error => {
        console.error('Erro:', error);
      });
  }
  window.addEventListener('load', loadMenu);
  window.addEventListener('load', loadFooter);