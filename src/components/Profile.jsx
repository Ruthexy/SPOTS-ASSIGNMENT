import React from 'react';
import avatar from '../assets/Avatar@2x.png';

function Profile() {
  return (
    <div className="profile">
      <img src={avatar} alt="profileImage" />
      <p>Aliaune Damala Bouga Time Bongo Puru Nacka Lu Lu Lu Badara Akon Thiam</p>
      <button>Edit Profile</button>
    </div>
  );
}

export default Profile;
