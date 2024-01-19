import { useEffect, useState } from 'react';

const useRouteState = () => {
  const [currentRoute, setCurrentRoute] = useState('/');

  const handleRouteChange = (location) => {
    setCurrentRoute(location.pathname);
  };

  useEffect(() => {
    const storedRoute = localStorage.getItem('currentRoute');
    if (storedRoute) {
      setCurrentRoute(storedRoute);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('currentRoute', currentRoute);
  }, [currentRoute]);

  return { currentRoute, handleRouteChange };
};

export default useRouteState;
