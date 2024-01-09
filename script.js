const botaoAdicionar = document.getElementById('button-add');
const botaoClear = document.getElementById('button-clear');
const corpoTabela = document.getElementById('corpo-tabela');

botaoAdicionar.addEventListener('click', function(e){
  e.preventDefault();
  adicionarContato();
});

botaoClear.addEventListener('click', function(e){
  e.preventDefault();
  
  corpoTabela.innerHTML = '';
});

function adicionarContato() {
  const nomeInput = document.getElementById('nome');
  const telefoneInput = document.getElementById('telefone');

  const nome = nomeInput.value;
  const telefone = telefoneInput.value;

  if (nome && telefone) {
    const linhaTabela = `<tr><td>${nome}</td><td>${telefone}</td></tr>`;
    corpoTabela.innerHTML += linhaTabela;

    nomeInput.value = '';
    telefoneInput.value = '';
  }
};


