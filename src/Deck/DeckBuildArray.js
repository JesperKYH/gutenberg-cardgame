import jon from "../Img/jon.jpg";
import tinymce from "../Img/tinymce.jpg";
import tinymcecool from "../Img/tiny-cool.jpg";
import jesperWizard from "../Img/jesperWizard.jpg";
import jesper from "../Img/jesper.jpg";
import tp1crown from "../Img/tp1crown.png";
import quire from "../Img/quire.png";
import gold from "../Img/gold.jpg";
import kristian from "../Img/juice-ghost.png";
import karlSexyman from "../Img/karl-sexyman.png";
import FancyHarmonica from "../Img/Fancy-Harmonica.png";
import MariachiBand from "../Img/mariachi-band.png";
import onur from "../Img/onur.png";
import espressoHouse from "../Img/espressoHouse.jpg";
import jonPlus from "../Img/jonPlus.jpg";
import malware from "../Img/malware.jpg";
import coffee from "../Img/coffee.jpg";
import anton from "../Img/anton.png";
import error from "../Img/error.png";
import goldenInstrument from "../Img/goldenInstrument.jpg";

export const DeckCardsArray = [
  {
    name: "Wizard",
    img: jesperWizard,
    type: "Spellcaster",
    typeTwo: "character",
    cost: 50,
    atk: 300,
    def: 500,
    hp: 100,
    id: "wizard-one",
    descText:
      "Fearsome spellcaster! Known for its strength and cruelsome. If this card kills an enemy, draw one card.",
    amount: 0,
    value: 0,
  },
  {
    name: "Jon",
    img: jon,
    type: "Programmer",
    typeTwo: "character",
    cost: 50,
    atk: 200,
    def: 1000,
    hp: 100,
    id: "Jon1",
    descText:
      "Fear not, Jon is here! Known for his expertis in taking long walks, he will leave no enemies standing",
    amount: 0,
    value: 1,
  },
  {
    name: "Mysterious Sexy Man",
    img: karlSexyman,
    type: "Seducer",
    typeTwo: "character",
    cost: 150,
    atk: 800,
    def: 1200,
    hp: 100,
    id: "karl-one",
    descText:
      "This is the mysterious Sexy man once found as the winner of 'world sexiest man alive' in forbes, GQ and many other magazines.",
    amount: 0,
    value: 2,
  },

  {
    name: "Juice Ghost",
    img: kristian,
    type: "Code King",
    typeTwo: "character",
    cost: 600,
    atk: 2000,
    def: 3500,
    hp: 100,
    id: "juice-one",
    descText:
      "The Notorious JuiceGhost. Hide you family, hide your friends. Everythin you know and love can and WILL be gone.",
    amount: 0,
    value: 3,
  },
  {
    name: "Jesper",
    img: jesper,
    type: "Programmer",
    typeTwo: "character",
    cost: 200,
    atk: 1050,
    def: 1200,
    hp: 100,
    id: "programmer-one",
    descText:
      "He will use code to defeat his enemies, for every other programmer on board get +100 atk when played",
    amount: 0,
    value: 4,
  },
  {
    name: "Harmonica",
    img: FancyHarmonica,
    type: "spell",
    cost: 250,
    id: "harmonica-one",
    descText:
      "It's 8am. Your about to meet with the buyer. All of a sudden Anton plays the harmonica and all enemys are silienced for the next round and damages all enemy card for 200.",
    amount: 0,
  },
  {
    name: "Gutenberg Mariachi",
    img: MariachiBand,
    type: "Mariachi Group",
    typeTwo: "character",
    atk: 200,
    def: 3500,
    hp: 100,
    cost: 250,
    id: "mariachi-one",
    descText:
      "This card summuons the almighty Mariachi Group that decends from the Gutenberg era. This group deals 150 dmg to all opponents with its mighty music",
    amount: 0,
  },
  {
    name: "Golden Instrument",
    img: goldenInstrument,
    type: "spell",
    cost: 250,
    id: "golden-one",
    descText: "Use this on Gutenberg Mariachi and behold...",
    amount: 0,
  },
  {
    name: "TinyMCE",
    img: tinymce,
    type: "spell",
    cost: 70,
    id: "tiny-one",
    descText:
      "Heal 50hp to every friendly card on your board and give +100 def.",
    amount: 0,
  },
  {
    name: "TP1",
    img: tp1crown,
    type: "spell",
    cost: 50,
    id: "tp1-one",
    descText:
      "Give one random card the title “scrum-master” and give it +200atk",
    amount: 0,
  },
  {
    name: "Quire",
    img: quire,
    type: "spell",
    cost: 25,
    id: "quire-one",
    descText: "Draw one card",
    amount: 0,
  },
  {
    name: "Quire 2.0",
    img: quire,
    type: "spell",
    cost: 100,
    id: "quire2-one",
    descText: "Draw three cards",
    amount: 0,
  },
  {
    name: "Money Making Idea",
    img: gold,
    type: "spell",
    cost: 0,
    id: "money-one",
    descText: "Get 100 gold",
    amount: 0,
  },
  {
    name: "Tiny MC Daddy",
    img: tinymcecool,
    type: "spell",
    cost: 100,
    id: "tiny-mc-two",
    descText: "Dissables all enemy cards on the board for the next round",
    amount: 0,
  },
  {
    name: "Onur",
    img: onur,
    type: "Programmer",
    typeTwo: "character",
    atk: 800,
    def: 1500,
    hp: 100,
    cost: 250,
    id: "onur-one",
    descText:
      "If the environment is “espresso house” this card gets +500 atk and +500 def",
    amount: 0,
  },
  {
    name: "Espresso House",
    img: espressoHouse,
    type: "spell",
    cost: 150,
    id: "house-one",
    descText: "Change the environment to “Espresso House”",
    amount: 0,
  },
  {
    name: "Jon Level Two",
    img: jonPlus,
    type: "spell",
    cost: 200,
    id: "jonUpgrade-one",
    descText:
      "Give every Jon on the battlefield, in your hand and deck, +500 atk and +300 def.",
    amount: 0,
  },
  {
    name: "Malware",
    img: malware,
    type: "spell",
    cost: 200,
    id: "malware-one",
    descText:
      "This malware affects your opponent. Deal 100 dmg directly to your opponent.",
    amount: 0,
  },
  {
    name: "Coffee",
    img: coffee,
    type: "spell",
    cost: 100,
    id: "coffee-one",
    descText:
      "Give every character on battlefield and in hand with type programmer +250 atk and +150 def",
    amount: 0,
  },
  {
    name: "Anton",
    img: anton,
    type: "Musician",
    typeTwo: "character",
    atk: 1000,
    def: 650,
    hp: 100,
    cost: 250,
    id: "anton-one",
    descText:
      "Anton gets empowered by music, if harmonica has been played power up Anton and give this card +450 atk",
    amount: 0,
  },
  {
    name: "Error",
    img: error,
    type: "spell",
    cost: 300,
    id: "error-one",
    descText:
      "An error! Throw a error on a random opponent and deal 600 damage",
    amount: 0,
  },
];
