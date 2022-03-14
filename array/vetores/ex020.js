let num = [5,6,3,2,8]
num.sort() //Colocar os valores em ordem crescente
num.push(9) //Adcionar um valor novo no final, ele cria uma casa nova
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor é ${num[0]}`)

//Modo mais simples, novo modo de usar

for(let pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

// Forma tradicional

/*for(let pos = 0; pos<num.length; pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}*/