class Card {
    constructor(){
        this.suit = {
          0:"Hearts", 
          1:"Clubs", 
          2:"Diamonds", 
          3:"Spades"
        }
        this.val = {
            1 : "Ace",
            2 : "Two",
            3 : "Three",
            4 : "Four",
            5 : "Five",
            6 : "Six",
            7 : "Seven",
            8 : "Eight",
            9 : "Nine",
            10 : "Ten",
            11 : "Jack",
            12 : "Queen",
            13 : "King"
        }
        this.randNum = Math.floor((Math.random()*13) +1);
        this.r_n = Math.floor((Math.random() *4) + 0);
    }
    printCardSuit(){
        console.log(`${this.suit}`);
    }
    printCardVal(){
      for(var i = 1; i <=13; i++){
        console.log(`${this.val[i]}`);
      }
    }
    printCardNum(){
      for(var i=0; i<13; i++){
        console.log(`${Object.keys(this.val)[i]} this is a random number ${this.randNum}`);
      }
    }
    myCard(){
      let card_num = this.randNum;
      let x = this.r_n;
      let new_card = {
        "Suit" : this.suit[x],
        "Card" : this.val[card_num]
      }
      console.log(new_card);
       
    }
}

class Deck{
    constructor(){
        this.deck= [];
        this.num_of_cards = 52;
    }
    shuffle(){
        for(let i=0; i<this.num_of_cards; i++){
            let shuffle = Math.floor((Math.random()*13) +1)
            let temp = this.deck[shuffle];
            this.deck[shuffle] = this.deck[i];
            this.deck[i] = temp;
        }
    }
}
const newCard = new Card();
const newDeck = new Deck();
// newCard.printCardSuit();
// newCard.printCardVal();
// newCard.printCardNum();
// newCard.myCard();
newDeck.shuffle();