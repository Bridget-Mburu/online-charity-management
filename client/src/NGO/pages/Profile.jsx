import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { logout } from '@/redux/slices/authSlice';

const NGOProfile = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { user, token } = useSelector((state) => state.auth);

  // Redirect to login if no token (i.e., user is not logged in)
  useEffect(() => {
    if (!token) {
      history.push('/login');
    }
  }, [token, history]);

  const handleLogout = () => {
    dispatch(logout());
    history.push('/login');
  };

  return (
    <div>
      {user ? (
        <div>
          <h2>{user.organization_name}</h2>
          <p><strong>Location:</strong> {user.location}</p>
          <p><strong>Description:</strong> {user.description}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default NGOProfile;
