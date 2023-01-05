import React from "react";
import styled from "styled-components";

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    margin: 0.2% auto;
    align-items: center;
    height: 40vh;
    min-height: 175px;
    max-height: 200px;
    justify-content: space-around;
`

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 14%;
    justify-content: space-around;
    height: 100px;
    align-items: flex-end;
`

export default function Form( { formVals, onChange, onSubmit, disabled } ) {
    return (
        <StyledForm onSubmit={onSubmit}>
            <StyledDiv>
                <label>
                    First Name: <input 
                        type="text"
                        onChange={onChange}
                        name="fname"
                        value={formVals.fname}    
                    />
                </label>

                <label>
                    Last Name: <input 
                        type="text"
                        onChange={onChange}
                        name="lname"
                        value={formVals.lname}    
                    />
                </label>

                <label>
                    Email: <input 
                        type="email"
                        onChange={onChange}
                        name="email"
                        value={formVals.email}    
                    />
                </label>
            </StyledDiv>
            
            <label>
                Do you agree to the terms of service?
                <input 
                    type="checkbox"
                    onChange={onChange}
                    name="terms"
                    checked={formVals.terms}   
                />
            </label>

            <button disabled={disabled}>Submit</button>
        </StyledForm>

    )
    
}