
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
const respostaElement =  document.querySelector('#resposta')
const inputPergunta = document.querySelector('form input')

fazerPergunta.addEventListener('click', (e)=>{
    e.preventDefault()
    if(inputPergunta.value == ""){
        alert('favor, colocar uma pergunta!')
        return
    }

    const pergunta = `<h2> ${inputPergunta.value} </h2>`


    const totalRespostas = respostas.length
    const ramdomNumber = Math.floor(Math.random()*totalRespostas)
    respostaElement.innerHTML = pergunta + `<p> ${respostas[ramdomNumber]} </p>` 

    //sumir respsota depois de 5s
    setTimeout(
        function(){
            respostaElement.style.opacity = 0;
        },
        5000
    )

})
