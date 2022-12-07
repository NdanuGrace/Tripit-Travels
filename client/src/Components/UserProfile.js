import React from 'react';

function UserProfile({name, username, email }) {

    

    return (
        <div className="outer-div">
            <h1>MY PROFILE:</h1>
            <div className="profile-card">
                <div className="profile-content">
                    
                   
                    <div className=''>
                    
                        <h1 className='profile-name'>{name}</h1>
                        <h1 className='profile-username'>{username}</h1>
                        <h1 className='profile-email'>{email}</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfile;
