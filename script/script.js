document.addEventListener('DOMContentLoaded', function() {
        restaurarImagem('img01', 'leg1');
        restaurarImagem('img02', 'leg2');
        restaurarImagem('img03', 'leg3');
        restaurarImagem('img04', 'leg4');
});

  
  //Slider
   
// Seleciona todas as imagens do slider e todos os pontos (dots)
var imgs = document.querySelectorAll('.slider img');
var dots = document.querySelectorAll('.dot');
var currentImg = 0; // índice da primeira imagem
const intervalo = 4000; // duração (velocidade) do slide

function changeSlide(n) {
    // Reinicia todas as imagens e dots
    for (var i = 0; i < imgs.length; i++) {
    imgs[i].style.opacity = 0;
    imgs[i].style.transition = 'opacity 0.5s';
    dots[i].classList.remove('active');
    dots[i].style.transition = 'all 1s';
}


    currentImg = n; // atualiza o índice da imagem atual

    imgs[currentImg].style.opacity = 1; // mostra a imagem atual
    dots[currentImg].classList.add('active'); // marca o dot como ativo
    dots[currentImg].style.transition = 'all 0.3s';
}

var timer = setInterval(function() {
    changeSlide(currentImg); // chama a função para mostrar a próxima imagem
    currentImg = (currentImg + 1) % imgs.length; // atualiza o índice da próxima imagem
}, intervalo);

// Se n não for undefined, para o timer, atualiza o índice e reinicia o timer
if (n !== undefined) {
    clearInterval(timer);
    timer = setInterval(function() {
        changeSlide(currentImg); // chama a função para mostrar a próxima imagem
        currentImg = (currentImg + 1) % imgs.length; // atualiza o índice da próxima imagem
    }, intervalo);
    currentImg = n; // atualiza o índice da imagem atual
}

function copyText(id) {
    var textToCopy = document.getElementById(id).innerText;

    document.addEventListener('copy', function(e) {
        e.clipboardData.setData('text/plain', textToCopy);
        e.preventDefault();
    });

    document.execCommand('copy');

    
}


var n = 0;
document.querySelectorAll('.heart-checkbox').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        const amado = this.closest('.heart-container');
        if (this.checked) {
            n = n + 1;
            console.log(`Você curtiu ${n} filmes`);
        } else {
            if (n > 0) {
                n += 1;
            }
            n = n - 2;
            console.log(`Você curtiu ${n} filmes`);
        }
    });
});
// Transitionend

document.getElementById('search').addEventListener('focus', function() {
    this.style.width = '250px'; // Largura quando a barra recebe foco
});

document.getElementById('search').addEventListener('blur', function() {
    this.style.width = '180px'; // Largura quando o campo perde foco
    this.style.transition = 'width 0.3s ease-in-out'; // Adiciona a transição
});

document.getElementById('search').addEventListener('transitionstart', function(event) {
    // propertyName é o nome da transicão que terminou (width) e tbm verifica o tamanho final se é 180px
    if (event.propertyName === 'width' && this.style.width === '180px') {
        this.value = ''; // Limpa o valor do input quando a transição de blur (quando a barra perde foco termina
    }
});

// Transitionstart


function ampliarImagem(id, legId) {
    let imagem = document.getElementById(id);
    let legenda = document.getElementById(legId);
    imagem.addEventListener('transitionend', function(event) {
        if (event.propertyName === 'width' && imagem.style.width === '232px') {
            legenda.style.opacity = '1';
            legenda.style.transition = 'opacity 0.3s';
        }
    });
    
    // Aplica as alterações de estilo para ampliar a imagem
    imagem.style.width = '232px';
    imagem.style.height = '332px';
    imagem.style.filter = 'blur(2px) brightness(60%)';
}

function restaurarImagem(id, legId) {
    let imagem = document.getElementById(id);
    let legenda = document.getElementById(legId);
    
    // Aplica as alterações de estilo para restaurar a imagem
    imagem.style.width = '185px';
    imagem.style.height = '265px';
    legenda.style.opacity = '0'; // Oculta a legenda ao restaurar a imagem
    imagem.style.filter = 'unset';
}

function limparTudo() {
    restaurarImagem('img01', 'leg1');
    restaurarImagem('img02', 'leg2');
    restaurarImagem('img03', 'leg3');
    restaurarImagem('img04', 'leg4');
}

