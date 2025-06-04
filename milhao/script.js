//Perguntas, respostas e dicas
const perguntas = [
    {
        pergunta: "Qual a cor do céu em um dia ensolarado?",
        resposta: ["(A) Verde", "(B) Azul", "(C) Vermelho", "(D) Amarelo"],
        correta: "(B) Azul",
        dica: "É a cor mais associada à tranquilidade e profundidade"
    },
    {
        pergunta: "Quanto é 2+2?",
        resposta: ["(A) 3", "(B) 5", "(C) 4", "(D) 6"],
        correta: "(C) 4",
        dica: "É o resultado de dobrar o número dois"
    },
    {
        pergunta: "Qual animal é conhecido como o melhor amigo do homem?",
        resposta: ["(A) Gato", "(B) Leão", "(C) Cachorro", "(D) Cavalo"],
        correta: "(C) Cachorro",
        dica: "Faz parte de muitas famílias e é símbolo de lealdade"
    },
    {
        pergunta: "Qual fruta é amarela e rica em potássio",
        resposta: ["(A) Maçã", "(B) Banana", "(C) Morango", "(D) Laranja"],
        correta: "(B) Banana",
        dica: "Comum no café da manhã e usada em vitaminas"
    },
    {
        pergunta: "Qual o plural de pão?",
        resposta: ["(A) Pões", "(B) Pãos", "(C) Pães", "(D) Paes"],
        correta: "(C) Pães",
        dica: "É uma palavra com plural irregular e acentuado"
    },
    {
        pergunta: "Quantos lados tem um triângulo?",
        resposta: ["(A) 2", "(B) 4", "(C) 3", "(D) 5"],
        correta: "(C) 3",
        dica: "É o menor número possível de lados para formar uma figura fechada"
    },
    {
        pergunta: "Qual o continente do Brasil?",
        resposta: ["(A) Europa", "(B) America do Sul", "(C) Africa", "(D) Asia"],
        correta: "(B) America do Sul",
        dica: "É o mesmo continente da Argentina e do Chile"
    },
    {
        pergunta: "Qual o maior planeta do sistema solar?",
        resposta: ["(A) Terra", "(B) Júpiter", "(C) Saturno", "(D) Marte"],
        correta: "(B) Júpiter",
        dica: "É o gigante gasoso com a Grande Mancha Vermelha"
    },
    {
        pergunta: "Quem pintou a Monalisa?",
        resposta: ["(A) Van Gogh", "(B) Michelangelo", "(C) Da Vinci", "(D) Picasso"],
        correta: "(C) Da Vinci",
        dica: "Foi também inventor e estudioso da anatomia"
    },
    {
        pergunta: "Qual o símbolo químico da água?",
        resposta: ["(A) O2", "(B) CO2", "(C) H2O", "(D) H2"],
        correta: "(C) H2O",
        dica: "Combinação de dois elementos fundamentais à vida"
    },
    {
        pergunta: "Quem foi o primeiro presidente do Brasil?",
        resposta: ["(A) Getúlio Vargas", "(B) Deodoro da Fonseca", "(C) Lula", "(D) Juscelino"],
        correta: "(B) Deodoro da Fonseca",
        dica: "Liderou a proclamação da República"
    },
    {
        pergunta: "Qual o maior oceano da Terra?",
        resposta: ["(A) Índico", "(B) Atlântico", "(C) Antártico", "(D) Pacífico"],
        correta: "(D) Pacífico",
        dica: "Recebeu seu nome por causa da calmaria encontrada por navegadores"
    },
    {
        pergunta: "Quantas sílabas tem a palavra computador?",
        resposta: ["(A) 5", "(B) 3", "(C) 4", "(D) 1"],
        correta: "(C) 4",
        dica: "A divisão silábica é essencial para a pronúncia correta"
    },
    {
        pergunta: "Quantos segundos tem 1 minuto?",
        resposta: ["(A) 100", "(B) 60", "(C) 30", "(D) 90"],
        correta: "(B) 60",
        dica: "É múltiplo comum de 10 e 6"
    },
    {
        pergunta: "Qual o número PI arredondado?",
        resposta: ["(A) 3,14", "(B) 2,17", "(C) 4", "(D) 5,01"],
        correta: "(A) 3,14",
        dica: "Começa com 3 e é usado para calcular áreas de círculos"
    },
    {
        pergunta: "Qual país tem o formato aproximado de uma bota?",
        resposta: ["(A) Espanha", "(B) Argentina", "(C) Itália", "(D) Rússia"],
        correta: "(C) Itália",
        dica: "Fica no sul da Europa e é conhecido por sua gastronomia"
    },
    {
        pergunta: "Quem escreveu Dom Casmurro?",
        resposta: ["(A) Machado de Assis.", "(B) José de Alencar.", "(C) Clarice Lispector.", "(D) Monteiro Lobato."],
        correta: "(A) Machado de Assis.",
        dica: "Fundador da Academia Brasileira de Letras"
    },
    {
        pergunta: "O que é um haicai?",
        resposta: ["(A) Um animal.", "(B) Um prato japonês.", "(C) Um poema curto.", "(D) Uma espada."],
        correta: "(C) Um poema curto.",
        dica: "Tem origem oriental e segue uma estrutura específica"
    },
    {
        pergunta: "Qual é o menor país do mundo?",
        resposta: ["(A) Mônaco.", "(B) Vaticano.", "(C) Malta", "(D) Andorra."],
        correta: "(B) Vaticano.",
        dica: "Apesar do tamanho, é sede de uma das maiores religiões"
    },
    {
        pergunta: "Qual o nome do osso da coxa?",
        resposta: ["(A) Fíbula.", "(B) Úmero.", "(C) Fêmur.", "(D) Tíbia."],
        correta: "(C) Fêmur.",
        dica: "É o osso mais longo do corpo humano"
    },
    {
        pergunta: "Quem descobriu a penicilina?",
        resposta: ["(A) Louis Pasteur.", "(B) Albert Einstein.", "(C) Alexander Fleming.", "(D) Isaac Newton."],
        correta: "(C) Alexander Fleming.",
        dica: "Fez a descoberta por acaso, ao estudar fungos"
    },
    {
        pergunta: "Qual o idioma falado no Irã?",
        resposta: ["(A) Árabe.", "(B) Persa.", "(C) Turco.", "(D) Curdo."],
        correta: "(B) Persa.",
        dica: "Também é conhecido como farsi"
    },
    {
        pergunta: "Qual o maior deserto do mundo?",
        resposta: ["(A) Saara.", "(B) Gobi.", "(C) Antártida.", "(D) Kalahari."],
        correta: "(C) Antártida.",
        dica: "É um deserto gelado, não de areia"
    },
    {
        pergunta: "Quantos cromossomos tem o ser humano?",
        resposta: ["(A) 46.", "(B) 44.", "(C) 23.", "(D) 48."],
        correta: "(A) 46.",
        dica: "São 23 pares"
    },
    {
        pergunta: "Qual a capital do Azerbaijão?",
        resposta: ["(A) Tbilisi.", "(B) Baku.", "(C) Yerevan.", "(D) Kiev."],
        correta: "(B) Baku.",
        dica: "É uma cidade litorânea banhada pelo mar Cáspio"
    },
    {
        pergunta: "Quem desenvolveu o teorema da incompletude?",
        resposta: ["(A) Godel.", "(B) Einstein.", "(C) Euclides.", "(D) Newton."],
        correta: "(A) Godel.",
        dica: "Revolucionou a lógica matemática no século XX"
    },
    {
        pergunta: "Qual o metal mais leve da tabela periódica?",
        resposta: ["(A) Lítio.", "(B) Hélio.", "(C) Sódio.", "(D) Berílio."],
        correta: "(A) Lítio.",
        dica: "É usado em baterias e em tratamentos psiquiátricos"
    },
    {
        pergunta: "Quantos elementos tem a tabela periódica (2023)?",
        resposta: ["(A) 118.", "(B) 120.", "(C) 112.", "(D) 116."],
        correta: "(A) 118.",
        dica: "Inclui elementos naturais e sintéticos"
    }
];

//Declaração de variáveis
let perguntaAtual = 0;
let dicasUsadas = 0;
let limiteDicas = 9;

const botaoComecar = document.getElementById("comecar");
const elementoPergunta = document.getElementById("pergunta");
const opcoes = document.getElementById("opcoes");
const proximaPergunta = document.getElementById("proximo");
const resultado = document.getElementById("resultado");
const dicas = document.getElementById("pedirDica");
const perguntaAudio = document.getElementById("perguntaAudio");
const acertou = document.getElementById("acertou");
const errou = document.getElementById("errou");
const contadorPergunta = document.getElementById("contadorPergunta");
const moedasValor = document.getElementById("moedasValor");
const moedasIcon = document.getElementById("moedasIcon");
const mostraDica = document.getElementById("mostraDica");
const mostraTempo = document.getElementById("mostraTempo")
let imagem1 = document.getElementById("sucesso");
let imagem2 = document.getElementById("nojo");
let imagem3 = document.getElementById("ganhou");
let tentarNovamenteBotao = document.getElementById("tentarNovamente");
let total = 0;
let contador = 0;

//Progressão de prêmios
const premios = [
    0, 500, 1000, 1500, 2000, 3000, 4000, 5000, 7500, 10000, 15000, 20000, 30000, 40000, 50000, 60000, 75000, 90000, 110000, 130000, 150000, 175000, 200000, 250000, 300000, 400000, 500000, 750000, 1000000] ;
    let valorPremio = premios[perguntaAtual];

//Contagem de dicas
dicas.addEventListener("click", () => {
    if (dicasUsadas < limiteDicas) {
        let dicaAtual = perguntas[perguntaAtual].dica;
        mostraDica.innerHTML = ("Dica: " + dicaAtual + " (" + (limiteDicas - dicasUsadas -1) + " restantes).");
        dicasUsadas++;
    } else {
        mostraDica.innerHTML = ("Você já usou todas as suas dicas!");
    }
});

let tempo = 0
let j = 0
//Início
function start() {
    if (perguntaAtual >= perguntas.length) {
        finish();
        return;
    }

//Temporizador
if (tempo) clearInterval(tempo);
j = 45
tempo = setInterval(() => {
j--;
if (j<=10){
    mostraTempo.style.color = 'red'; 
 }
mostraTempo.innerHTML = "⏰" + j;
 if (j < 0) {
            clearInterval(tempo);
            mostraTempo.innerHTML = "Tempo esgotado!";
            tentarNovamenteBotao.style.display = "block";
            contadorPergunta.style.display = "none";
            finish();
        }},1000)
 
//Ocultando/Exibindo elementos
    botaoComecar.style.display = "none";
    moedasIcon.style.display = "block"
    moedasValor.style.display = "block"
    resultado.style.display = "block";
    pergunta.style.display = "block";
    opcoes.style.display = "block";
    dicas.style.display = "block";
    opcoes.innerHTML = "";
    resultado.textContent = "";
    mostraDica.innerHTML = "";

//Contagem de perguntas
    contadorPergunta.textContent = "Pergunta " + (perguntaAtual + 1) + " de 28"
    const exibirPergunta = perguntas[perguntaAtual];
    elementoPergunta.textContent = exibirPergunta.pergunta;

    perguntaAudio.play();

//Exibição de perguntas
    for (let i = 0; i < exibirPergunta.resposta.length; i++) {
        const opcaoTexto = exibirPergunta.resposta[i];
        const botao = document.createElement("button");
        botao.textContent = opcaoTexto;
        botao.classList.add("opcao");

        botao.addEventListener("click", () => {
            clearInterval(tempo)
            if (opcaoTexto === exibirPergunta.correta) {
                total += premios[contador];
                contador++
                moedasValor.textContent = premios[contador].toFixed(2);
                resultado.textContent = "Correto! ✅";
                imagem1.style.display = "block";
                proximaPergunta.style.display = "block";
                acertou.play();
                 if (opcaoTexto === exibirPergunta.correta && perguntaAtual === 27){
        finish()
        return
                } 
                
            }
            else {
                resultado.textContent = "Errado! ❎ Seu prêmio final é de R$" + total.toFixed(2);
                imagem2.style.display = "block";
                tentarNovamenteBotao.style.display = "block";
                proximaPergunta.style.display = "none";
                dicas.style.display = "none";
                errou.play();
            }

            const botoes = document.querySelectorAll(".opcao");
            for (let cont = 0; cont < botoes.length; cont++) {
                botoes[cont].disabled = true;
            }
        });
        opcoes.appendChild(botao);
    }
}
//Fim de jogo
function finish() {
    elementoPergunta.style.display = "none";
    opcoes.style.display = "none";
    proximaPergunta.style.display = "none";
    pedirDica.style.display = "none";
    resultado.textContent = "Parabéns, você ganhou um milhão! 🌽";
    imagem1.style.display = "none"
    imagem3.style.display = "block"
    tentarNovamenteBotao.style.display = "block";
}

proximaPergunta.onclick = () => {
     if (perguntaAtual >= 27) {
        finish();
        return;
    }
    proximaPergunta.style.display = "none";
    imagem1.style.display = "none";
    imagem2.style.display = "none";
    perguntaAtual++;
    resultado.textContent = "";
    start();
};

function retry() {
    window.location.reload();
}