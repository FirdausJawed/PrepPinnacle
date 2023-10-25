import React from 'react';

function ProfileDetails({ user }) {
      return (
            <div className="profile-details">
                  <h2>Details</h2>
                  <ul>
                        <li>
                              <strong>Location:</strong> {user.location}
                        </li>
                        <li>
                              <strong>Email:</strong> {user.email}
                        </li>
                        
                  </ul>
            </div>
      );
}

export default ProfileDetails;
