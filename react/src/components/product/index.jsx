import { useEffect, useState } from "react";
import { Container } from "../global";
import { InfoProduct, BackPage, ContentProduct, ViewProduct, DescriptionProduct, Top, Bottom} from "./style";

import { Link, useParams } from "react-router-dom";

const Product = () => {
    const [product, setProduct] = useState([])
    const { id } = useParams()

    const url = 'http://localhost:3333/';
    const query = `
        query{
            Product(id:"${id}"){
                name
                description
                image_url
                created_at
                price_in_cents
                category
            }
        }
    `;
    useEffect(() => {
        fetch(url,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ query })
        })
        .then(response => response.json())
        .then(data => setProduct(data.data.Product))
    },[])

    const {
        name,
        description,
        image_url,
        price_in_cents,
        category
    } = product


    const price = price_in_cents
    const valueEmReais = price / 100;
    const formattedPrice = valueEmReais.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    })

    return(
        <Container>
            <InfoProduct>
                <BackPage>
                    <Link to="/">
                        <button>
                            <p>voltar</p>
                        </button>
                    </Link>
                </BackPage>
                {
                    product.length != 0 &&
                    <ContentProduct>
                        <img src={image_url} alt="image pruduto" />
                        <ViewProduct>
                            <DescriptionProduct>
                                <Top>
                                    <h3>{category}</h3>
                                    <h1>{name}</h1>
                                    <p>{formattedPrice}</p>
                                    <span>*Frete de R$40,00 para todo o Brasil. Grátis para compras acima de R$900,00.</span>
                                </Top>
                                <Bottom>
                                    <h2>Descrição</h2>
                                    <p>{description}</p>
                                </Bottom>
                            </DescriptionProduct>
                            <button>Adicionar ao carrinho</button>
                        </ViewProduct>
                    </ContentProduct>
                }
            </InfoProduct>
        </Container>
    )
}

export default Product