import React, { useEffect, useState } from 'react';
import API from '../services/api';
import Loader from '../components/Loader';

function Dashboard() {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await API.get('/users/me');
        setProfile(response.data);
      } catch (err) {
        setError('Failed to load profile');
      }
    };
    fetchProfile();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      {error && <p className="text-red-500">{error}</p>}
      {profile ? (
        <div className="bg-white shadow-md p-4 rounded-md">
          <h2 className="text-xl font-semibold">Welcome, {profile.name}</h2>
          <p className="text-gray-700">Email: {profile.email}</p>
          <p className="text-gray-700">Bio: {profile.bio}</p>
          <p className="text-gray-700">Skills: {profile.skills.join(', ')}</p>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default Dashboard;