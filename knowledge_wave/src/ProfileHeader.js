import React from 'react';
function ProfileHeader({ user }) {
      return (
            <div className="profile-header">
                  <img src={user.profilePicture} alt={user.name} />
                  <h1>{user.name}</h1>
                  <p>{user.bio}</p>
            </div>
      );
}

export default ProfileHeader;
