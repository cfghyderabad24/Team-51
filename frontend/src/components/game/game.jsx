import React, { useState } from 'react';
import './style.css'; // Import your CSS file

function App() {
    const [showLeaderboard, setShowLeaderboard] = useState(false);

    const openLeaderboardModal = () => {
        setShowLeaderboard(true);
    };

    const closeLeaderboardModal = () => {
        setShowLeaderboard(false);
    };

    // Sample data for leaderboard
    const leaderboardData = [
        { name: "Player 1", score: 1200 },
        { name: "Player 2", score: 1100 },
        { name: "Player 3", score: 900 },
        { name: "Player 4", score: 850 },
        { name: "Player 5", score: 750 }
    ];

    return (
        <div className="App">
            <header>
                <nav>
                    <ul>
                        <li><a href="#" onClick={openLeaderboardModal}>Leaderboard</a></li>
                    </ul>
                </nav>
            </header>

            <main>
                <div className="game-image">
                    <img src="wallpaper.gif" alt="Game Landscape" />
                </div>
            </main>

            {showLeaderboard && (
                <div className="modal" onClick={closeLeaderboardModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <span className="close" onClick={closeLeaderboardModal}>&times;</span>
                        <h2>Leaderboard</h2>
                        <div className="leaderboard">
                            {leaderboardData.map((player, index) => (
                                <div key={index} className="leaderboard-item">
                                    <span className="player-name">{player.name}</span>
                                    <div className="score-bar">
                                        <div 
                                            className="score-fill" 
                                            style={{ width: `${player.score / 12}%` }} // Scale width
                                        ></div>
                                    </div>
                                    <span className="player-score">{player.score}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;
