// import style
import styled from "styled-components";
import { css } from "styled-components";


// buat component button
const Button = styled.button`
    padding: 0.8rem 2rem;
    border: none;
    border-radius: 10px;
    color: #fff;
    cursor: pointer;

    // akses props variant
    background-color: ${({variant, theme}) => theme.colors[variant] || theme.colors.primary};

    // props full
    ${(props) => props.full && css `
        display: block ;
        width: 100%; 
    `}
    // props sm
    ${(props) => props.sm && css `
        font-size: 0.8rem;
        padding: 0.2rem 0.5rem;
    `}
    // props md
    ${(props) => props.md && css `
        font-size: 1rem;
        padding: 0.5rem 1rem;
    `}
    // props lg
    ${(props) => props.lg && css `
        font-size: 1.3rem;
        padding: 0.5rem 1rem;
    `}
`;

export default Button;