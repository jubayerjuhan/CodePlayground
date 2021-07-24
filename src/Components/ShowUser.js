import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const ShowUser = (props) => {
    const user = props.user;
    const {id, name, email} = user;
    // console.log(user);
    const userStyle = {
        border: '1px solid purple',
        margin: '10px',
        borderRadius: '10px'
}
    const history = useHistory();
    const handleClick = (userId) => {
        const generateUrl = `/user/${userId}`
        history.push(generateUrl);
    }

    return (
        <div style={userStyle}>
            <Link to={`/user/`+ id}><h2>{name}</h2></Link>
            <p>{email}</p>
            <button style={{cursor: 'pointer'}} onClick={() =>handleClick(id)}>Click Me</button>
        </div>
    );
};

export default ShowUser;