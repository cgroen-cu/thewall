import { useStickyState } from "../hooks/useStickyState"
import History from "./History";
import Input from "./Input";
import styled from "styled-components"
import DecorativeLineBreak from "./DecorativeLineBreak";



export default function CommentApp() {
    // instead of just a default value, also provide a key
    const [data, setData] = useStickyState([], 'comments');
    const [dataAth, setDataAth] = useStickyState([], 'author');

    const addComment = (newComment) => {
        setData([...data, newComment])
    }


    return <Wrapper>
            <DecorativeArc>
                <Title>THE WALL</Title>

                {
                    data.length > 0 ? (
                    <>
                    <DecorativeLineBreak />
                    <History data={data} />
                    <DecorativeLineBreak />

                    <Spacer height={30} />
                    </> )
                    : (
                        <Spacer height={40} />
                    )
                }
                <Input addComment={addComment}/>
            </DecorativeArc>
    </Wrapper>
}

const Spacer = styled.div`
    height: ${(p) => p.height}px;
`

const Wrapper = styled.main`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 30px max(10px, 10%);
`

const Column = styled.div`
    display: flex;
    flex-direction: column;
`

const DecorativeArc = styled.div`
    border: 5px solid lightgreen;
    background-color: rgb(10,10,10);
    width: min(100%, 800px);
    padding: 20px 10%;
`

const Title = styled.h1`
    font-size: 4rem;
    text-transform: none;
    letter-spacing: 0px;
    line-height: 1;
    font-family: 'Lalezar', serif;
`

const Button = styled.button`
    background: transparent;
    width: 100%;
    border: 3px solid var(--burnt);
    border-radius: 5px;
    color: var(--burnt);
    font-size: 1.2rem;
    font-weight: 500;
    text-transform: inherit;
    letter-spacing: inherit;
    padding: 15px;
    cursor: pointer;
    transition: all 200ms;
    &:hover {
        background-color: var(--burnt);
        color: var(--parchment);
    }
`

const ImageWrapper = styled.div`
    width: 100%;
    /* cut off the extra whitespace within image  */
    margin-top: -90px;
    margin-bottom: -40px;
    img {
        width: 100%;
        object-fit: cover;
        display: block;
    }
` 