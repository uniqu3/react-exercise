import React from 'react';

import useLocation from '../hooks/useLocation';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

const App = () => {
  const [lat, lng, errorMessage] = useLocation();

  let content;
  if (errorMessage) {
    content = <div>Error: {errorMessage}</div>;
  } else if (lat) {
    content = <SeasonDisplay lat={lat} />;
  } else {
    content = <Spinner message='Please accept location request' />;
  }

  return content;
};

export default App;
