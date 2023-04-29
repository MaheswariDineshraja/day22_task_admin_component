import React from 'react'
import "../styles/cards.css"

const Cards = () => {
    let taskPercentage = "50%"
    return (
        <div className='row'>
            <div className="col-lg-3 ">
                <div className="card-box-whole-section">
                    <div className="card-box-section-1">
                        <div className="card-box-heading">EARNINGS (MONTHLY)</div>
                        <div className="cardbox-monthly-earning">$7000</div>
                    </div>
                    <div className="card-box-section-2"><i class="fa fa-calendar-o fa-2x" aria-hidden="true"></i></div>
                </div>


            </div>
            <div className="col-lg-3">
                <div className="card-box-whole-section">
                    <div className="card-box-section-1">
                        <div className="card-box-heading">EARNINGS (ANNUAL)</div>
                        <div className="cardbox-monthly-earning">$1,00,000</div>
                    </div>
                    <div className="card-box-section-2"><i class="fa fa-usd fa-2x" aria-hidden="true"></i>
                    </div>
                </div>

            </div>
            <div className="col-lg-3">
                <div className="card-box-whole-section">
                    <div className="card-box-section-1">
                        <div className="card-box-heading">TASKS</div>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <div className="cardbox-monthly-earning">{taskPercentage}</div>
                            <div className="task-skill-set">
                                <div className="task-level">
                                    <div className="percentage-level" style={{ width: taskPercentage }}></div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="card-box-section-2"><i class="fa fa-tasks fa-2x" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
            <div className="col-lg-3">

                <div className="card-box-whole-section">
                    <div className="card-box-section-1">
                        <div className="card-box-heading">PENDING REQUESTS</div>
                        <div className="cardbox-monthly-earning">18</div>
                    </div>
                    <div className="card-box-section-2" ><i class="fa fa-comments fa-2x" aria-hidden="true"></i></div>
                </div>
            </div>


        </div>


    )
}

export default Cards