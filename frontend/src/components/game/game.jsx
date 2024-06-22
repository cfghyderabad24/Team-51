
import React, { useState } from 'react';
import "./style.css"; // Import your CSS file

function App() {
    const [showLeaderboard, setShowLeaderboard] = useState(false);

    const openLeaderboardModal = () => {
        setShowLeaderboard(true);
    };

    const closeLeaderboardModal = () => {
        setShowLeaderboard(false);
    };

    return (
        <div className="App">
            <header>
                <nav>
                    <ul>
                        <li><a href="#" onClick={openLeaderboardModal}>Leaderboard</a></li>
                        {/* Other navigation items can be added here */}
                        
                    </ul>
                </nav>
            </header>

            <main>
                <div className="game-image">
                    <img src="wallpaper.gif" alt="Game Landscape" />
                </div>
            </main>

            {showLeaderboard && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeLeaderboardModal}>&times;</span>
                        <h2>Leaderboard</h2>
                        <div id="leaderboardData">
                            {/* Leaderboard data will be displayed here dynamically */}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;
