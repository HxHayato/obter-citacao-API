const citacao = document.querySelector('.citacao')
const autor = document.querySelector('.autor')
const botao = document.querySelector('.obter-citacao')

botao.addEventListener('click', (e) => {
    obterCitacao()
})

async function obterCitacao () {
    try {
        let response = await fetch('https://type.fit/api/quotes')
        let dados = await response.json();

        const citacaoIndex = Math.floor(Math.random() * dados.length)
        const citacaoSorteada = dados[citacaoIndex]

        citacao.textContent = `"${citacaoSorteada.text}"`
        autor.textContent = `- ${citacaoSorteada.author || 'Autor desconhecido'}`
        
    } catch (error) {
        
    }
}