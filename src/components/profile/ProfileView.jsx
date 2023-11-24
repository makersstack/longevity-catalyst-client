import React from 'react';
import useAuth from '../../hooks/UseAuth';
import ContributorProfile from '../../pages/ContributorProfile';
import ProfileShow from '../../pages/ProfileShow';


const ProfileView = () => {
  const { isLoggedIn, } = useAuth();

  return (
    <>
      {!isLoggedIn ? (
        <ProfileShow />
      ) : (
        <ContributorProfile />
      )}
    </>
  );
};

export default ProfileView;
