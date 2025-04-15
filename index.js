function openNewBackgroundTab() {
    var a = document.createElement("a");
    a.href = event.target.dataset.source;
    a.target = "_blank";
    a.rel = "noopener noreferrer";

    a.dispatchEvent(evt);

    window.open(window.location.pathname);

    window.close();
}

document.getElementById('frmCadastro').addEventListener('submit', async (e) => {
    e.preventDefault();
    const nome = document.getElementById('txtNome').value;
    const login = document.getElementById('txtLogin').value;
    const senha = document.getElementById('txtSenha').value;
    const tipo = "cadastro";

    const response = await fetch('/api/mysql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, login, senha, tipo })
    });

    const result = await response.json();
    console.log(result.message);

});