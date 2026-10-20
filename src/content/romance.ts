// Todo o conteúdo editável do site fica aqui.
import loginBg from "@/assets/login-bg.jpg.asset.json";

export const access = { name: "miko", password: "sorvetedechocolate" };

export const loginBackground = loginBg.url;

// Quando o MP3 chegar, coloque a URL aqui (ex.: import song from "@/assets/musica.mp3.asset.json"; song.url)
export const music = { url: "" as string, title: "nossa música" };

export const opening = {
  title: "Fiz um cantinho no mundo para você.",
  message:
    "Porque algumas pessoas merecem mais do que palavras ditas às pressas. Merecem um lugar onde cada detalhe tenha sido pensado com carinho.",
  invite: "tem algumas coisas que quero te mostrar",
};

export type Letter = { title: string; preview: string; body: string[] };

export const letters: Letter[] = [
  {
    title: "Uma carta para você",
    preview: "Comecei esta carta umas quatro vezes antes de ter coragem…",
    body: [
      "Comecei esta carta umas quatro vezes antes de ter coragem de deixar as palavras do jeito que elas saíram. Achei que, se eu tentasse deixar tudo bonito demais, ia acabar escondendo o que realmente importa.",
      "E o que importa é simples: eu gosto de você. Gosto do jeito que você existe no mundo, meio distraída às vezes, intensa outras, sempre inteira. Gosto de como meu dia muda de cor quando chega uma mensagem sua.",
      "Não sei explicar direito em que momento você virou alguém em quem eu penso antes de dormir. Só sei que virou, e que eu não quero que deixe de ser.",
    ],
  },
  {
    title: "As pequenas coisas que eu amo em você",
    preview: "Não são as coisas grandes. São as que quase ninguém repara…",
    body: [
      "Não são as coisas grandes. São as que quase ninguém repara.",
      "O jeito que você ri antes de terminar de contar uma história engraçada. A forma como você fala das coisas que gosta, com os olhos acesos. A teimosia bonita de quem já passou por muito e ainda assim continua sentindo tudo.",
      "Gosto até das suas manias, das suas pausas, do seu silêncio quando está cansada. Gosto de você de perto, sem filtro, do jeito que você é quando ninguém está olhando.",
    ],
  },
  {
    title: "Se eu pudesse voltar no tempo",
    preview: "Às vezes eu queria poder entrar nos seus dias antigos…",
    body: [
      "Às vezes eu queria poder entrar nos seus dias antigos e sentar do seu lado nos momentos em que você se sentiu sozinha. Queria segurar sua mão nas noites difíceis, tirar de você o peso que ninguém deveria ter carregado.",
      "Mas eu sei que não posso. O que aconteceu, aconteceu, e uma parte de quem você é hoje nasceu justamente de sobreviver a tudo isso. Eu não apago o seu passado, e nem quero fingir que ele não doeu.",
      "O que eu posso fazer é outra coisa: cuidar bem do agora. Fazer dos seus próximos dias lugares mais leves. E, quem sabe, com o tempo, quando você olhar para trás, a lembrança não aperte tanto, porque o presente vai estar cheio de coisas boas para equilibrar.",
    ],
  },
  {
    title: "O que eu desejo para você",
    preview: "Eu desejo que você durma bem. Parece pouco, mas não é…",
    body: [
      "Eu desejo que você durma bem. Parece pouco, mas não é.",
      "Desejo que você tenha dias tranquilos, conversas que não cansam, gente que te trate com cuidado. Que você consiga ser gentil consigo mesma nos dias ruins, do mesmo jeito que é com os outros.",
      "Desejo que você realize as coisas que sonha baixinho, aquelas que você quase não conta para ninguém. E, se eu puder, quero estar por perto para comemorar cada uma delas.",
    ],
  },
  {
    title: "Coisas que talvez eu não saiba dizer olhando nos seus olhos",
    preview: "Eu fico meio sem jeito ao vivo. Então vou escrever…",
    body: [
      "Eu fico meio sem jeito ao vivo. A voz falha, eu mudo de assunto, faço uma piada. Então vou escrever.",
      "Você me deixa nervoso de um jeito bom. Quando você me olha por mais tempo, eu esqueço o que ia falar. Tenho medo de não ser suficiente, e ao mesmo tempo tenho vontade de tentar todos os dias.",
      "Você é muito mais bonita do que imagina. E não só no rosto: no jeito de cuidar, de sentir, de se importar. Eu queria que você se enxergasse por um minuto do jeito que eu te vejo.",
    ],
  },
  {
    title: "Uma promessa para os nossos dias",
    preview: "Não vou te prometer para sempre. Vou te prometer coisas que dá para cumprir…",
    body: [
      "Não vou te prometer para sempre, nem um mundo perfeito. Vou te prometer coisas que dá para cumprir.",
      "Prometo te respeitar, inclusive quando a gente discordar. Prometo ter paciência com o seu tempo, com os seus medos, com as partes suas que ainda estão se curando. Prometo nunca tentar te prender: quero que você fique porque é bom ficar, não porque precisa.",
      "Prometo cuidar, ouvir de verdade e ser honesto, mesmo quando for difícil. E prometo construir isso com você aos poucos, tijolo por tijolo, sem pressa, do jeito que as coisas verdadeiras são construídas.",
    ],
  },
];

// Galeria: deixe src vazio até enviar a foto. Edite as legendas à vontade.
export const gallery: { src: string; caption: string }[] = [
  { src: "", caption: "a primeira foto sua que eu guardei" },
  { src: "", caption: "esse sorriso, sempre" },
  { src: "", caption: "um dia que eu queria repetir" },
  { src: "", caption: "seu olhar quando está distraída" },
  { src: "", caption: "você sendo você" },
  { src: "", caption: "um pedacinho de nós" },
];

export const littleThings: string[] = [
  "Seu sorriso tem o poder irritante de melhorar qualquer dia.",
  "Você presta atenção nas pessoas de um jeito raro.",
  "Seu olhar diz coisas que você ainda nem falou.",
  "Você é forte sem precisar ser dura.",
  "O jeito que você demonstra carinho é sempre nos detalhes.",
  "Sua risada é um dos meus sons preferidos.",
  "Você é bonita até quando acha que não está.",
  "Conversar com você é como chegar em casa.",
];

export const hiddenMessages: string[] = [
  "Bebe uma água. Eu tô pensando em você.",
  "Hoje você merece um sorvete de chocolate. Dos grandes.",
  "Se o dia estiver pesado, lembra que alguém torce muito por você.",
  "Você não precisa dar conta de tudo hoje.",
  "Saudade é só o nome bonito para 'queria você aqui'.",
  "Eu ainda sorrio sozinho lembrando da gente.",
  "Você é a parte boa da minha rotina.",
  "Respira. Você está indo melhor do que imagina.",
];

export const closing = {
  quote:
    "Eu não posso mudar tudo o que veio antes de mim. Mas posso escolher, todos os dias, a maneira como quero fazer parte da sua história.",
  message:
    "Você não precisa ser perfeita comigo. Não precisa esconder os dias difíceis, nem fingir que está bem quando não está. Você merece carinho do jeito que é, inclusive nas partes bagunçadas. Eu fico.",
  signature: "Com carinho, de alguém que fica feliz por ter encontrado você.",
};
