const cardsDOM = document.querySelector(".cards")

const btn_all = document.querySelector("#list-all-products")
const btn_camisetas = document.querySelector("#list-camisetas")
const btn_canecas = document.querySelector("#list-canecas")

const url = 'http://localhost:3333/';
const query = `
    query{
        allProducts{
            id
            name
            price_in_cents
            image_url
        }
    }
`;

const get = async () => {
    const res = await fetch(url, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query })
    })

    const data = await res.json()
    // const test = [] TESTE
    // test.push(data.data.allProducts)

    const produtos = data.data.allProducts
    let produto

    for(produto of produtos){

        const img_produtos = produto.image_url
        const name = produto.name
        const price = produto.price_in_cents

        const formattedPrice = price.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        });

        const article = document.createElement("article")

        article.innerHTML = `
            <div class="img">
                <img src="${img_produtos}" alt="">
            </div>
            <div class="description">
                <p>${name}</p>
            </div>
            <div class="line"></div>
            <div class="value">
                <strong>${formattedPrice}</strong>
            </div>
        `

        cardsDOM.appendChild(article)
    }

    filterCadar()
    listarTodosProdutos()
    listarCamisetas()
    listarCanecas()

    viewInfoProduto()
}

const filterCadar = () => {
    const inp = document.querySelector("input")
    const cards = document.querySelectorAll("article")

    inp.addEventListener("input", () => {
        
        btn_all.classList.add("active")
        btn_camisetas.classList.remove("active")
        btn_canecas.classList.remove("active")

        for(let card of cards){
            const txtInp = inp.value
            const txtItems = card.children[1].innerText
            const valueInp = txtInp.toLowerCase()
            const valueTxt = txtItems.toLowerCase()

            if(valueTxt.includes(valueInp)){
                card.classList.remove("close")
            } else {
                card.classList.add("close")
            }
        }
    })
}

const listarTodosProdutos = () => {
    const cards = document.querySelectorAll("article")
    
    btn_all.addEventListener("click", () => {
        btn_all.classList.add("active")
        btn_camisetas.classList.remove("active")
        btn_canecas.classList.remove("active")

        for(let card of cards){
            card.classList.remove("close")
        }
    })
}

const listarCamisetas = () => {
    const cards = document.querySelectorAll("article")

    btn_camisetas.addEventListener("click", () => {
        btn_all.classList.remove("active")
        btn_camisetas.classList.add("active")
        btn_canecas.classList.remove("active")

        for(let card of cards){
            const txtCamisetas = "camiseta"
            const txtItems = card.children[1].innerText
            const valueTxt = txtItems.toLowerCase()

            if(valueTxt.includes(txtCamisetas)){
                card.classList.remove("close")
            } else {
                card.classList.add("close")
            }
        }
    })
}

const listarCanecas = () => {
    const cards = document.querySelectorAll("article")

    btn_canecas.addEventListener("click", () => {
        btn_all.classList.remove("active")
        btn_camisetas.classList.remove("active")
        btn_canecas.classList.add("active")

        for(let card of cards){
            const txtCanecas = "caneca"
            const txtItems = card.children[1].innerText
            const valueTxt = txtItems.toLowerCase()

            if(valueTxt.includes(txtCanecas)){
                card.classList.remove("close")
            } else {
                card.classList.add("close")
            }
        }
    })
}

const viewInfoProduto = () => {
    const main = document.querySelector("main")
    const cards = document.querySelectorAll("article")
    const section_produto = document.querySelector(".produto")
    const produto_img = document.querySelector(".produto img")

    const btn_voltar = document.querySelector(".btn-voltar-home")

    cards.forEach(card => [
        card.addEventListener("click", () => {
            const { src } = card.children[0].children[0]
            produto_img.src = src
            addClassNone(main)
            removeClassNone(section_produto)
        })
    ])

    btn_voltar.addEventListener("click", () => {
        addClassNone(section_produto)
        removeClassNone(main)
    })

    function addClassNone(tag){
        tag.classList.add("none")
    }
    function removeClassNone(tag){
        tag.classList.remove("none")
    }
}

get()