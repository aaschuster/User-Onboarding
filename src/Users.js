import React from "react";
import styled from "styled-components";

const StyledUser = styled.div`
    margin: 0.45% auto;
`

function Users ( { users } ) {
    return (
        <div>
            {users.map((user, idx) => {
                return (
                <StyledUser key={idx}>
                    {user.first_name} {user.last_name} - {user.email}
                </StyledUser>
                )
            })}
        </div>
    )
}

export default Users;