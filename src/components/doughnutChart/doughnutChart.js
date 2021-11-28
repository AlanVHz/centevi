import React from 'react'
import { Doughnut } from "react-chartjs-2"

export const DoughnutChart = ({ data }) => {
    return (
        <div>
            <Doughnut 
                data={{
                    labels: data.map(elem => elem.label),
                    datasets: [
                        {
                            label: 'Titlee',
                            data: data.map(elem => elem.value),
                            backgroundColor: data.map(elem => elem.color),
                        },
                    ]
                }}
                height={200}
                width={200}
                options={{
                    mantainAspectRatio: false,
                    responsive: true,
                    plugins: {
                        legend: {
                            display: true,
                        }
                    },
                    cutout: 100,
                }}
            />
        </div>
    )
}

export default DoughnutChart
