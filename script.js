    let oyuncu1 = prompt('İlk Oyuncunun ismini giriniz: ');
    let oyuncu2 = prompt('İkinci Oyuncunun ismini giriniz: ');

    document.getElementById('player-1').innerHTML = ' ' + oyuncu1;
    document.getElementById('player-2').innerHTML = ' ' + oyuncu2;

const player1ChoiceDisplay = document.getElementById('player1-choice');
const player2ChoiceDisplay = document.getElementById('player2-choice');
const resultDisplay = document.getElementById('result');

const player1Choice = document.querySelectorAll('button.player1choice');
const img1 = document.getElementById('img1')

const player2Choice = document.querySelectorAll('button.player2choice');
const img2 = document.getElementById('img2')

let result1 = document.getElementById('numb1');
let result2 = document.getElementById('numb2');


let player1
let player2
let result

player1Choice.forEach(player1Choice => player1Choice.addEventListener('click', (e) => {
    player1 = e.target.id
    player1ChoiceDisplay.innerHTML = ' ' + player1

    if (player1 == 'Rock'){
        img1.src = "./img/rock.jpg" 
    } else if (player1 == "Paper") {
        img1.src = "./img/paper.jpg" 
    } else { 
        img1.src = "./img/scissors.jpg" 
    }
}))

player2Choice.forEach(player2Choice => player2Choice.addEventListener('click', (e) => {
    player2 = e.target.id
    player2ChoiceDisplay.innerHTML = ' ' + player2

    if (player2 == 'Rock'){
        img2.src = "./img/rock.jpg" 
    } else if (player2 == "Paper") {
        img2.src = "./img/paper.jpg" 
    } else { 
        img2.src = "./img/scissors.jpg" 
    }
}))

const resultColor = document.getElementById('result');

if (resultColor.innerHTML == 'Its a Draw!') {
    resultColor.style.color = 'orange';
} else {
    resultColor.style.color = 'green'
}



 function getResult() {
     if (player1ChoiceDisplay.innerHTML === player2ChoiceDisplay.innerHTML) {
         result = 'Its a Draw!'
     } else if (player1ChoiceDisplay.innerHTML === 'Rock' && player2ChoiceDisplay.innerHTML === 'Paper') {
         result = oyuncu2 + ' Kazandı!'
         f2();
         result2.innerHTML = sum2;
     } else if (player1ChoiceDisplay.innerHTML === 'Rock' && player2ChoiceDisplay.innerHTML === 'Scissors') {
         result = oyuncu1 + " Kazandı!"
         f1();
         result1.innerHTML = sum1;
     } else if (player1ChoiceDisplay.innerHTML === 'Paper' && player2ChoiceDisplay.innerHTML === 'Scissors'){
         result = oyuncu2 + ' Kazandı!'
         f2();
         result2.innerHTML = sum2;
     } else if (player1ChoiceDisplay.innerHTML === 'Paper' && player2ChoiceDisplay.innerHTML === 'Rock') {
         result = oyuncu1 + " Kazandı!"
         f1();
         result1.innerHTML = sum1;
     } else if (player1ChoiceDisplay.innerHTML === 'Scissors' && player2ChoiceDisplay.innerHTML === 'Rock') {
         result = oyuncu2 + ' Kazandı!'
         f2();
         result2.innerHTML = sum2;
     } else if (player1ChoiceDisplay.innerHTML === 'Scissors' && player2ChoiceDisplay.innerHTML === 'Paper') {
     result = oyuncu1 + " Kazandı!"
     f1();
         result1.innerHTML = sum1;
     }
     resultDisplay.innerHTML = result;

     
  


    //   if (resultDisplay.innerHTML == oyuncu1 + " Kazandı!") {
      
    //   } else if (resultDisplay.innerHTML == oyuncu2 + " Kazandı!") {
        
       
    //   }
    
 }

 let sum1 = 0;
 const f1 = () => {
   sum1++;
 }

 let sum2 = 0;
 const f2 = () => {
   sum2++;
 }


document.addEventListener('keydown', function(event){
   
    player1Press(event.key);
    player2Press(event.key);
    setTimeout(getResult,3000)
    
    
});

function player1Press(key) {
    switch (key) {
        case "a":
            setTimeout(function () {
                player1ChoiceDisplay.innerHTML = 'Rock'
                document.getElementById('img1').src = './img/rock.jpg'
            },2000)
            break;
        case "s":
            setTimeout(function () {
                player1ChoiceDisplay.innerHTML = 'Paper'
                document.getElementById('img1').src = './img/paper.jpg'
            },2000)
            break;
        case "d":
            setTimeout(function () {
                player1ChoiceDisplay.innerHTML = 'Scissors'
                document.getElementById('img1').src = './img/scissors.jpg'
            },2000)
            break;
    }
}

function player2Press(key) {
    switch (key) {
        case "1":
            setTimeout(function () {
                player2ChoiceDisplay.innerHTML = 'Rock'
                document.getElementById('img2').src = './img/rock.jpg'
            },2000)
            break;
        case "2":
            setTimeout(function () {
                player2ChoiceDisplay.innerHTML = 'Paper'
                document.getElementById('img2').src = './img/paper.jpg'
            },2000)
            break;
        case "3":
            setTimeout(function () {
                player2ChoiceDisplay.innerHTML = 'Scissors'
                document.getElementById('img2').src = './img/scissors.jpg'
            },2000)
            break;
    }
}


// İki tarafta seçimlerini yaptıktan sonra ENTER tuşunu basılacak ve sonuç 3 saniye sonra resimlerin animasyonundan sonra ekrana yazdırılacak.

function imgChange () {
    
    if (document.getElementById('img1').src = "./img/rock.jpg"){
        document.getElementById('img1').src =  "./img/paper.jpg"
    }
        
}
