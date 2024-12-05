// window.alert(`Quer receber informações sobre o nosso newsletter`)
// janela de alerta

// window.confirm(`Quer receber informações sobre o nosso newsletter`)
// confirmação de janela

// window.console(`informação do usuário recebida, sucesso!`)

// document.getElementById('add-item-btn').addEventListener('click'  , function(){
//     var newItem = document.createElement('li');
//     newItem.textContent = 'Spider man';
//     document.getElementById('dynamic-list').appendChild(newItem);
// })

// document.getElementById('change-color-btn').addEventListener('click', function(){
//     document.body.style.backgroundColor =  'lightblue';
// })

//esse código está fazendo com que o elemento input seja ou não respondido para acontecer uma ação
document.getElementById('user-form').addEventListener('submit', function(e){
    var name = document.getElementById('name').value;
    // está criando uma variável para o input: name 

    if (name === '') {
        e.preventDefault();
        document.getElementById('error-message').style.display = 'block'
    }
    //está criando uma condição para que caso o input não seja respondido aparecerá uma mensagem
    
});