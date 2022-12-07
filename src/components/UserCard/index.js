import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

function UserCard (props){

        const {user: {name: {first, last}, email, picture: {large}}} = props;
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

//UserCard.
UserCard.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.shape({
            first: PropTypes.string.isRequired,
            last: PropTypes.string.isRequired
        }).isRequired,
        email: PropTypes.string.isRequired,
        picture: PropTypes.shape({
            large: PropTypes.string.isRequired
        })
    }).isRequired
};

UserCard.defaultProps = {
    user: {
        name: {
            first: 'Anonym',
            last: 'Anon'
        },
        email: '',
        picture: {
            large: ''
        }
 }
}

export default UserCard;