import React from "react";

export default function Form( { formVals, onChange, onSubmit } ) {
    return (
        <div>
        <form onSubmit={onSubmit}>
            <label>
                First Name
                <input 
                    type="text"
                    onChange={onChange}
                    name="fname"
                    value={formVals.fname}    
                />
            </label>

            <label>
                Last Name
                <input 
                    type="text"
                    onChange={onChange}
                    name="lname"
                    value={formVals.lname}    
                />
            </label>

            <label>
                Email
                <input 
                    type="email"
                    onChange={onChange}
                    name="email"
                    value={formVals.email}    
                />
            </label>
            
            <label>
                Do you agree to the terms of service?
                <input 
                    type="checkbox"
                    onChange={onChange}
                    name="terms"
                    checked={formVals.terms}   
                />
            </label>

            <button>Submit</button>
        </form>
        </div>

    )
    
}