const random = length => {
    let password = ''
    do {
        password += Math.random().toString(36).substring(2)
    } while (password.length < length){
        password = password.substring(0, length)
        return password
    }
}

console.log(random(10))

// Altere o 10 para o valor desejado em sua senha!