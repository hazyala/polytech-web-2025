import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    padding: 1rem;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    background-color: palevioletred;
`

const Block = styled.div`
    padding: ${(props)=>props.padding}1rem;
    border : 1px solid black;
    border-radius: 1rem;
    background-color: ${(props)=>props.backgroundColor};
    color : white;
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
`

const blockItems =[
    {
        label:"Block 1",
        padding:"1rem",
        backgroundColor:"paleturquoise"
    },
    {
        label:"Block 2",
        padding:"1rem",
        backgroundColor:"palegoldenrod"
    },
    {
        label:"Block 3",
        padding:"1rem",
        backgroundColor:"palegreen"
    }
];

export default function Blocks(props) {
    return (
        <Wrapper>
            {
                blockItems.map((blockItem) => {
                    return (
                        <Block
                            padding={blockItem.padding}
                            backgroundColor={blockItem.backgroundColor}
                        >
                            {blockItem.label}
                        </Block>
                    )
                })
            }
        </Wrapper>
    )
}