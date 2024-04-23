import React from 'react';

const ProfileCard = () => {
  return (
    <div className="bg-base-200 rounded-lg p-4">
      <div className="flex items-center mb-4">
        <img
          src="https://via.placeholder.com/50"
          alt="Profile"
          className="rounded-full mr-4"
        />
        <span className="font-bold">John Doe</span>
      </div>
      <nav>
        <ul>
          <li className="mb-2">
            <a href="#" className="hover:text-primary">
              Dashboard
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="hover:text-primary">
              Playlists
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="hover:text-primary">
              Settings
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default ProfileCard;
