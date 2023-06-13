import { useEffect, useState } from "react"
import { Container } from "../global";
import { Cards, Card, Description, Line, Price } from "./style";

import { Link } from "react-router-dom";

const Home = () => {
    const [products, setProducts] = useState([])

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
    useEffect(() => {
        fetch(url,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ query })
        })
        .then(response => response.json())
        .then(data => setProducts(data.data.allProducts))
    },[])

    return(
        <Container>
            <Cards>
            {
                products.map((product) => {
                    const {
                        id,
                        name,
                        price_in_cents,
                        image_url
                    } = product

                    const price = price_in_cents
                    const valueEmReais = price / 100;
                    const formattedPrice = valueEmReais.toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                    });

                    return(
                        <Card key={id}>
                            <Link to={`/product/${id}`}>
                                <img src={image_url} alt="image product" />
                                <Description className="description">
                                    <p>{name}</p>
                                </Description>
                                <Line className="line"></Line>
                                <Price className="price">
                                    <p>{formattedPrice}</p>
                                </Price>
                            </Link>
                        </Card>
                    )
                })
            }
            </Cards>
        </Container>
    )
}

export default Home