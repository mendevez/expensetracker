import React from 'react';
import { Bar } from 'react-chartjs-2';

const TotalCostByMonthChart = ({ totalCostByMonthChartData }) => {
  if (!totalCostByMonthChartData) {
    return null;
  }

  const chartLabels = Object.keys(totalCostByMonthChartData);
  const expensesByMonth = Object.values(totalCostByMonthChartData);

  const data = {
    labels: chartLabels,
    datasets: [
      {
        data: expensesByMonth,
        backgroundColor: [
          '#003f5c',
          '#58508d',
          '#bc5090',
          '#ff6361',
          '#251e3e',
          '#488f31',
          '#6e0f0f',
          '#2ab7ca',
          '#b3cde0',
        ],
      },
    ],
  };
  return (
    <div className="add-box-shadow">
      <Bar
        height={300}

        data={data}
        options={{
          title: {
            text: 'Total expenses by month',
            display: true,
            fontSize: 20,
          },
          maintainAspectRatio: false,
          responsive: true,
        }}
        legend={{ display: false }}
      />
    </div>
  );
};

export default TotalCostByMonthChart;
