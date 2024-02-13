// Profile.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
//import { faGoogle } from '@fortawesome/free-brands-svg-icons';


const Profile = () => {
  // Example state for the profile data
  // In a real application, this data would likely be fetched from an API
  const profileData = {
    fullName: 'Sain Bux',
    email: 'sainbuxdev@gmail.com',
    role: 'Workspace Admin'
  };
  const navigate = useNavigate();
  const handleCancel = () => {
    navigate('/dashboard'); // Replace with your actual dashboard route
  };

  const handleSaveChanges = () => {
    // Implement your save logic here
    console.log('Save profile changes');

    navigate('/dashboard'); // Replace with your actual dashboard route
  };
  return (
    <div className="flex-grow p-8">
      <div className="bg-white rounded-lg p-6 shadow">
        <h2 className="text-xl font-semibold mb-4">Profile</h2>
        <div className="border-b pb-4">
          <h3 className="text-lg font-semibold">Profile picture</h3>
          <div className="flex items-center mt-2">
            <img src="profile.jpg" alt="Profile" className="h-20 w-20 rounded-full object-cover mr-4"/>
            <div>
              <p className="font-semibold">{profileData.fullName}</p>
              <p className="text-sm text-gray-600">{profileData.role}</p>
              <button className="flex items-center text-blue-600 mt-2">
                <FontAwesomeIcon icon={faUpload} className="mr-2" />
                Upload photo
              </button>
            </div>
          </div>
          {/* <div className="flex items-center mt-4 bg-blue-100 p-2 rounded">
            <FontAwesomeIcon icon={faGoogle} className="text-blue-600 mr-2" />
            <p className="text-sm">This account is connected to your Google account. Your details can only be changed from the Google account.</p>
          </div> */}
        </div>
        <div className="mt-4">
          <label htmlFor="fullName" className="block text-sm font-semibold">Full name</label>
          <input type="text" id="fullName" value={profileData.fullName} className="mt-1 p-2 w-full rounded border-gray-300 shadow-sm"/>

          <label htmlFor="email" className="block text-sm font-semibold mt-4">Email address</label>
          <input type="email" id="email" value={profileData.email} className="mt-1 p-2 w-full rounded border-gray-300 shadow-sm"/>

          <label htmlFor="role" className="block text-sm font-semibold mt-4">Role</label>
          <input type="text" id="role" value={profileData.role} className="mt-1 p-2 w-full rounded border-gray-300 shadow-sm"/>
        </div>
        <div className="flex justify-end mt-4">
          <button className="text-gray-600 mr-4" onClick={handleCancel}>Cancel</button>
          <button className="bg-purple-600 text-white py-2 px-6 rounded" onClick={handleSaveChanges}>Save changes</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
