import styled from 'styled-components';
import { Carousel } from 'antd';
import {ReactComponent as Leftarrow} from '../../assets/icon/Left.svg'
import {ReactComponent as Rightarrow} from '../../assets/icon/Right.svg'




const Wrapper = styled.div`
    position: relative;
`
const Title =styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    gap: 25px;
    z-index: 999;
    left:100px;
    top: 5px;
    h1{
        font-size: 60px;
        width: 630px;
        color: white;
    }
    h2{
        color: white;
        width: 600px;
    }
    span{
        width: fit-content;
        color: white;
        font-weight: 650;
        font-size: 24px;
        border-bottom: 1px solid white;
    }
    
`
const Container = styled(Carousel)``

const Icons = styled.div`
    position: absolute;
    top: 30%;
    z-index: 999;
    padding: 0 30px;
    width:100%;
`

Icons.Left =styled(Leftarrow)`
    position: absolute;
    width: 45px;
    height: 45px;
    padding: 12px;
    color: white;
    background-color: white;
    opacity: 0.5;
    border-radius: 50%;
    z-index: 999;
    cursor: pointer;
    user-select: none;
    :hover{
        opacity: 0.77;
    }
    & path {
        fill: #0d263b;
    }
    
`

Icons.Right =styled(Rightarrow)`
    position: absolute;
    width: 45px;
    height: 45px;
    padding: 12px;
    color: white;
    background-color: white;
    opacity: 0.5;
    border-radius: 50%;
    z-index: 999;
    left:94.7%;
    cursor: pointer;
    user-select: none;
    :hover{
        opacity: 0.77;
    }
    & path {
        fill: #0d263b;
    }
`

const Card =styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 310px;
    height: 250px;
    border-top: 4px solid var(--primaryColor);
    background-color: white;
    -webkit-box-shadow: 0px 0px 48px 2px rgba(129, 144, 156, 0.2);
    -moz-box-shadow: 0px 0px 48px 2px rgba(129, 144, 156, 0.2);
    box-shadow: 0px 0px 48px 2px rgba(129, 144, 156, 0.2);
`
Card.Item=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 50px;
    a{
        text-decoration: none;
        font-size: 18px;
        font-weight: 600;
        color: var(--primaryColor);
        :hover{
            color: black;
        }
    }
`
const Img = styled.img`
    filter: brightness(30%);
`

const CardSection=styled.div`
    position: relative;
    z-index: 999;
    bottom: 65px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0 200px;
`

Card.Item=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 50px;
    a{
        text-decoration: none;
        font-size: 18px;
        font-weight: 600;
        color: var(--primaryColor);
        :hover{
            color: black;
        }
    }

`




export{Wrapper,Container,Img,Icons,CardSection,Card,Title}

