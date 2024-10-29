// Carrossel de Texto
const messages = [
    "Ainda lembro a primeira aula, ainda lembro os primeiros sorrisos e nossas primeiras trocas. Vocês sabem que desde o início, em cada aula, habia empatia e aprendizado. Vocês são estranhos, mas nos entendemos, aprendemos e ensinamos. Agora que estamos finalizando fica um vazio e um sentimento bom. Um vazio por saber que não nos encontraremos no próximo ano e um sentimento bom por saber que vocês tem um caminho todo para percorrer. Desejo todas as felicidades sempre e que a cada obstáculo vocês se lembrem do potencial que cada um tem. Vocês sempre serão meus lilicas. Força Sempre! Prof. Breno.",
    "Este momento marca o final de uma importante etapa na vida de vocês, onde já se passou toda a fase de escola que tanto a gente escuta quando é mais novo. Agora é a hora de conquistar o mundo e provar que ele é pequeno demais pra cada conquista que vocês vão ter. Quando lembrarem da sua época de escola, lembre-se daquele tutor abobado que estava nervoso em suas primeiras experências como professor, lembre das aulas de matemáticas, onde só tinham letras, lembre das piadas desajeitadas, fora isso, gostaria de agradecer por fazerem parte da minha vida e easpero ter pelo menos dito alguma frase que inspire vocês para o resto da vida. Prof. Leo.",
    "Que as aprendizagens, os valores e a alegria permaneçam no coração e na vida de cada um de vocês! Parabéns, Deus ilumine e abençoe cada um de vocês! Saibam que estarão sempre em meus pensamentos e orações. Amo vocês!!! Eunice",
    "Chegou o momento de nos despedirmos. Ao longo deste ano, compartilhei com vocês não penas conhecimentos, mas também momentos inesquecíveis. Estou orgulhoso de cada um de vocês e do crescimento que vi ao longo dessa jornada. Lembrem-se de que o futuro é cheio de possibilidades e que sempre poderão contar comigo como um torcedor da sua trajetória. Sigam seus sonhos e nunca parem de aprender. Boa sorte nessa nova etapa!! E boa sorte para você, Byanka! Prof. Teteu",
    "Cada fim de ano letivo é uma nova oportunidade de recomeçar, aprender e crescer. Lembre-se: o conhecimento é a chave que abre portas para o futuro brilhante. Acreditem em vocês mesmos e sigam em frente com coragem! Prof. Rodrigo",
    "O resultado do esforço é muito importante, mas o processo é mais ainda! Pois as ações precedem os efeitos. Tudo podemos e o caminho: ensistir e persistir. Zattoni.",
    "Jovens, vocês chegara, neste momento de transição... a realidade é simples, e nessa simplicidade ela se torna complexa. Sejam pacientes, mas não se esqueçam da inquietude! Sejam serenos, mas nunca esqueçam da revolta! 'Distraídos, venceremos!'",
    "Queridíssemos Formandos. Parafraseando um desconhecido: 'Tem gente que faz tão bem pra gente que até parece que é remedinho...' E vocês são! Companhia para horas difíceis e fáceis também. Sorriso fácil e choro mais fácil ainda. E pra finalizar: 'Te longo' pra essa turma, porque 'Te curto' é muito pouco! Sucesso, sucesso, sucesso! Dire Lucimara.",
    "Alunos, este é um momento especial e único na vida. Durante todo o ano pude ver e observar a evolução de cada um. Me sinto lisonjeada de poder acompanhar todo o desenvolvimento e as experiências que vocês passaram durante todo o ensino médio. Torço para que todos alcancem tudo o que desejarem, pois acima de tudo merecem o mundo. Yasmin (obs.: tomem juízo.)",
    "A única coisa que eu quero de vocês é que vocês queiram sempre mais. Educação e Futuro tem que andar juntos. Lembrem sempre de onde vieram e para onde vão.ç Um beijo e um queijo. Prof. João Lipka.",
    "Olhem para trás com orgulho e para frente com determinação. Cada desafio superado os preparou para o futuro. Espero que todos vocês realizem seus sonhos. Com carinho, Ton.",
    "Meus amores, que esta fase que inicia, seja repleta de sonhos e realizações. 'Sonhem sempre, pois vocês podem tudo que quiserem.' Acredito em todos vocês. Valeixo."

];
let currentMessageIndex = 0;

function showNextMessage() {
    const carouselText = document.getElementById("carousel-text");
    carouselText.style.opacity = 0;

    setTimeout(() => {
        carouselText.innerHTML = `<p>${messages[currentMessageIndex]}</p>`;
        carouselText.style.opacity = 1;
        currentMessageIndex = (currentMessageIndex + 1) % messages.length;
    }, 500);
}

setInterval(showNextMessage, 6500); // Alterna mensagens a cada 3 segundos

// Carrossel de Imagens
let currentSlide = 0;
const slides = document.querySelectorAll(".carousel-slide");

function showSlide(index) {
    currentSlide = index;
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }
    const offset = -currentSlide * 100;
    document.querySelector(".carousel").style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

setInterval(nextSlide, 4500); // Alterna imagens a cada 3 segundos
