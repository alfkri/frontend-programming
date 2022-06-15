import styled from "styled-components";

const StyledNavbar = styled.div`

    background-color: #000000;
    padding: 1rem ;
    color: #E50914;

    h1 {
        padding: 1rem;
    }

    ul {
        list-style: none;
    }
    
    li{
        margin-bottom: 1rem;
    }

    a {
        color: #E50914;
        text-decoration: none;
    }

    @media screen and (min-width: 768px){
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        h1{
            margin-bottom: 0;
        }

        ul{
            display: flex;
            flex-direction: row;
        }

        li{
            margin: 0 1rem;
            font-weight: bold;
        }
    }

`;

export default StyledNavbar;