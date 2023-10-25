import styled from "styled-components";
import '../../assets/fonts.css'
export const HomeContainer = styled.div`
    #home{
        height: 100vh;
    }

    #home .containerHome{
        display: flex;
        margin-top: 200px ;
        width: 100%;
        justify-content: space-between;
    }

    .box-1{
        font-family: Future;
        padding: 0 10%;
    }
    .box-1 h1{
        color: ${props => props.theme['red-500']};
        text-shadow: 0.5px 0.5px 0 red;
    }
    .box-1 h1 span{
        color: ${props => props.theme['yellow-500']};
    }
    .box-1 p{
        margin-top: 50px;
        color: ${props => props.theme['yellow-500']};
        font-family: Ruda;
        max-width: 400px;
    }

    .box-2{
        color: ${props => props.theme['yellow-500']};
        padding: 0 10%;
    }

    .box-2 h1{
        font-family: Future;
        text-shadow: 0.5px 0.5px 0 red;
        
    }

    .box-2 p{
        color: ${props => props.theme['yellow-500']};
        margin-top: 50px;
        font-family: Ruda;
        
    }

    .box-2 .text-info{
        display: flex;
        flex-direction: column;
        max-width: 400px;
    }
    .box-2 img{
        margin-left: 5%;
    }

`