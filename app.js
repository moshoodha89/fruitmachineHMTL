'use strict';
// const prompt = require('prompt-sync')({sigint: true});
//Apple, Banana, Cherry, Diamond

/* You can refactor your code like this:
const a= 'Apple'
const b= 'Banana'
const c= 'Cherry'
const d= 'Diamond'
*/

const reel1=['Grapes', 'Melon Watermelon', 'Tangerine', 'Lemon', 'Banana', 'Pineapple', 'Mango', 'Red Apple']
const reel2=['Banana', 'Apple', 'Cherry', 'Diamond','Banana', 'kiwi', 'Cherry', 'Diamond','Cherry', 'Diamond']
const reel3=['Apple', 'Cherry', 'kiwi', 'Apple', 'Cherry', 'Banana','Apple', 'Cherry', 'Banana','Diamond']

/*
const reel1 = [a, b, c, d, d, c, c, d]
const 
*/

let money = 100; //not a constant because it will be spent.

// let started-process.hrtime() //returns 
// let r = document.getElementById("reel1");
// r.scrollTop = 100;

// let r=document.getElementsByClassName("reel")
// r[0].scrollTop = 100

let costPerSpin = 10

// while (money>costPerSpin){      //while the value of money is not zero, do the actions in the block
function spinReels() {
    let r=document.getElementsByClassName("reel")
    r[0].scrollTop = 100        
    
    console.log('You have $' + money)
    // prompt("Press Enter to spin the reel")
    money = money - costPerSpin
    //you can use money-- instead to deduct 1 from money each time
    // you can also use money-=1

    let p1 = Math.floor(Math.random() * 10)
    let p2 = Math.floor(Math.random() * 10)
    let p3 = Math.floor(Math.random() * 10)
    
    console.log(reel1[p1] + ' ' + reel2[p2] + ' ' + reel3[p3])

    if (reel1[p1]==reel2[p2] && reel2[p2]==reel3[p3]){

        console.log ('You win :o)')
        if (reel1[p1]=='Apple'){
            money = money + 2
            console.log ('£2')
        }
    
        else if (reel1[p1]=='Diamond') {
            money = money + 5 
            console.log ('£5')
    }

        else if (reel[p1]=='Cherry') {
            money = money + 7
            console.log ('£10')

    }
        else {
        console.log ('You lose')
    }

    }
}
console.log ('You are out of money - gambling is fools game')


