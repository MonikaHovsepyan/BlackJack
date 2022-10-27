const cards = Array.from(document.getElementsByClassName('card'))
const finish1 = document.getElementById('finish1');
const finish2 = document.getElementById('finish2');
const newGame = document.getElementById('newGame');
let firstPlayerScore = document.getElementById('firstPlayerScore');
let secondPlayerScore = document.getElementById('secondPlayerScore');

let blocker = document.getElementById(`blocker`)
let results = document.getElementById(`results`)

let count = 0
let addcount = 1
let cardsArray = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'valet', 'dama', 'karol', 'tuz']
let firstPlayersRes = 0;
let secondPlayersRes = 0;



let newGameClick = () => {
    Array.from(document.getElementsByClassName('card')).map(el => {
        el.innerText = '';
        count = 0;
        addcount = 1;
        firstPlayersRes = 0;
        secondPlayersRes = 0;
        firstPlayerScore.innerText = `First players     Score: ${firstPlayersRes}`;
        secondPlayerScore.innerText = `Second players   Score: ${secondPlayersRes}`;
        blocker.style.display = `none`
    })
}

let popUpNewGame = document.createElement(`button`)
popUpNewGame.innerHTML = `New Game`
popUpNewGame.addEventListener(`click`, newGameClick)
popUpNewGame.style.color = `black`
popUpNewGame.style.backgroundColor = 'rgb(1, 39, 1)'
popUpNewGame.style.borderRadius = '15px'
popUpNewGame.style.marginTop = '20px'
popUpNewGame.style.cursor = 'pointer'
popUpNewGame.style.width = '20px'
popUpNewGame.style.width = '60px'
popUpNewGame.style.height = '60px'


cards.map((el, index) => {
    el.addEventListener('click', () => {
        if (count === index) {
            el.innerHTML = cardsArray[Math.floor(Math.random() * cardsArray.length)]
            count = count + addcount
            console.log(count)
            if (index % 2 === 0) {
                if (!isNaN(el.innerText)) {
                    firstPlayersRes = firstPlayersRes + Number(el.innerText);
                } else if (el.innerText === 'karol' || el.innerText === 'dama' || el.innerText === 'valet') {
                    firstPlayersRes = firstPlayersRes + 10;
                } else if (el.innerText === 'tuz') {
                    if (firstPlayersRes > 11) {
                        firstPlayersRes = firstPlayersRes + 1;
                    } else {
                        firstPlayersRes = firstPlayersRes + 11;
                    }
                }
            } else if (index % 2 === 1) {
                if (!isNaN(el.innerText)) {
                    secondPlayersRes = secondPlayersRes + Number(el.innerText);
                } else if (el.innerText === 'karol' || el.innerText === 'dama' || el.innerText === 'valet') {
                    secondPlayersRes = secondPlayersRes + 10;
                } else if (el.innerText === 'tuz') {
                    if (secondPlayersRes > 11) {
                        secondPlayersRes = secondPlayersRes + 1;
                    } else {
                        secondPlayersRes = secondPlayersRes + 11;
                    }
                }
            }
        }
        firstPlayerScore.innerText = `First players Score: ${firstPlayersRes}`;
        secondPlayerScore.innerText = `Second players Score: ${secondPlayersRes}`;

        if (firstPlayersRes > secondPlayersRes && firstPlayersRes > 21) {
            blocker.style.display = `flex`
            results.innerHTML = `
                <p> WINNER: Second player  ${secondPlayersRes} </p>
                <p> LOSER: First player ${firstPlayersRes} </p>
                `
            results.appendChild(popUpNewGame)
        } else if (firstPlayersRes === 21) {
            blocker.style.display = `flex`
            results.innerHTML = `
                <p> First player wins: 21 </p>
            `
            results.appendChild(popUpNewGame)
        }

        if (secondPlayersRes > firstPlayersRes && secondPlayersRes > 21) {
            blocker.style.display = `flex`
            results.innerHTML = `
                <p> WINNER: First player ${firstPlayersRes} </p>
                <p> LOSER: Second player ${secondPlayersRes} </p>
            `
            results.appendChild(popUpNewGame)
        } else if (secondPlayersRes === 21) {
            blocker.style.display = `flex`
            results.innerHTML = `
                <p> Second player wins: 21 </p>
            `
            results.appendChild(popUpNewGame)
        }
    })
})


finish1.addEventListener('click', () => {
    if (count % 2 === 1) {
        addcount = 2
    } else if (count % 2 === 0) {
        count = count + 1
        addcount = 2
    }
    console.log(count);
})

finish2.addEventListener('click', () => {
    if (count % 2 === 0) {
        addcount = 2
    } else if (count % 2 === 1) {
        count = count + 1
        addcount = 2
    }
})

// newGame.addEventListener('click', () => {
//     Array.from(document.getElementsByClassName('card')).map(el => {
//         el.innerText = '';
//         count = 0;
//         addcount = 1;
//         firstPlayersRes = 0;
//         secondPlayersRes = 0; 
//         firstPlayerScore.innerText = `First players     Score: ${firstPlayersRes}`;
//         secondPlayerScore.innerText = `Second players Score: ${secondPlayersRes}`;
//     })
// })






newGame.addEventListener(`click`, newGameClick)
