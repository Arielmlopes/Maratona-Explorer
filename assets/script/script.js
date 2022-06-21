
const respostas = [
    "Certeza!",
    "Não tenho tanta certeza.",
    "É decidamente assim.",
    "Não conte com isso.",
    "Sem dúvidas.",
    "Pergunte Novamente Mais tarde.",
    "Sim, Definitivamente.",
    "Minha resposta é não.",
    "Você pode contar com isso.",
    "Melhor nao te dizer agora.",
    "A meu ver, sim.",
    "Minhas fontes dizem que Não.",
    "Provavelmente.",
    "Não é possivel prever agora.",
    "Perspectiva boa.",
    "As perspectivas não são tão boas.",
    "sim!",
    "Concentre-se e pergunte novamente.",
    "Sinais apontam que sim.",
]
const fazerPergunta = document.querySelector('form button')
const resposta =  document.querySelector('#resposta')

fazerPergunta.addEventListener('click', (e)=>{
    e.preventDefault()
    const totalRespostas = resposta.length
    const ramdomNumber = Math.floor(Math.random()*totalRespostas)

})