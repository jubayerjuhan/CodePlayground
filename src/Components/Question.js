import React from 'react';

const Question = (props) => {
    const friend = props.friendCondition;
    let greetings;

    if (friend) {
        greetings = <p>Hey, How Are You</p>;
        // food = <p>Lets have some food. I'll pay</p>;
    }

    else {
        greetings = <p>Who The Hell Are You?</p>;
        // food = <p>Lets eat some food. His his whose whose bill</p>;
    }

    return (
        <div>
            {/* Normal If Else */}

            <h1>Greetings</h1>
            {greetings}
            
            <h1>Food</h1>
            {/* Ternary Oparator */}

            {
                friend ?  <p>Lets have some food. I'll pay</p>
                : <p>Lets eat some food. His his whose whose bill</p>
            }

            <h1>Social Media</h1>
            {/* Logical and && */}

            {
                friend && <h3>Add Me To Your Facebook</h3>
            }
            
        </div>
    );
};

export default Question;