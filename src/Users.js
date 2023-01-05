import React from "react";

function Users ( { users } ) {
    return (
        <div>
            {users.map((user, idx) => {
                return (
                <div key={idx}>
                    {user.first_name} {user.last_name} {user.email}
                </div>
                )
            })}
        </div>
    )
}

export default Users;