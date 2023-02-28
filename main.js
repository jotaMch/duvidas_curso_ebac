const form = document.getElementById('form-atividade');
form.addEventListener('submit', function(e) {
    e.preventDefault();

    const InputNomeContato = document.getElementById('nome-contato');
    const InputNumeroContato = document.getElementById('numero-contato');

    let linha = '<tr>';
    linha += `<td>${InputNomeContato.value}</td>`;
    linha += `<td>${InputNumeroContato.value}</td>`;
    linha += `<td>${InputNumeroContato.value >= 9999999999 ? 'Concluido' : 'Erro'}</td>`;
    linha += `<td>${}</td>`;
    linha += `</tr>`;

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHtMl = linha;
});