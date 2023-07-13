let backpack = []

backpack.push('pokeball')
backpack.push('potion')
backpack.push('pokedollars')

// backpack.shift()
backpack.splice(0, 1)

let foundItem = 'waterstone'
backpack.push(foundItem)

backpack.pop()

// console.log(backpack.length)

backpack.push('greatball', 'antidote', 'revive')

let satchel = backpack.splice(2, 3)
// console.log(satchel)

for(let i = 0; i < 3; i++){
    console.log(backpack[i]) 
}


let guessMe = 54

while (guessMe < 100) {
    console.log('---------', guessMe)
    if (guessMe % 4 === 0 || guessMe % 5 === 0) {
        console.log('guessMe is divisible by4 or 5, added 25')
        guessMe += 25
    } else if (guessMe % 3 === 0) {
        guessMe -= 27
        console.log('guessMe is divisble by 3, subtracted by 27')
    } else {
        guessMe += 3
        console.log('guessMe hit else, added 3')
    }
    guessMe += 22
    console.log(`Added 22, guessMe is now: ${guessMe}`)
}

console.log('final value', guessMe)