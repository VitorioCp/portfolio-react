import styled from "styled-components";

export const LanguageContainer = styled.div`
  h1 {
    font-family: Future;
    color: ${(props) => props.theme["yellow-500"]};
    text-shadow: 0.5px 0.5px red;
  }
.container{
    margin-top: 150px;
    text-align: center !important;
    display: block !important;
    padding: 0 20%;
}
  .box {
    background-color: ${(props) => props.theme["black-200"]};
    width: 50%;
    z-index: -1;
    height: 120px;
    margin-top: -10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .box-children {
    background-color: ${(props) => props.theme["black-500"]};
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .slide-item{
    width: 100px;
    height: 100px ;
    object-fit: cover;
  }
  
`;
