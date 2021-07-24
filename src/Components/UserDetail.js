import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UserDetail = () => {
    const { id } = useParams();
    console.log(id);

    const [user, setUser] = useState({})

    useEffect(() => {
        const apiurl = `https://jsonplaceholder.typicode.com/users/${id}`
        const loadUser = async () => {
            try {
                const res = await fetch(apiurl);
                const data = await res.json();
                setUser(data);
            }
            catch (err) {
                console.log(err);
            }
        }
        loadUser();
    }, [])

    console.log(user);

    const { name, email, phone, address, website } = user;

    return (
        <>
            <div>
                <h1>{name}</h1>
                <h3>{email}</h3>
                <p><code>{phone}</code></p>
                <p>{website}</p>
            </div>

            {/* <div>
                <h1>Address</h1>
                <p>House: {address.suite}</p>
                <p>Street: {address.street}</p>
                <p>City: {address.city}</p>
                <p>Zip: {address.zipcode}</p>
            </div> */}
        </>
    );
};

export default UserDetail;