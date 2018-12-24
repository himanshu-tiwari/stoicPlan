import React from 'react';
import ProjectSummary from './ProjectSummary';
import { Link } from 'react-router-dom';

const ProjectList = ({ projects }) => {
    const projectList = projects && projects.length > 0 ? (
        projects.map(project => <Link to={'/project/' + project.id} key={project.id}><ProjectSummary project={project} /></Link>)
    ) : (
        <div className="card z-depth-0 project-summary" key="project1">
            <div className="card-content black-text">
                <p>No Projects to display...</p>
            </div>
        </div>
    );

    return(
        <div className="project-list section">

            {projectList}

        </div>
    );
};

export default ProjectList;