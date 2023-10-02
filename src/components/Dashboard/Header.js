import React from 'react';

import Logout from '../Logout';

const Header = ({ setIsAdding, setIsAuthenticated }) => {
  return (
    <header>
      <h1>Patient List</h1>
      <div style={{ marginTop: '10px', marginBottom: '8px' }}>
        {/* <button onClick={() => setIsAdding(true)}>Add Employee</button> */}
        <Logout setIsAuthenticated={setIsAuthenticated} />
      </div>
    </header>
  );
};

export default Header;