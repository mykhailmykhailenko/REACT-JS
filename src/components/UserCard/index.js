import React from 'react';
import './style.css';
class UserCard extends React.Component {

    render() {
        const {user: {name: {first, last}, email, picture: {large}}} = this.props;
        return (
            <div className='card-wrapper'>
                <div className='image-wrapper'>
                     <img src={large} className='avatar'/>
                </div>
                <h2>{first} {last}</h2>
                <p className='desc'>{email}</p>
                <button>Connect</button>
            </div>
        )
    }
}
export default UserCard;