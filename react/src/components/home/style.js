import { styled } from "styled-components";

export const Cards = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 30px;
    flex-wrap: wrap;
`
export const Card = styled.article`
    width: 256px;
    overflow: hidden;
    border-radius: 5px;
    background: #FFFFFF66;
    img{
        width: 100%;
        height: 250px;
    }
`
export const Description = styled.div`
    padding: 0 12px;
    padding-top: 8px;
    p{
        color: #41414D;
        font-weight: 300;
        font-size: 16px;
        line-height: 150%;
    }
`
export const Line = styled.div`
    height: 1px;
    background: #DCE2E5;
    margin: 8px 12px;
`
export const Price = styled.div`
    padding: 0 12px;
    padding-bottom: 8px;
    p{
        color: #09090A;
        font-weight: bold;
        font-size: 14px;
        line-height: 150%;
    }
`