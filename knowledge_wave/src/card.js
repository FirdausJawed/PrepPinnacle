import React from 'react';
import './card.css';
function Card({ user }) {
      return (
            <div className="card-container">
                  <img className="round" src={user.profilePicture} alt={user.name} />
                  <h3>{ user.name}</h3>
                  <h6>{user.bio}</h6>
                  <p>{ user.status}</p>          
            </div>

      );
}

export default Card;
