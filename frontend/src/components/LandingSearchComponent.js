import React from 'react';
 
function LandingSearchComponent({ searchCourse, courseSearchUserFunction }) {
    return (
        <header className="App-header">
            <p>producsts</p>
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search for Products..."
                    value={searchCourse}
                    onChange={courseSearchUserFunction}
                />
            </div>
        </header>
    );
}
 
export default LandingSearchComponent;