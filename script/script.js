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