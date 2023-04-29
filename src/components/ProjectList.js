import React from "react";


function PerProject({ project }) {

    return (
        <>
            <div className="project-percent-section">
                <div className="project-name">{project.projectname}</div>
                {project.percentage === 100 ? <div className="percentage">Complete!</div> : <div className="percentage">{project.percentage}%</div>}

            </div>
            <div className="project-bar-section">
                <div className="project-bar" style={{ backgroundColor: project.taskcolor, width: project.percentage + "%" }}>
                </div>
            </div>
        </>

    )
}


export default PerProject