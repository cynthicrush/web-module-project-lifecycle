import React from 'react';
import Followers from './Follower'

function GithubInfo(props) {
    const { login, name, company, location, followers } = props.userInfo;

    return(
        <div className='infos'>
            <div className='info'>
                Login: {login}
            </div>
            <div className='info'>
                Name: {name}
            </div>
            <div className='info'>
                Company: {company}
            </div>
            <div className='info'>
                Location: {location}
            </div>
            <div className='info'>
                Followers: {
               followers.map(follower => {
                    return (
                        <Followers key={follower.id} follower={follower} />
                    )
                })
            }
            </div>

            
        </div>
    )
}
export default GithubInfo;