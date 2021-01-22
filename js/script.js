
const fieldCodes = [
  'W', 'U', 'B', 'R', 'G'
]

const cardTypes = [
  'terre',
  'creature',
  'incantesimi',
  'artefatti',
  'instantanei',
  'stregonerie'
]

const powerOptions = [1, 2, 3, 4, 5]

// Abbiamo creato un oggetto di oggetti, come riferimento
// di una edizione. Se ad esempio scrivo editions['SP']
// allora otterrò tutto un oggetto che descrive
// con più dettagli l'edizione.
// come oggetto di oggetti, può essere navigato solo con il for-in
const editions = {

  'BL': {
    edition: 'Boolean',
    rarity: 'blue'
  },

  'SP': {
    edition: 'Special',
    rarity: 'red'
  }

}


const cards = [{

  cardName: 'Grizzly Bears',

  cost: {
    genericCostNumber: 1,
    costFields: [ // colors array con riferimento a fieldCodes
      fieldCodes[0],  // 'W',  - un suo riferimento
      fieldCodes[2]   // 'B'
    ],
  },

  picture: 'images/i.png',
  cardType: cardTypes[1],
  cardObject: 'Bear',

  editionType: editions['BL'],

  description: 'Lorem ipsum',
  story: 'Naltro Lorem Ipsum',

  stats: {
    power: 2,  // filtrarlo per power
    toughness: 2
  }

},
{

  cardName: 'Sviluppatore guerriero',

  cost: {
    genericCostNumber: 3,
    costFields: [ // colors array con riferimento a fieldCodes
      fieldCodes[2],
      fieldCodes[3]
    ],
  },

  picture: 'images/g.png',  // da inserire immagine
  cardType: cardTypes[1],
  cardObject: 'Bear',

  editionType: editions['BL'],

  description: 'Lo sviluppatore guerriero spezza i byte in bit!',
  story: 'Lo sviluppatore guerriero è una forma di essere umano evoluto.',

  stats: {
    power: 5,  // r
    toughness: 3
  }

},
{

  cardName: 'Samurai infernale',

  cost: {
    genericCostNumber: 4,
    costFields: [ // colors array con riferimento a fieldCodes
      fieldCodes[3]
    ],
  },

  picture: 'images/g.png',  // da inserire immagine
  cardType: cardTypes[1],
  cardObject: 'Demon',

  editionType: editions['BL'],

  description: 'Travolgere',
  story: 'Una volta era un normale guerriero, ma ha ceduto ad un ira recondita',

  stats: {
    power: 5,  // r
    toughness: 3
  }

},
{

  cardName: 'Kelemvorita mascherato',

  cost: {
    genericCostNumber: 2,
    costFields: [ // colors array con riferimento a fieldCodes
      fieldCodes[0],
      fieldCodes[2]
    ],
  },

  picture: 'images/g.png',  // da inserire immagine
  cardType: cardTypes[1],
  cardObject: 'Mezzorco',

  editionType: editions['SP'],

  description: 'Quando arriva a pf 0 invece di finire al cimitero riacquista 1 pf e ottiene +3 a forza.',
  story: 'Kelemvor predica la grigia ed imparziale giustizia della morte, ma l ira di un mezzorco si risveglia quando meno te lo aspetti.',

  stats: {
    power: 3,  // r
    toughness: 3
  }

},
{

  cardName: 'Geass',

  cost: {
    genericCostNumber: 10,
    costFields: [ // colors array con riferimento a fieldCodes
    ],
  },

  picture: 'images/g.png',  // da inserire immagine
  cardType: cardTypes[4],
  cardObject: '',

  editionType: editions['BL'],

  description: 'Prendi il possesso permanentemente delle creature dell avversario',
  story: 'Il potere dei Re ti renderà solo ma tu sei pronto a riceverlo',

  stats: {
  }

},
{

  cardName: 'Cavaliere del mietitore anarchico',

  cost: {
    genericCostNumber: 2,
    costFields: [ // colors array con riferimento a fieldCodes
      fieldCodes[3],
      fieldCodes[3]
    ],
  },

  picture: 'images/g.png',  // da inserire immagine
  cardType: cardTypes[1],
  cardObject: 'Cavaliere fuorilegge',

  editionType: editions['SP'],

  description: 'Quando evochi questo fuorilegge evoca altri due "Cavaliere del mietitore anarchico".',
  story: 'Questo ordine di fuorilegge smercia armi ai peggiori criminali. Ferisci uno di loro e mr.Mayhem verrà per te.',

  stats: {
    power: 2,  // r
    toughness: 3
  }

}]

console.log(cards);

function print(elementHTML, array) {
  elementHTML.innerHTML = ''

  array.forEach((item) => {
    elementHTML.innerHTML += `
    <div>${item.cardName}</div>
    `
  });
}

const selectorHTML = document.getElementsByClassName('selector')[0]

powerOptions.forEach((element) => {
  selectorHTML.innerHTML += `
  <option value="${element}">${element}</option>
  `
});


const cardsListBox = document.getElementsByClassName('cards-list-box')[0]

print(cardsListBox, cards)

selectorHTML.addEventListener('change', () => {
  let filteredCards = cards.filter((element, index, array) => {
    console.log(element.stats.power);
    return element.stats.power === parseInt(selectorHTML.value);
  });

  if (selectorHTML.value === 'all') {
    print(cardsListBox, cards)
  }else {
    print(cardsListBox, filteredCards)
  }
})
