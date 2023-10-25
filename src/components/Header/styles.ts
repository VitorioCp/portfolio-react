import styled from "styled-components"
import '../../assets/fonts.css'


export const HeaderPag = styled.header`
    header{
        font-family: Future;
        position: relative;
        padding: 0 2rem;  
    }

    .navbar{
        width: 100%;
        height: 60px;
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        text-shadow: 0.5px 0.5px 0 red;
    }

    .navbar .logo{
        font-size: 2rem;
        font-weight: bold;
        color: ${props => props.theme['red-500']};
    }
    .navbar .logo span{
        color: ${props => props.theme['yellow-500']};
    }

    .navbar .links{
        font-size: 1.5rem;
        display: flex;
        gap: 2rem;
        color: ${props => props.theme['red-500']};
        list-style: none;
    }

    .navbar .socias-media{
        gap: 1rem;
        display: flex;
    }

    .socias-media img{
        width: 20px;
    }

    a{
        text-decoration: none;
        color: ${props => props.theme['red-500']};
    }

    a:focus{
        color: #FF8585;
    }
`