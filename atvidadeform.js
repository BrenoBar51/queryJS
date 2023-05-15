const inputNome = document.getElementById('form-nome')
const inputSobrenome = document.getElementById('form-sobrenome')
const inputData = document.getElementById('form-nascimento')
const inputSexo = document.getElementById('form-sexo')
const inputAtividades = document.getElementById('form-atividades')
const inputEmail = document.getElementById('form-email')

function enviarNome(){
    console.log(`${inputNome.name}: ${inputNome.value}`)
    console.log(`${inputSobrenome.name}: ${inputNome.value}`)
    console.log(`${inputData.name}: ${inputNome.value}`)
    console.log(`${inputSexo.name}: ${inputNome.value}`)
    console.log(`${inputAtividades.name}: ${inputNome.value}`)
    console.log(`${inputEmail.name}: ${inputNome.value}`)
}
