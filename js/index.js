// Iteration 1: Names and Input

let hacker1="Jose"
console.log("The driver's name is " + hacker1)

let hacker2= "Chrome"
console.log(`The navigator's name is ${hacker2}`)
// Iteration 2: Conditionals

console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
console.log("It seems that the navigator has the longest name, it has" + " " + hacker2.length +" " + "characters")


// Iteration 3: Loops

 let newName="";
 for(let i=0; i<hacker1.length; i++){
    newName = newName + hacker1[i].toUpperCase()+" "
    
 }console.log (newName)

 let newAmen=""

 for (let i = hacker1.length-1; i>=0; i--){
  newAmen = newAmen + hacker1[i]
 }
console.log(newAmen)


let count1=0;
let count2=0;

if(hacker1.length < hacker2.length){
    for(let i =0; i < hacker1.length; i++){
        if(hacker1[i] < hacker2[i]){
            count1++
        }else if (hacker1[i] > hacker2[i]){
            count2++
        }
    }
}
 else if(hacker1.length>hacker2.length){
    for(let i=0; i<hacker2.length; i++){
        if(hacker1[i] < hacker2[i]){
            count1++
        }else if (hacker1[i] > hacker2[i]){
            count2++
        }
    }
 } 
else if(hacker1.length === hacker2.length){
    for(let i=0; i < hacker1.length; i++){
        if(hacker1[i] < hacker2[i]){
            count1 ++;
        }else if (hacker1[i] > hacker2[i]){
            count2++
        }
    }
}

if (count1 > count2){
    console.log(`The driver's name goes first.`)
} else if (count1 < count2){
    console.log(`Yo, the navigator goes first definitely.`)
    
}else { console.log (`What?! You both have the same name?`)}

//BONUS

let countWords ="Lorem Ipsum is simply dummy text of the printing and typesetting industry." 

espacio= countWords[5]

 let counter =0
 for(let i=0; i < countWords.length; i++){
    if( i=== espacio){
        counter++
    }
    console.log(counter)
    
 }
