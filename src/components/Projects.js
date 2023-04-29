import React from 'react'
import "../styles/projects.css"
import PerProject from './ProjectList'

const Projects = () => {
    const listProjects = [{ projectname: "Server migration", percentage: "20", taskcolor: "red" },
    { projectname: "sales Tracking", percentage: "40", taskcolor: "orange" },
    { projectname: "Customer Database", percentage: "60", taskcolor: "Dodgerblue" },
    { projectname: "Payout Details", percentage: "80", taskcolor: "skyblue" },
    { projectname: "Account Setup", percentage: "100", taskcolor: "MediumSeaGreen" },
    ]
    const btnlist = [{ btnname: "Primary   #4e73df ", btnclass: "btn btn-primary" }
        , { btnname: "Success   #1cc88a", btnclass: "btn btn-success" }, { btnname: "Info   #36b9cc", btnclass: "btn btn-info" },
    { btnname: "warning   #f6c23e", btnclass: "btn btn-warning" }, { btnname: "Danger   #e74a3b", btnclass: "btn btn-danger" },
    { btnname: "Secondary   #858796", btnclass: "btn btn-secondary" },
    { btnname: "Light   #f8f9fc", btnclass: "btn btn-light" }, { btnname: "Dark   #5a5c69", btnclass: "btn btn-dark" }]
    return (

        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="project-whole-section">
                        <div className="illustration-heading">Projects</div>
                        {listProjects.map((project, index) => (
                            <>
                                <PerProject project={project} key={index} />
                            </>
                        ))}
                    </div>
                    <div className="button-whole-section">
                        {
                            btnlist.map((btns, index) => (
                                <>

                                    <button className={btns.btnclass} key={index}>{btns.btnname}</button>
                                </>
                            ))
                        }
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="small-box">
                        <div className="illustration-section">
                            <div className='illustration-heading'>illustrations</div>
                            <hr />
                            <p>Add some quality, svg illustrations to your project courtesy of unDraw, a constantly 
                                updated collection of beautiful svg images that you can use completely free and 
                                without attribution!</p>
                        </div>
                    </div>
                    \<div className="small-box">
                        <div className="illustration-section">
                            <div className='illustration-heading'>Development Approach</div>
                            <hr />
                            <p>SB Admin 2 makes extensive use of Bootstrap 4 utility classes in order to reduce CSS bloat and poor page performance. Custom CSS classes are used to create custom components and custom utility classes.

Before working with this theme, you should become familiar with the Bootstrap framework, especially the utility classes.</p>
                        </div>
                    </div>
                </div>
            </div>


        </div>


    )
}

export default Projects