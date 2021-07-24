import React from 'react';
import { useState } from 'react';
import Question from './Question.js';
const MainPage = () => {
    const [friend, setFriend] = useState(false)
    return (
        <div>
            <h2>You're My Friend? : {friend.toString()}</h2>
            <button onClick={()=>setFriend(!friend)}>Toggle</button>
            <Question friendCondition = {friend}></Question>
        </div>
    );
};

export default MainPage;