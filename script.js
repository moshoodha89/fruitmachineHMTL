'use strict';
//https://javascript.info/strict-mode  or 
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
//This program is written very naively - on purpose 
//There will be future excercises to improve the program design and structure
//const prompt = require('prompt-sync')({sigint: true});
//Apple Banana Cherry Diamond
const apple= "Apple"
const banana= "Banana"
const cherry= "Cherry"
const diamond= "Diamond"
const reel1=[apple,banana,cherry,diamond,apple,diamond,cherry,banana,apple,apple]
const reel2=[banana,cherry,diamond,apple,diamond,cherry,banana,apple,apple,banana]
const reel3=[cherry,apple,banana,cherry,diamond,apple,diamond,cherry,banana,apple]
let money = 100
// let started=process.hrtime() //returns a [seconds][nanoseonds] tuple
let costPerSpin = 1
function spinReels(){
    console.log('You have £' + money )  
    let r=document.getElementById("reel1")
    r.scrollTop=100
    //prompt('Press enter to spin the wheels')    
    money = money - costPerSpin  //Pay £1 to play
    let p1 = Math.floor(Math.random() * 10) // where a reel stops
    let p2 = Math.floor(Math.random() * 10)
    let p3 = Math.floor(Math.random() * 10)
    console.log(reel1[p1] + ' ' + reel2[p2] + ' ' + reel3[p3])
    if (checkReelsMatch(p1,p2,p3)){
        console.log ('You win :o)')
        if (reel1[p1]=='Apple'){
            money = money + 2
            console.log ('£2')
        }
        else if (reel1[p1]=='Banana'){
            money = money + 3
            console.log ('£3')
        }
        else if (reel1[p1]=='Cherry'){
            money = money + 5
            console.log ('£5')
        }       
        else if (reel1[p1]=='Diamond'){
            money = money + 20
            console.log ('£20')
        }  
    }
    else{
        console.log('You lose :o(')
    }
}   
console.log ("You are out of money - gambling is a fools game") 
// let took=process.hrtime(started)
// console.log (took[0] +" seconds and " + took[1] /1e6 + " milliseconds")
function checkReelsMatch(p1,p2,p3){
    if (check3theSame(p1,p2,p3)){
        return true
    }
}
function check3theSame(a,b,c){
    if(a==b && b==c){
        return true
    }
} 