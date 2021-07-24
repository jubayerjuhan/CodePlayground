import React, { useEffect, useState } from 'react';
import ShowUser from "./ShowUser";

const LoadUsers = () => {
    const [user, setUser] = useState([])

    useEffect(() => {
        const userApi = 'https://jsonplaceholder.typicode.com/users';
        fetch(userApi)
        .then(res => res.json())
        .then(user => setUser(user))
    }, [])

    console.log(user);
    return (
        <div>
            {
                user.map(user => <ShowUser user={user}></ShowUser>)
            }
        </div>
    );
};

export default LoadUsers;