const inputNome = document.getElementById('form-nome')
const inputSobrenome = document.getElementById('form-sobrenome')
const inputData = document.getElementById('form-nascimento')
const inputSexo = document.getElementById('form-sexo')
const inputAtividades = document.getElementById('form-atividades')
const inputEmail = document.getElementById('form-email')

function enviarNome(){
    console.log(`${inputNome.name}: ${inputNome.value}`)
    console.log(`${inputSobrenome.name}: ${inputSobrenome.value}`)
    console.log(`${inputData.name}: ${inputData.value}`)
    console.log(`${inputSexo.name}: ${inputSexo.value}`)
    console.log(`${inputAtividades.name}: ${inputAtividades.value}`)
    console.log(`${inputEmail.name}: ${inputEmail.value}`)
}
