import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

const ProjectDetails = (props) => {
    const { project } = props;

    if(project) {
        return(
            <div className="container section project-details">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <span className="card-title">{ project.title }</span>
                        <p>{ project.content }</p>
                    </div>

                    <div className="card-action grey-text">
                        <h6>Posted by { project.authorFirstName } { project.authorLastName }</h6>
                        <p className="" style={{marginTop : 0}}>December 19 at 1:05 am</p>
                    </div>
                </div>
            </div>
        );
    } else { 
        return(
            <div className="container section project-details">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <span className="card-title">Loading...</span>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const projects = state.firestore.ordered.projects;
    const project = projects && projects.length > 0 ? projects.filter(project => project.id === id)[0] : null;

    return {
        project
    };
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection : 'projects' }
    ])
)(ProjectDetails);