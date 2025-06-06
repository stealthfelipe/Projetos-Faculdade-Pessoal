// Lista de imagens que você deseja usar
const imagens = [
    './img/foto1.jpg',
    './img/foto2.jpg',
    
    
    './img/foto5.webp',
    './img/foto6.jpg',
    './img/foto7.jpg',
    './img/foto8.jpg',
    './img/foto9.jpg',
    './img/foto10.jpg'
];

// Pega a referência da imagem exibida
const imgGaleria = document.getElementById('imagem-galeria');

let indiceAtual = 0; // Começa pela primeira imagem

// Função que troca a imagem a cada 3 segundos
setInterval(() => {
    indiceAtual = (indiceAtual + 1) % imagens.length; // Vai pra próxima ou volta pro início
    imgGaleria.style.opacity = 0;

    setTimeout(() => {
        imgGaleria.src = imagens[indiceAtual];
        imgGaleria.style.opacity = 1;
    }, 500); // Tempo para a transição de fade
}, 3000); // Troca a cada 3 segundos

// Data de início do amor 💖 (você me confirma essa data)
const dataInicio = new Date("2021-02-26T00:00:00"); // Substituir com a sua

function atualizarContador() {
    const agora = new Date();
    const diferenca = agora - dataInicio;

    const segundos = Math.floor(diferenca / 1000) % 60;
    const minutos = Math.floor(diferenca / (1000 * 60)) % 60;
    const horas = Math.floor(diferenca / (1000 * 60 * 60)) % 24;
    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));

    const contador = document.getElementById("contador");
    contador.innerHTML = `${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos... e contando ❤️❤️❤️`;
}

// Atualiza a cada 1 segundo
setInterval(atualizarContador, 1000);

// Chama a função na primeira vez também
atualizarContador();

function criarCoracao() {
    const coracao = document.createElement('div');
    coracao.classList.add('coracao');
    coracao.innerText = '❤️','💖','💘';

    // Posição horizontal aleatória
    coracao.style.left = Math.random() * 100 + "vw";
    // Tamanho aleatório
    coracao.style.fontSize = (Math.random() * 10 + 10) + "px";
    // Velocidade aleatória
    coracao.style.animationDuration = (Math.random() * 3 + 2) + "s";

    document.body.appendChild(coracao);

    // Remove o coração após a animação terminar
    setTimeout(() => {
        coracao.remove();
    }, 5000);
}

// Cria um novo coração a cada 300ms
setInterval(criarCoracao, 300);
