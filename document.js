/*const h1 = document.getElementById('titulo')
const p = document.querySelector('p')
const textoClass = document.getElementsByClassName('texto')

console.log(h1)
console.log(p)
console.log(textoClass)

h1.innerHTML += 'Elementos H1'

p.forEach((p) => {
    p.innerText += 'Elementos p'
})

for (let i = 0; i < textoClass.length; i++){
    textoClass[i].innerHTML += 'Alteração'
}*/
const inputNome = document.getElementById('form-nome')

function enviarNome(){
    console.log(`${inputNome.name}: ${inputNome.value}`)
}