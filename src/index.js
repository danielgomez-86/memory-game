document.addEventListener('DOMContentLoaded', () => {

    const cards = [
        {
            name:'fries',
            img: 'src/images/fries.png'
        },{
            name: 'cheeseburger',
            img: 'src/images/cheeseburger.png'
        },{
            name: 'hotdog',
            img: 'src/images/hotdog.png'
        },{
            name: 'ice-cream',
            img: 'src/images/ice-cream.png'
        },{
            name: 'milkshake',
            img: 'src/images/milkshake.png'
        },{
            name: 'pizza',
            img: 'src/images/pizza.png'
        },{
            name:'fries',
            img: 'src/images/fries.png'
        },{
            name: 'cheeseburger',
            img: 'src/images/cheeseburger.png'
        },{
            name: 'hotdog',
            img: 'src/images/hotdog.png'
        },{
            name: 'ice-cream',
            img: 'src/images/ice-cream.png'
        },{
            name: 'milkshake',
            img: 'src/images/milkshake.png'
        },{
            name: 'pizza',
            img: 'src/images/pizza.png'
        }];

    cards.sort(() => 0.5 - Math.random());
    console.log(cards)

    const grid = document.querySelector('.grid');
    const scoreDisplay = document.getElementById('result');
    let cardsFlipped = [];
    let cardsFlippedID = [];
    let cardsWon = [];
        
    function createBoard() {
        for (let i = 0; i < cards.length; i++) {
            const card = document.createElement('img');
            card.setAttribute('src', 'src/images/blank.png');
            card.classList.add('card');
            card.setAttribute('data-id', i);
            card.addEventListener('click',flipCard);
            grid.appendChild(card);
        }

        scoreDisplay.textContent = ' ' + 0;
    }

    function flipCard() {       
        let cardID = this.getAttribute('data-id');
        this.setAttribute('src', cards[cardID].img);
        
        cardsFlipped.push(cards[cardID].name);
        cardsFlippedID.push(cardID);    
               
        if (cardsFlipped.length === 2) {
            setTimeout(checkForMatch, 500);
        }       

        console.log(cardsFlippedID)
    }

    function checkForMatch() {
        const allCards = document.querySelectorAll('img');
        const optionIdOne = cardsFlippedID[0];
        const optionIdTwo = cardsFlippedID[1];

        if(optionIdOne === optionIdTwo) {
            alert('You have clicked the same card TWICE!');
            allCards[optionIdOne].setAttribute('src', 'src/images/blank.png');
            allCards[optionIdTwo].setAttribute('src', 'src/images/blank.png');
        } else if (cardsFlipped[0] === cardsFlipped[1]) {
            allCards[optionIdOne].setAttribute('src', 'src/images/white.png');
            allCards[optionIdTwo].setAttribute('src', 'src/images/white.png');
            allCards[optionIdOne].removeEventListener('click', flipCard);
            allCards[optionIdTwo].removeEventListener('click', flipCard);
            cardsWon.push(cardsFlipped);
        } else {
            allCards[optionIdOne].setAttribute('src', 'src/images/blank.png');
            allCards[optionIdTwo].setAttribute('src', 'src/images/blank.png');
        }
        cardsFlipped = [];
        cardsFlippedID = [];
        scoreDisplay.textContent = ' ' + cardsWon.length;

        if(cardsWon.length === cards.length / 2) {
            scoreDisplay.textContent = ' ' + cardsWon.length + ' ...You have WON!';
        }
    }
    createBoard();
})