import React from 'react';

const ProjectSummary = (props) => {
    return(
        <div className="card z-depth-0 project-summary">
            <div className="card-content black-text">
                <span className="card-title">Project Title</span>
                <p>Posted by Stoic Bruhmin</p>
                <p className="grey-text">December 19 at 12:30 pm</p>
            </div>
        </div>
    );
};

export default ProjectSummary;