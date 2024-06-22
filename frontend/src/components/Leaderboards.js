// src/pages/LeaderboardPage.js
import React from 'react';
import Leaderboard from './Leaderboard';
import { students } from './data/students';
const Leaderboards = () => {
  return (
    <div>
      <Leaderboard students={students} />
    </div>
  );
};

export default Leaderboards;
