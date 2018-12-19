import React from 'react';

const ProjectDetails = (props) => {
    const id = props.match.params.id;
    return(
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt odio itaque, eos impedit ipsum numquam eaque porro magnam quis illum accusantium hic eum unde, aperiam rem provident? Culpa, adipisci cumque.</p>
                </div>

                <div className="card-action grey-text">
                    <h6>Posted by Stoic Bruhmin</h6>
                    <p className="" style={{marginTop : 0}}>December 19 at 1:05 am</p>
                </div>
            </div>
        </div>
    );
}

export default ProjectDetails;