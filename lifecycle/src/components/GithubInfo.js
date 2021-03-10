import React from 'react';


function GithubInfo(props) {
    const { login, name, company, location } = props.userInfo;
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
            
            
        </div>
    )
}
export default GithubInfo;