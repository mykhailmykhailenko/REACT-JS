import React from 'react';
import './style.css';

class UserCard extends React.Component {

    render() {
        const {user: {id, name, description, profilePicture}} = this.props;
        return (
            <div className='card-wrapper'>
                <div className='image-wrapper'>
                     <img src={profilePicture} className='avatar'/>
                </div>
                <h2>{name}</h2>
                <p className='desc'>{description}</p>
                <button>Connect</button>
            </div>
        )
    }
}

export default UserCard;