const phrases = [
    ['A vida é 10% do que acontece comigo e 90% de como eu reajo a isso.', 'Charles R. Swindoll'],
    ['O único modo de fazer um ótimo trabalho é amar o que você faz.', 'Steve Jobs'],
    ['O sucesso é a soma de pequenos esforços repetidos dia após dia.', 'Robert Collier'],
    ['A felicidade é uma jornada, não um destino.', 'Ben Sweetland'],
    ['A imaginação é mais importante que o conhecimento.', 'Albert Einstein'],
    ['A persistência é o caminho do êxito.', 'Charles Chaplin'],
    ['Acredite em si mesmo e tudo será possível.', 'Albert Einstein'],
    ['Nenhum caminho é longo demais quando um amigo nos acompanha.', 'Autor desconhecido'],
    ['O futuro pertence àqueles que acreditam na beleza de seus sonhos.', 'Eleanor Roosevelt'],
    ['O maior prazer da vida é fazer aquilo que as pessoas dizem que você não é capaz.', 'Walter Bagehot'],
    ['A vida é o que acontece enquanto estamos fazendo planos.', 'John Lennon'],
    ['A sorte favorece a mente preparada.', 'Louis Pasteur'],
    ['A esperança é a última que morre.', 'Ditado popular'],
    ['Se você quer algo que nunca teve, deve estar disposto a fazer algo que nunca fez.', 'Thomas Jefferson'],
    ['A melhor maneira de prever o futuro é criá-lo.', 'Peter Drucker']
];

const phrase_element = document.getElementById('phrase');
const author_element = document.getElementById('author');

var last, penultimate;

function getRandomIndex() {
    let index;
    do {
        index = Math.floor(Math.random() * phrases.length);
    } while (index === last || index === penultimate);

    penultimate = last;
    last = index;

    return index;
}

function loop() {
    if (!phrases.length) {
        phrase_element.innerText = 'Não há frases disponíveis! 😢';
        author_element.innerText = '';
        return;
    }

    let index = getRandomIndex();
    let [phrase, author] = phrases[index] || ['Algo deu errado! 😢', ''];

    phrase_element.innerText = phrase;
    author_element.innerText = author;

    setTimeout(loop, 6000);
}

loop()