
const capa = document.getElementById("cover");
const tracklist = document.getElementById("tracklist");

const botaoAbrir = document.getElementById("openAlbum");
const botaoVoltar = document.getElementById("backToCover");

// Abrir a tracklist
botaoAbrir.addEventListener("click", () => {
    capa.classList.add("hidden");
    tracklist.classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Voltar para a capa
botaoVoltar.addEventListener("click", () => {
    tracklist.classList.add("hidden");
    capa.classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


// Seleciona todas as faixas
const faixas = document.querySelectorAll(".track");

// Seleciona todas as páginas internas
const paginas = document.querySelectorAll(".album-page");

// Seleciona os botões de voltar à tracklist
const botoesVoltar = document.querySelectorAll(".backToTracklist");

// Abrir uma página ao clicar em uma faixa
faixas.forEach((faixa) => {

    faixa.addEventListener("click", () => {

        const paginaId = faixa.dataset.page;

        // Esconde a tracklist
        tracklist.classList.add("hidden");

        // Esconde todas as páginas
        paginas.forEach((pagina) => {
            pagina.classList.add("hidden");
        });

        // Mostra a página escolhida
        document.getElementById(paginaId).classList.remove("hidden");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

});

// Voltar à tracklist
botoesVoltar.forEach((botao) => {

    botao.addEventListener("click", () => {

        // Esconde todas as páginas
        paginas.forEach((pagina) => {
            pagina.classList.add("hidden");
        });

        // Mostra novamente a tracklist
        tracklist.classList.remove("hidden");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

});

// ===== THE LIFE OF A SHOWGIRL · ESCOLHA SUA ERA =====

const eras = [
    { s: "Debut",       n: "Taylor Swift",                    y: 2006, c: "#3fb7a1", i: "#06302a", t: "onde tudo começou" },
    { s: "Fearless",    n: "Fearless",                        y: 2008, c: "#e3b04b", i: "#3a2600", t: "ouro, sonhos e coragem de começar" },
    { s: "Speak Now",   n: "Speak Now",                       y: 2010, c: "#8e5bb5", i: "#ffffff", t: "roxo, vestidos de conto de fadas e voz própria" },
    { s: "Red",         n: "Red",                             y: 2012, c: "#b3202f", i: "#ffffff", t: "sentimentos intensos em tons de vermelho" },
    { s: "1989",        n: "1989",                            y: 2014, c: "#86c5e8", i: "#0f3550", t: "céu azul, cidade grande e o que inspirou este site ♡" },
    { s: "reputation",  n: "reputation",                      y: 2017, c: "#2b2b2b", i: "#e6e6e6", t: "preto, prata e uma reinvenção" },
    { s: "Lover",       n: "Lover",                           y: 2019, c: "#f3a6c8", i: "#5a1a3a", t: "rosa, azul-bebê e glitter pra todo lado" },
    { s: "folklore",    n: "folklore",                        y: 2020, c: "#a9a9a0", i: "#26261f", t: "névoa, bosque e histórias à luz de velas" },
    { s: "evermore",    n: "evermore",                        y: 2020, c: "#a8691e", i: "#ffffff", t: "outono, âmbar e lenha na lareira" },
    { s: "Midnights",   n: "Midnights",                       y: 2022, c: "#2c3a7a", i: "#e3e6ff", t: "madrugada, estrelas e lavanda" },
    { s: "TTPD",        n: "The Tortured Poets Department",   y: 2024, c: "#d8cdb8", i: "#2a2418", t: "papel, tinta e poesia" },
    { s: "Showgirl",    n: "The Life of a Showgirl",          y: 2025, c: "#ff7a1f", i: "#3a1500", t: "laranja, strass e muito brilho — é este capítulo!" }
];

const eraChips = document.getElementById("eraChips");
const eraCard = document.getElementById("eraCard");
const paginaShowgirl = document.getElementById("page2");

function escolherEra(indice) {
    const era = eras[indice];

    paginaShowgirl.style.setProperty("--era", era.c);
    paginaShowgirl.style.setProperty("--era-ink", era.i);

    eraCard.innerHTML = `
        <small>ERA ${indice + 1} / ${eras.length}</small>
        <b>${era.y}</b>
        <div>
            <strong>${era.n}</strong>
            <p>${era.t}</p>
        </div>
    `;

    eraChips.querySelectorAll(".ts-chip").forEach((chip, i) => {
        chip.setAttribute("aria-pressed", i === indice);
    });
}

eras.forEach((era, indice) => {
    const chip = document.createElement("button");
    chip.className = "ts-chip";
    chip.style.setProperty("--c", era.c);
    chip.style.setProperty("--ink", era.i);
    chip.innerHTML = `<i></i><span>${era.s}</span>`;
    chip.addEventListener("click", () => escolherEra(indice));
    eraChips.appendChild(chip);
});

// começa na era da página
escolherEra(eras.length - 1);

// ===== A LITTLE BIT OF MAGIC =====

const casas = [
    { e: "🦁", n: "Grifinória", c: "#7f0909", i: "#f0c75e", t: "coragem de entrar em qualquer aventura e lealdade que nunca foge da raia" },
    { e: "🐍", n: "Sonserina",  c: "#1a472a", i: "#e2e2e2", t: "ambição, estilo e uma esperteza que sempre dá um jeito" },
    { e: "🦅", n: "Corvinal",   c: "#1f3a74", i: "#e3c58a", t: "curiosidade, criatividade e ideias que vão longe" },
    { e: "🦡", n: "Lufa-Lufa",  c: "#f0c230", i: "#2b2118", t: "lealdade, generosidade e o coração mais acolhedor do castelo" }
];

const casaChips = document.getElementById("casaChips");
const casaCard = document.getElementById("casaCard");
const paginaMagia = document.getElementById("page3");
const magicTag = document.getElementById("magicTag");

function escolherCasa(indice) {
    const casa = casas[indice];

    paginaMagia.style.setProperty("--house", casa.c);
    paginaMagia.style.setProperty("--house-ink", casa.i);

    casaCard.innerHTML = `
        <b>${casa.e}</b>
        <div>
            <small>SELECTED HOUSE</small>
            <strong>${casa.n}</strong>
            <p>${casa.t}</p>
        </div>
    `;

    magicTag.textContent = `✦ ${casa.n.toUpperCase()} ✦`;

    casaChips.querySelectorAll(".mg-house-chip").forEach((chip, i) => {
        chip.setAttribute("aria-pressed", i === indice);
    });
}

casas.forEach((casa, indice) => {
    const chip = document.createElement("button");
    chip.className = "mg-house-chip";
    chip.style.setProperty("--c", casa.c);
    chip.style.setProperty("--ink2", casa.i);
    chip.innerHTML = `<span>${casa.e}</span><span>${casa.n}</span>`;
    chip.addEventListener("click", () => escolherCasa(indice));
    casaChips.appendChild(chip);
});

// Chapéu Seletor: roleta que sempre termina na casa da Duda
const CASA_DA_DUDA = 0; // 0 = Grifinória
const hatBtn = document.getElementById("hatBtn");
const hatMsg = document.getElementById("hatMsg");
let chapeuPensando = false;
let vezesChapeu = 0;

const falasChapeu = [
    "Parece que o chapéu quer mesmo você na Grifinória, né? 🦁",
    "Tentou de novo? O chapéu continua firme na Grifinória ✦",
    "Aparentemente o destino já foi decidido 🦁",
    "Ok, ok... a Grifinória é a sua casa e ponto final ♡"
];

hatBtn.addEventListener("click", () => {
    if (chapeuPensando) return;
    chapeuPensando = true;
    hatBtn.disabled = true;
    hatMsg.hidden = true;
    casaCard.classList.remove("destaque");

    const totalPassos = 14;
    let passo = 0;
    let anterior = -1;

    function girar() {
        let indice;

        if (passo === totalPassos - 1) {
            indice = CASA_DA_DUDA;               // última parada: Grifinória
        } else {
            do {
                indice = Math.floor(Math.random() * casas.length);
            } while (
                indice === anterior ||                                  // não repete em seguida
                (passo === totalPassos - 2 && indice === CASA_DA_DUDA)  // penúltima ≠ Grifinória
            );
        }

        anterior = indice;
        escolherCasa(indice);
        passo++;

        if (passo < totalPassos) {
            setTimeout(girar, 90 + passo * passo * 2.2);   // vai desacelerando
        } else {
            casaCard.classList.add("destaque");
            hatBtn.disabled = false;
            chapeuPensando = false;
            vezesChapeu++;

            // a partir da 3ª vez, o chapéu comenta
            if (vezesChapeu >= 3) {
                hatMsg.textContent = falasChapeu[(vezesChapeu - 3) % falasChapeu.length];
                hatMsg.hidden = false;
            }
        }
    }

    girar();
});

// estado inicial do cartão da casa
casaCard.innerHTML = `
    <b>🪄</b>
    <div>
        <small>O CHAPÉU SELETOR</small>
        <strong>Escolha uma casa</strong>
        <p>ou deixe o chapéu decidir por você ✦</p>
    </div>
`;

// Bolo: apagar as velas e fazer um desejo
const velas = document.querySelectorAll(".mg-wick");
const desejo = document.getElementById("desejo");

velas.forEach((vela) => {
    vela.addEventListener("click", () => {
        vela.classList.toggle("out");
        const todasApagadas = [...velas].every((v) => v.classList.contains("out"));
        desejo.hidden = !todasApagadas;
    });
});

// ===== PÁGINA 4 · OLHOS DE BOTÃO QUE SEGUEM O CURSOR =====

const paginaCoraline = document.getElementById("page4");
const olhosBoneca = document.querySelectorAll("#page4 .cb-eye");

document.addEventListener("pointermove", (evento) => {
    if (paginaCoraline.classList.contains("hidden")) return;

    olhosBoneca.forEach((olho) => {
        const caixa = olho.getBoundingClientRect();
        const dx = evento.clientX - (caixa.left + caixa.width / 2);
        const dy = evento.clientY - (caixa.top + caixa.height / 2);
        const distancia = Math.hypot(dx, dy) || 1;
        const movimento = Math.min(5, distancia / 30);

        olho.style.setProperty("--ex", `${(dx / distancia) * movimento}px`);
        olho.style.setProperty("--ey", `${(dy / distancia) * movimento}px`);
    });
});


// ===== A PEQUENA PORTA → PÁGINA SECRETA =====

const portaSecreta = document.getElementById("secretDoor");
const paginaSecreta = document.getElementById("page5");

portaSecreta.addEventListener("click", () => {
    if (portaSecreta.classList.contains("open")) return;

    portaSecreta.classList.add("open");

    // espera a porta abrir e a luz sair antes de atravessar
    setTimeout(() => {
        paginas.forEach((pagina) => pagina.classList.add("hidden"));
        paginaSecreta.classList.remove("hidden");

        window.scrollTo({ top: 0, behavior: "smooth" });

        // fecha a porta de novo para a próxima vez
        portaSecreta.classList.remove("open");
    }, 1400);
});

// ==========================================================
// MÚSICA: cada página tem a sua trilha
// ==========================================================

const musicas = {
    longlive: { arquivo: "assets/audio/long-live.mp3",        titulo: "Long Live",       artista: "Taylor Swift" },
    youarein: { arquivo: "assets/audio/you-are-in-love.mp3",  titulo: "You Are In Love", artista: "Taylor Swift" },
    hedwig:   { arquivo: "assets/audio/hedwigs-theme.mp3",    titulo: "Hedwig's Theme",  artista: "John Williams" },
    dreaming: { arquivo: "assets/audio/dreaming.mp3",         titulo: "Dreaming",        artista: "Bruno Coulais" },

    // jardim secreto: sons relaxantes (ajuste o título e o artista para o arquivo que escolher)
    jardim:   { arquivo: "assets/audio/jardim-relaxante.mp3", titulo: "Garden Ambience", artista: "Sons relaxantes", volume: 0.8 }
};

// qual música toca em cada tela (use o id da seção)
const musicaDaPagina = {
    cover:     "longlive",
    tracklist: "longlive",
    page2:     "longlive",   // The Life of a Showgirl: continua a mesma, sem reiniciar
    page1:     "youarein",   // Duda's Version
    page3:     "hedwig",     // A Little Bit of Magic
    page4:     "dreaming",   // The Other Side of the Door
        page5:     "jardim"      // jardim secreto: sons relaxantes
};

// true = ao voltar para uma música, ela continua de onde parou
const RETOMAR_DE_ONDE_PAROU = true;

const trilha = document.getElementById("trilha");
const botaoMusica = document.getElementById("musicBtn");
const avisoMusica = document.getElementById("musicToast");

let musicaLiberada = false;   // vira true depois do primeiro clique
let musicaAtual = null;
let musicaMudo = false;
let versaoTroca = 0;
let timerFade = null;
let timerAviso = null;
const posicoesMusica = {};

// iPhone ignora o volume por código, então lá não tem fade (só troca)
const podeFade = (() => {
    const teste = new Audio();
    teste.volume = 0.5;
    return teste.volume === 0.5;
})();

function fade(alvo, ms) {
    return new Promise((resolver) => {
        clearInterval(timerFade);

        if (!podeFade) {
            resolver();
            return;
        }

        const inicio = trilha.volume;
        const passos = Math.max(1, Math.round(ms / 50));
        let i = 0;

        timerFade = setInterval(() => {
            i++;
            trilha.volume = Math.min(1, Math.max(0, inicio + (alvo - inicio) * (i / passos)));

            if (i >= passos) {
                clearInterval(timerFade);
                resolver();
            }
        }, 50);
    });
}

function avisar(titulo, texto) {
    avisoMusica.innerHTML = `<b>${titulo}</b>${texto}`;
    avisoMusica.classList.add("show");
    clearTimeout(timerAviso);
    timerAviso = setTimeout(() => avisoMusica.classList.remove("show"), 3800);
}

function atualizarBotaoMusica() {
    const texto = botaoMusica.querySelector(".mu-txt");

    if (!musicaLiberada) {
        botaoMusica.dataset.estado = "off";
        texto.textContent = "ligar música";
    } else if (musicaMudo) {
        botaoMusica.dataset.estado = "mudo";
        texto.textContent = "som desligado";
    } else {
        botaoMusica.dataset.estado = "tocando";
        texto.textContent = "música";
    }
}

function paginaVisivel() {
    return Object.keys(musicaDaPagina).find(
        (id) => !document.getElementById(id).classList.contains("hidden")
    );
}

async function atualizarMusica() {
    if (!musicaLiberada) return;

    const chave = musicaDaPagina[paginaVisivel()];

    // sem página reconhecida ou mesma música: não faz nada (continua tocando)
    if (!chave || chave === musicaAtual) return;

    const minhaVez = ++versaoTroca;

    // guarda onde a música parou e abaixa o volume
    if (musicaAtual) {
        posicoesMusica[musicaAtual] = trilha.currentTime;
        await fade(0, 500);
        if (minhaVez !== versaoTroca) return;
    }

    const musica = musicas[chave];
    musicaAtual = chave;
    trilha.src = musica.arquivo;

    const inicio = RETOMAR_DE_ONDE_PAROU ? (posicoesMusica[chave] || 0) : 0;
    if (inicio > 0) {
        trilha.addEventListener("loadedmetadata", () => { trilha.currentTime = inicio; }, { once: true });
    }

    trilha.muted = musicaMudo;
    trilha.volume = podeFade ? 0 : 1;

    try {
        await trilha.play();
        fade(musica.volume ?? 1, 900);
        avisar("♪ NOW PLAYING", `${musica.titulo} — ${musica.artista}`);
    } catch (erro) {
        // o navegador bloqueou: o botão flutuante deixa ela tentar de novo
        musicaLiberada = false;
        musicaAtual = null;
        atualizarBotaoMusica();
    }
}

function liberarMusica() {
    if (musicaLiberada) return;
    musicaLiberada = true;
    atualizarBotaoMusica();
    atualizarMusica();
}

// 1º clique: o PLAY ALBUM da capa liga a música
document.getElementById("openAlbum").addEventListener("click", liberarMusica);

// botão flutuante: liga a música, ou silencia / volta o som
botaoMusica.addEventListener("click", () => {
    if (!musicaLiberada) {
        liberarMusica();
        return;
    }

    musicaMudo = !musicaMudo;
    trilha.muted = musicaMudo;
    atualizarBotaoMusica();
});

// avisa se faltar algum arquivo
trilha.addEventListener("error", () => {
    if (musicaAtual) avisar("NÃO ACHEI O ARQUIVO", musicas[musicaAtual].arquivo);
});

// sempre que uma página aparecer ou sumir, confere qual música deve tocar
const observadorMusica = new MutationObserver(atualizarMusica);

Object.keys(musicaDaPagina).forEach((id) => {
    observadorMusica.observe(document.getElementById(id), {
        attributes: true,
        attributeFilter: ["class"]
    });
});

atualizarBotaoMusica();