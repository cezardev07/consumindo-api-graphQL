import { styled } from "styled-components";

export const InfoProduct = styled.section`
    display: flex;
    flex-direction: column;
    gap: 23px;
`
export const BackPage = styled.div`
    button{
        cursor: pointer;
        border: none;
        background: transparent;
        color: #617480;
        font-size: 14px;
        line-height: 150%;
        text-transform: capitalize;
    }
`
export const ContentProduct = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
    img{
        width: 100%;
    }
    @media (max-width: 1063px) {
        grid-template-columns: repeat(1, 1fr);
    }
`
export const ViewProduct = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    button{
        cursor: pointer;
        padding: 15px;
        text-align: center;
        font-size: 16px;
        background: #115D8C;
        color: #ffffff;
        text-transform: uppercase;
        border: none;
    }
`
export const DescriptionProduct = styled.div`
    display: flex;
    flex-direction: column;
    gap: 48px;
    @media (max-width: 1063px) {
        padding: 20px;
    }
`
export const Top = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    h3{
        color: #41414D;
        font-size: 16px;
    }
    h1{
        color: #41414D;
        margin-top: -10px;
        font-size: 32px;
    }
    p{
        color: #09090A;
        font-size: 20px;
        line-height: 150%;
    }
    span{
        color: #41414D;
        font-size: 12px;
        line-height: 150%;
    }
    
`
export const Bottom = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`