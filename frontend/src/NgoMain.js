import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const NgoMain = () => {
  const navigate = useNavigate();

  const handleFundingClick = () => {
    navigate('/funding');
  };

  return (
    <nav style={{ padding: '10px', backgroundColor: '#eee', display: 'flex', justifyContent: 'space-between' }}>
      <div>
        <Link to="/" style={{ margin: '0 10px' }}>NGOs</Link>
        <Link to="/funding" style={{ margin: '0 10px' }}>Funding</Link>
      </div>
      <button onClick={handleFundingClick} style={{ padding: '5px 10px' }}>
        Go to Funding
      </button>
    </nav>
  );
}

export default NgoMain;