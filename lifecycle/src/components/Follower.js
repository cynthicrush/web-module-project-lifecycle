import React from 'react';

function Follower (props) {
    const {login} = props.follower
    return(
        <div>
            {login}
        </div>
    )
}
export default Follower;