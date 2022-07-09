//Função que cria o html base da minha aplicação

function createBasicHtml() {
    //Criação das tag: Main
    let body = document.querySelector("body")
    let main = document.createElement("main")
    body.appendChild(main)

    //Criação das tag: header
    let header = document.createElement("header")
    main.appendChild(header)

    //Criação da tag: img
    let img2 = document.createElement("img")
    img2.src = '../img/walking.gif'
    img2.alt = 'man walking market'
    header.appendChild(img2)

    //Criação da tag: h1
    let h1 = document.createElement("h1")
    h1.innerText = (`Virtual Market`)
    header.appendChild(h1)

    //Criação da tag: img
    let img = document.createElement("img")
    img.src = '../img/market.png'
    img.alt = 'market image'
    header.appendChild(img)

    //Criação da tag: section
    let section = document.createElement("section")
    section.classList.add("container")
    main.appendChild(section)

    //Criação da tag: ul
    let ul = document.createElement("ul")
    ul.classList.add("productList")
    section.appendChild(ul)
    return body
}
createBasicHtml()

//Array para armazenar os valores em reais.
let price = []


//Função que pega cada item do meu "Banco de dados" individualmente.
function item(array) {
    for(i = 0; i < array.length; i++) {
        let select = document.querySelector(".productList")
        let create = createItem(array[i])
        select.appendChild(create)
    }
}
item(produtos)




// Função que pega os itens do banco de dados individualmente e os trata, criando uma sessão de itens no html.
function createItem(produto) {
    price.push(produto.preco)
    let li = document.createElement("li")
    li.classList.add("productItem")

    let p = document.createElement("p")
    p.innerText = (`${produto.nome}`)
    li.appendChild(p)

    let span = document.createElement("span")
    produto.preco == 'Valor' ? span.innerText = (`${produto.preco}`) : span.innerText = (`R$ ${produto.preco}`)
    li.appendChild(span)

    return li
}



// Tratamento dos valores para efetuar a soma total
price.shift()
const somarValores = price => ( price.reduce( (value,nextValue) => value + nextValue ) )
let resultadoSoma = somarValores(price).toFixed(2)



// Função que cria meu "Resultado total" no html.
function totalHtml(resultado) {
    let section = document.querySelector(".container")

    let ul = document.createElement("ul")
    ul.classList.add("productDetails")

    let li = document.createElement("li")
    li.classList.add("productSome")

    let p = document.createElement("p")
    p.innerText = (`Total`)
    li.appendChild(p)

    let span = document.createElement("span")
    span.innerText = (`R$ ${resultado}`)
    li.appendChild(span)

    ul.appendChild(li)
    return section.appendChild(ul)
}



// Função que cria minha sessão " Finalizar Compra " no html.
function createButton() {
    let select = document.querySelector(".productDetails")

    let li = document.createElement("li")
    li.classList.add("productSome")
    li.classList.add("button")

    let button = document.createElement("button")
    button.classList.add("ButtonEnd")
    button.innerText = "Finalizar Compra"
    button.type = "submit"
    li.appendChild(button)

    select.appendChild(li)
}
totalHtml(resultadoSoma)
createButton()