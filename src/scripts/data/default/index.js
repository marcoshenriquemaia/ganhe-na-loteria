export const gameList = [
  {
    name: 'Aposta com amigo',
    prob: 2,
    image: 'src/assets/images/friends.jpg',
    unlock: true,
  },
  {
    name: 'Baralho com a familia',
    prob: 4,
    image: 'https://p2.trrsf.com/image/fget/cf/648/0/images.terra.com/2021/12/08/357983771-dia-nacional-da-familia-tenha-paz-com-ajuda-dos-signos-e-rituais-18663.jpg',
    unlock: false,
  },
  {
    name: 'Sorteio do departamento',
    prob: 10,
    image: `https://blog.cestanobre.com.br/wp-content/uploads/2017/11/saiba-como-ter-equipes-de-alta-performance-na-sua-empresa.jpeg`,
    unlock: false,
  },
  {
    name: 'Sorteio da empresa',
    prob: 25,
    image: `https://www.aurum.com.br/blog/wp-content/uploads/2021/07/teoria-da-empresa-e1612530817928.jpg.webp`,
    unlock: false,
  },
  {
    name: 'Rifa',
    prob: 100,
    image: `https://exame.com/wp-content/uploads/2017/09/empresa.jpg`,
    unlock: false,
  },
  {
    name: 'Jogo do bicho',
    prob: 200,
    image: `https://www.futebolnaveia.com.br/wp-content/uploads/2021/01/jogo.jpg`,
    unlock: false,
  },
  {
    name: 'Bingo da igreja',
    prob: 250,
    image: `https://potricharquitetura.com/wp-content/uploads/igreja-santa-terezinha.jpg`,
    unlock: false,
  },
  {
    name: 'Squid Game',
    prob: 456,
    image: `https://www.magazine-hd.com/apps/wp/wp-content/uploads/2021/09/squid-game.jpg`,
    unlock: false,
  },
  {
    name: 'Bolão futebol',
    prob: 500,
    image: `https://www.mktesportivo.com/wp-content/uploads/2021/10/aposta_esportiva.jpg`,
    unlock: false,
  },
  {
    name: 'Sorteio do bairro',
    prob: 1000,
    image: `https://blog.laredo.com.br/wp-content/uploads/2018/12/257730-bairro-nobre-ou-condominio-fechado-entenda-as-vantagens-de-cada-um-1024x682.jpg`,
    unlock: false,
  },
  {
    name: 'Sena da cidade',
    prob: 10000,
    image: `https://exame.com/wp-content/uploads/2019/09/aaaa.gif`,
    unlock: false,
  },
  {
    name: 'Sena do estado',
    prob: 100000,
    image: `https://s1.static.brasilescola.uol.com.br/be/e/metropole%20e%20megalopole.jpg`,
    unlock: false,
  },
  {
    name: 'Dia de Sorte',
    prob: 2629575,
    image: `https://www.dci.com.br/wp-content/uploads/2022/01/resultado-do-dia-de-sorte-553.jpeg`,
    unlock: false,
  },
  {
    name: 'Lotofácil',
    prob: 3268760,
    image: `https://rciararaquara.com.br/wp-content/uploads/2021/04/LotoFacil.jpg`,
    unlock: false,
  },
  {
    name: 'Super Sete',
    prob: 10000000,
    image: `https://tribunapr.uol.com.br/wp-content/uploads/sites/69/2021/07/09142913/supersete-970x550.jpg`,
    unlock: false,
  },
  {
    name: 'Lotomania',
    prob: 11372635,
    image: `https://www.oliberal.com/image/contentid/policy:1.479937:1641574711/lotomania-foto-cartela1.jpg?f=2x1&$p$f=557735a&w=1500&$w=f075b93`,
    unlock: false,
  },
  {
    name: 'Dupla Sena',
    prob: 15890700,
    image: `https://www.oliberal.com/image/contentid/policy:1.481514:1641933788/dupla-sena.jpg?f=2x1&$p$f=b23ea0a&w=1500&$w=f075b93`,
    unlock: false,
  },
  {
    name: 'Quina',
    prob: 24040016,
    image: `https://tribunapr.uol.com.br/wp-content/uploads/sites/69/2021/10/13162550/quina-elk-970x550.jpg`,
    unlock: false,
  },
  {
    name: 'Timemania',
    prob: 26472637,
    image: `https://fdr.com.br/wp-content/uploads/2020/11/timemania-3.jpg`,
    unlock: false,
  },
  {
    name: 'Mega Sena',
    prob: 50063860,
    image: `https://veja.abril.com.br/wp-content/uploads/2018/02/brasil-loteria-mega-sena-20180218-001.jpg`,
    unlock: false,
    mega: true
  },
  
].reduce((acc, item, index) => ([...acc, { 
  ...item,
  award: (item.prob * 2.5) * (1.2 + index/10),
  unlockPrice: (item.prob * 2.5 + (index ? acc[index-1].award * 2 : 0)) / 4
}]), [])


