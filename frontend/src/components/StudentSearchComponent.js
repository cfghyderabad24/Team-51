import React from 'react';
 
function StudentSearchComponent({ searchCourse, courseSearchUserFunction }) {
    return (
        <header className="App-header">
            <p>welcome student</p>
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
 
export default StudentSearchComponent;