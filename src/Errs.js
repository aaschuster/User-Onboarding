import React from 'react'
import styled from "styled-components";

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    color: red;
    text-weight: bold;
`

const StyledP = styled.p`
    margin: 0.3% auto;
`

export default function Errs ( {formErrs} ) {
    const { fname, lname, email, terms } = formErrs;
    return(
        <StyledDiv>
            {fname&&<StyledP>{fname}</StyledP>}
            {lname&&<StyledP>{lname}</StyledP>}
            {email&&<StyledP>{email}</StyledP>}
            {terms&&<StyledP>{terms}</StyledP>}
        </StyledDiv>
    )
}