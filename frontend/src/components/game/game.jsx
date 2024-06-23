import React, { useState } from 'react';
import './style.css'; // Import your CSS file
import easyImage from './easy.jpg'; // Adjust the path as needed

function Game() {
    const [showLeaderboard, setShowLeaderboard] = useState(false);
    const [showChallengeDropdown, setShowChallengeDropdown] = useState(false);
    const [selectedChallenge, setSelectedChallenge] = useState(null);
    const [showChallengeModal, setShowChallengeModal] = useState(false);

    const openLeaderboardModal = () => {
        setShowLeaderboard(true);
    };

    const closeLeaderboardModal = () => {
        setShowLeaderboard(false);
    };

    const toggleChallengeDropdown = () => {
        setShowChallengeDropdown(!showChallengeDropdown);
    };

    const handleChallengeSelect = (challenge) => {
        setSelectedChallenge(challenge);
        setShowChallengeDropdown(false); // Close dropdown after selecting a challenge
        setShowChallengeModal(true); // Open the challenge modal
    };

    const closeChallengeModal = () => {
        setShowChallengeModal(false);
    };

    // Sample data for leaderboard
    const leaderboardData = [
        { name: "Arun", score: 1200 },
        { name: "Pranav", score: 1100 },
        { name: "Akanksha", score: 900 },
        { name: "Aarefa", score: 850 },
        { name: "Aparna", score: 750 }
    ];

    // Sample data for challenges
    const challenges = [
        { difficulty: "Easy", score: 10 },
        { difficulty: "Medium", score: 50 },
        { difficulty: "Hard", score: 100 }
    ];

    return (
        <div className="App">
            <header>
                <nav>
                    <ul>
                        <li className="left"><a href="#">Login</a></li>
                        <div className="center-nav">
                            <li><a href="#" onClick={openLeaderboardModal}>Leaderboard</a></li>
                            <li className="dropdown">
                                <a href="#" onClick={toggleChallengeDropdown}>Challenge</a>
                                {showChallengeDropdown && (
                                    <ul className="dropdown-menu">
                                        {challenges.map((challenge, index) => (
                                            <li key={index} onClick={() => handleChallengeSelect(challenge)}>
                                                <span className="challenge-level">{challenge.difficulty}</span>
                                                <span className="challenge-score">Score: {challenge.score}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        </div>
                    </ul>
                </nav>
            </header>

            <main>
                <div className="game-image">
                    <img src={easyImage} alt="Game Landscape" />
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

            {showChallengeModal && selectedChallenge && (
                <div className="modal" onClick={closeChallengeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <span className="close" onClick={closeChallengeModal}>&times;</span>
                        <h2>Selected Challenge</h2>
                        <div className="challenge-details">
                            <p>Level: {selectedChallenge.difficulty}</p>
                            <p>Score: {selectedChallenge.score}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Game;

