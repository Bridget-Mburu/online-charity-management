import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useHistory } from 'react-router-dom';
import { logout } from '../redux/slices/authSlice';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const NGOProfile = () => {
  const dispatch = useDispatch();
  // const history = useHistory();
  const navigate = useNavigate()
  const { user, token } = useSelector((state) => state.auth);

  // Redirect to login if no token (i.e., user is not logged in)
  useEffect(() => {
    if (!token) {
      navigate('/ngo-profile');
    }
  }, [token, history]);

  const handleLogout = () => {
    dispatch(logout());
    history.push('/login');
  };

  return (
    <div>
      <Navbar/>
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
  )
}
export default NGOProfile

