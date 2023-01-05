import React from 'react'

export default function Errs ( {formErrs} ) {
    const { fname, lname, email, terms } = formErrs;
    return(
        <div>
            {fname} {lname} {email} {terms}
        </div>
    )
}