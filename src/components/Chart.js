import React from 'react';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,

} from 'chart.js';
import { Line } from 'react-chartjs-2';


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,

);




function Chart() {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },

        },
    };

    const labels = ['Jan', 'Mar', 'May', 'Jul', 'Sep', 'Nov', 'Dec'];

    const data = {
        labels,
        datasets: [
            {
                label: 'Earnings Overview',
                data: [10000, 5000, 20000, 15000, 30000, 25000, 40000],
                borderColor: 'blue',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',


            },

        ],
    };
    return <Line options={options} data={data} />;
}


export default Chart