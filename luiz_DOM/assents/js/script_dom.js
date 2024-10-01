// window.alert(`Quer receber informações sobre o nosso newsletter`)
// janela de alerta

// window.confirm(`Quer receber informações sobre o nosso newsletter`)
// confirmação de janela

// window.console(`informação do usuário recebida, sucesso!`)

document.getElementById('add-item-btn').addEventListener('click'  , function(){
    var newItem = document.createElement('li');
    newItem.textContent = 'Spider man';
    document.getElementById('dynamic-list').appendChild(newItem);
})